const nickInput = document.getElementById('nickname2');
const nickNav = document.getElementById('nickname');
const salva = document.getElementById('salva');

salva.addEventListener('click', function (e) {
	e.preventDefault();
	localStorage.setItem('nickname_netflix', nickInput.value);
	location.reload();
});

const gestisciNickname = () => {
	const nick = localStorage.getItem('nickname_netflix');
	if (nick) {
		nickInput.value = nick;
		nickNav.innerText = nick;
	}
};

const init = () => {
	gestisciNickname();
};

window.addEventListener('load', init);
