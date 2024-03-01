const videoPlayer = document.getElementById('videoPlayer');
const videoModal = new bootstrap.Modal(
	document.getElementById('videoModal'),
	{}
);
const videoModalLabel = document.getElementById('videoModalLabel');

document
	.getElementById('videoModal')
	.addEventListener('hidden.bs.modal', function () {
		videoPlayer.setAttribute('src', '');
	});
const gestisciImmagini = () => {
	const immagini = document.querySelectorAll('.card-img-film');
	for (let i = 0; i < immagini.length; i++) {
		immagini[i].addEventListener('click', function () {
			console.log('cliccato');
			let videoUrl = this.getAttribute('data-video-url');
			if (videoUrl) {
				videoPlayer.setAttribute('src', videoUrl);
				videoModalLabel.innerText = this.getAttribute('alt');
				videoPlayer.setAttribute('autoplay', '1');
				videoModal.show();
			}
		});
	}
};

const gestisciNickname = () => {
	const nick = localStorage.getItem('nickname_netflix');
	if (nick) {
		document.getElementById('nickname').innerText = nick;
	}
};

const init = () => {
	gestisciImmagini();
	gestisciNickname();
};

window.addEventListener('load', init);
