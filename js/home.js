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
	const response = await fetch('https://yts.mx/api/v2/list_movies.json?genre=action');
	const data = await response.json();
	console.log(data);
})()