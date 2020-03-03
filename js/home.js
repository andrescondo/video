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
	const terrorList = await getData('https://yts.mx/api/v2/list_movies.json?genre=terror');
	
	console.log('actionList: ',actionList,dramaList,terrorList);

	const $actionContainer = document.getElementByTd('#action');
	const $dramaContainer = document.getElementByTd('#drama');
	const $animationContainer = document.getElementByTd('#animation');
	const $featuringContainer = document.getElementByTd('#featuring');
	const $form = document.getElementByTd('#form');
	const $home = document.getElementByTd('#home');



	const $modal = document.querySelector('modal');
	const $overlay = document.getElementByTd('overlay');
	const $hideModal = document.getElementByTd('hide-modal');
	
	const $modalTitle = $modal.querySelector('h1');
	const $modalImage = $modal.querySelector('img');
	const $modalDescription = $modal.querySelector('p');
})()