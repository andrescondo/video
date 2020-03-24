// comillas dobles ``

(async function load (){
	 async function getData(url){
		const response = await fetch(url);
		const data = await response.json();
		if (data.data.movie_count > 0){
			return data
		}
		throw new Error('No se encontró ningún resultado');
	}	

	const $form = document.getElementById('form');
	const $home = document.getElementById('home');
	const $featuringContainer = document.getElementById('featuring');

	function setAttributes($element, attributes){
		for (const attribute in attributes){
			$element.setAttribute(attribute, attributes[attribute]);
		}
	}
	//'https://yts.mx/api#listmovie
	const BASE_API ='https://yts.mx/api/v2/';

	function featuringTemplate(peli){
		return(
			`<div class="featuring">
				<div class="featuring-image">
					<img src="${peli.medium_cover_image}" width="70" height="100" alt="">
				</div>
				<div class="featuring-content">
					<p class="featuring-title">Pelicula encontrada</p>
					<p class="featuring-album">${peli.title}</p>
				</div>
			</div>`
		)
	}

	$form.addEventListener('submit', async (event)=>{
		event.preventDefault();
		$home.classList.add('search-active')
		const $loader = document.createElement('img');
		setAttributes($loader, {
			src:'image/loader.gif',
			height:50,
			width:50,
			})
		$featuringContainer.append($loader);

		const data = new FormData($form);//debugger
		try{
			const {
				data: {
					movies: pelis
				}
			} = await getData(`${BASE_API}list_movies.json?limit=1&query_term=${data.get('name')}`)
			debugger
			const HTMLString = featuringTemplate(pelis[0]);
			$featuringContainer.innerHTML = HTMLString;
		}catch(error){
			alert(error.message);
			$loader.remove();
			$home.classList.remove('search-active');
		}
	})
 
	function videoItemTemplate(movie, category){
		return (
		`<div class="primaryPlaylistItem" data-id="${movie.id}" data-category="${category}">
			<div class="primaryPlaylistItem-image">
				<img src="${movie.medium_cover_image}">
			</div>
			<h4 class="primaryPlaylistItem-title">
				${movie.title}
			</h4>
		</div>
		`
		)
	}
	function createTemplate(HTMLString){
		const html = document.implementation.createHTMLDocument();
		html.body.innerHTML = HTMLString;
		return html.body.children[0];
	}

	function addEventClick($element){
		$element.addEventListener('click', () => {
			showModal($element)
		})
		//$('div').on('click', function(){}) -- Como funcionaria en Jquery
	}

	function renderMovieList(list, $container, category){
		$container.children[0].remove();
		list.forEach((movie)=> {
			const HTMLString = videoItemTemplate(movie, category);
			const movieElement = createTemplate(HTMLString);
			$container.append(movieElement);
			const image = movieElement.querySelector('img');
			image.addEventListener('load', (event)=>{
				event.target.classList.add('fadeIn');
			})
			addEventClick(movieElement);
		})
	}
	//IMPORTANTE cuando se usa una API sirve ver la ruta completa para la solicitud del dato requerido
	const { data: {movies: actionList } } = await getData( `${BASE_API}list_movies.json?genre=action`);
	window.localStorage.setItem('actionList', JSON.stringify(actionList))
	const $actionContainer = document.getElementById('action');//cuando se usa 	gEBI, no se debe llamar con un #
	renderMovieList(actionList, $actionContainer, 'action');

	const { data: {movies: dramaList } } = await getData(`${BASE_API}list_movies.json?genre=drama`);
	window.localStorage.setItem('dramaList', JSON.stringify(dramaList))
	const $dramaContainer = document.getElementById('drama');
	renderMovieList(dramaList, $dramaContainer, 'drama');

	const { data: {movies: animationList } } = await getData(`${BASE_API}list_movies.json?genre=animation`);
	window.localStorage.setItem('animationList', JSON.stringify(animationList))
	const $animationContainer = document.getElementById('animation');
	renderMovieList(animationList, $animationContainer, 'animation');
	
	const $modal = document.getElementById('modal');//usar el getEBI, para luego usar el querySelector
	const $overlay = document.getElementById('overlay');
	const $hideModal = document.getElementById('hide-modal');
	
	const $modalTitle = $modal.querySelector('h1');
	const $modalImage = $modal.querySelector('img');
	const $modalDescription = $modal.querySelector('p');

	function findById(list, id){ //importante retornar los valores de las funciones
		return list.find(movie => movie.id === parseInt(id, 10))
	}
	function findMovie(id, category){//importante retornar los valores de las funciones
		switch (category){
			case 'action' : {
				return findById(actionList, id)
			}
			case 'drama' : {
				return findById(dramaList, id)
			}
			default : {
				return findById(animationList, id)
			}
		}
		
	}

	function showModal($element){
		$overlay.classList.add('active');
		$modal.style.animation = 'modalIn .8s forwards';
		const id = $element.dataset.id;
		const category = $element.dataset.category;
		const data = findMovie(id, category);

		$modalTitle.textContent = data.title;
		//$modalImage.setAttribute('src', data.medium_cover_image);--Sale 404 por eso retiro esta opción
		$modalDescription.textContent = data.description_full
		//debugger
	}

	$hideModal.addEventListener('click', hideModal);
	function hideModal(){
		$overlay.classList.remove('active');
		$modal.style.animation = 'modalOut .8s forwards';
	}

})()