// alert('To bien?');

const ipad = window.matchMedia('screen and (max-windth: 799px)');
const menu = document.querySelector('.home-sidebar');

const burgerButton = document.querySelector('#burger-menu')

ipad.addListener(validation)

function validation (event){
	if(event.macthes){
		burgerButton.addEventListener('click', hideShow);
	}else{
		burgerButton.removeEventListener('click', hideShow);
	}

	function hideShow(){
		if(menu.classList.contains('is-active')){
			menu.classList.remove('is-active');
		}else{
			menu.classList.add('is-active');
		}
	}
}