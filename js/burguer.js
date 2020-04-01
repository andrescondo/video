// alert('To bien?');

const ipad = window.matchMedia('screen and (max-windth: 800px)');
const menu = document.querySelector('.home-sidebar');
const featuring = document.querySelector('.home-featuring');
const burgerButton = document.querySelector('#burger-menu');
const featuringButton = document.querySelector('#hideFeaturing');

ipad.addListener(validation);

function validation (event){
	if(event.macthes){
		burgerButton.addEventListener('click', hideShow);
	}else{
		burgerButton.removeEventListener('click', hideShow);
	}

	if(event.macthes){
		featuringButton.addEventListener('click', hideShow);
	}else{
		featuringButton.removeEventListener('click', hideShow);
	}
}

validation(ipad);


	function hideShow(){
		if(menu.classList.contains('is-active')){
			menu.classList.remove('is-active');
		}else{
			menu.classList.add('is-active');
		}

		if(featuring.classList.contains('is-active')){
			featuring.classList.remove('is-active');
		}else{
			featuring.classList.add('is-active');
		}
}
