//Comillas invertidas (  `  )   

const www = 'https://yts.mx/api/v2';
console.log('Hola mundo');
const getUser = new Promise(function(todoBien, todoMal){
	//Llamar a un API
	setTimeout(function(){
		//luego de 3 segundos
		todoMal('Se acabo el tiempo');
	}, 3000)
	

})

getUser
	.then(function(){
		console.log('Todo bien esta en la vida');
	})
	.catch(function(message){
		console.log(message);
	})


Promise.all([
		getUser,
		getUser
	])
.then()
.catch(function(message){
	console.log(message)
})

fetch('https://randomuser.me/api/')
	.then(function(response){

		return response.json();
	})
	.then(function(user){
		console.log('user', user.results[0].name.first)
	})
	.catch(function()
	{
		console.log('Algo fallo');
	});//Si se usa siempre terminarlos con punto y coma

//API== https://yts.mx/api
(async function load (){
	//await
	//action--animation--terror
	 async function getData(url){
		const response = await fetch(url);
		const data = await response.json();
		return data;
	}
	const actionList = await getData('https://yts.mx/api/v2/list_movies.json?genre=action');
	const dramaList = await getData('https://yts.mx/api/v2/list_movies.json?genre=drama');
	const animationList = await getData('https://yts.mx/api/v2/list_movies.json?genre=animation');
	console.log(actionList,dramaList,animationList);
	function videoItemTemplate(movie)
	{
		return (
		`<div class="primaryPlaylistItem">
			<div class="primaryPlaylistItem-image">
				<img src="${movie.medium_cover_image}">
			</div>
			<h4 class="primaryPlaylistItem-title">
				${movie.title}
			</h4>`
		)
	}
	function createTemplate(HTMLString)
	{
		const html = document.implementation.createHTMLDocument();
		html.body.innerHTML = HTMLString;
		return html.body.children[0];
	}

	function renderMovieList(list, $container)
	{
		$container.children[0].remove();
		list.forEach((movie)=> {
			const HTMLString = videoItemTemplate(movie);
			const movieElement = createTemplate(HTMLString);
			$actionContainer.append(movieElement);
		})
	}
	//IMPORTANTE cuando se usa una API sirve ver la ruta completa para la solicitud del dato requerido
	const $actionContainer = document.getElementById('action');//cuando se usa 	gEBI, no se debe llamar con un #
	renderMovieList(actionList.data.movies , $actionContainer);

	const $dramaContainer = document.getElementById('drama');
	renderMovieList(dramaList.data.movies , $dramaContainer);

	const $animationContainer = document.getElementById('animation');
	renderMovieList(animationList.data.movies , $animationContainer);

	const $featuringContainer = document.getElementById('#featuring');
	const $form = document.getElementById('#form');
	const $home = document.getElementById('#home');

	const $modal = document.getElementById('modal');//usar el getEBI, para luego usar el querySelector
	const $overlay = document.getElementById('overlay');
	const $hideModal = document.getElementById('hide-modal');
	
	const $modalTitle = $modal.querySelector('h1');
	const $modalImage = $modal.querySelector('img');
	const $modalDescription = $modal.querySelector('p');

	
	// console.log(videoItemTemplate('image/covers/midnight.jpg', 'Bitcoins'));
})()