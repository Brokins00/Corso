const nickProfile = document.getElementById('nickname2');
const nickNav = document.getElementById('nickname');
const nickMail = document.querySelectorAll('.email');

const gestisciNickname = () => {
	let nick = localStorage.getItem('nickname_netflix');
	console.log(nick);
	if (nick) {
		nickNav.innerText = nick;
		nickProfile.innerText = nick;
		nick = nick.replace(/\s/g, '').toLowerCase();
		console.log(nickMail.length);
		for (let i = 0; i < nickMail.length; i++) {
			console.log(nickMail[i].innerText);
			nickMail[i].innerText = `${nick}@gmail.com`;
		}
	}
};

const init = () => {
	gestisciNickname();
};

window.addEventListener('load', init);
