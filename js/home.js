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

		return response.json()
	})
	.then(function(user){
		console.log('user', user.results[0].name.first)
	})
	.catch(function()
	{
		console.log('Algo fallo');
	})