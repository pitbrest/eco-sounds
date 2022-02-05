const menu = document.querySelector('.nav-list')
const burgerButton = document.querySelector('.burger')
const themeButtons = document.querySelectorAll('.nav-item')
const mainSection = document.querySelector('.main')
const audioPlayer = document.querySelector('.audio-player')
const audioPlayerPlayButton = document.querySelector('.media-buttons__item.play')
const audioPlayerPauseButton = document.querySelector('.media-buttons__item.pause')
const audioPlayerDownloadButton = document.querySelector('.media-buttons__item.download a')
const audio = new Audio


themeButtons.forEach(button => {
	button.addEventListener('click', (event) => {
		event.preventDefault

		themeButtons.forEach(item => item.classList.remove('active'))
		button.classList.add('active')
		menu.classList.remove('active')
		burgerButton.classList.toggle('active')

		let buttonTargetValue = (button.getAttribute('target'))

		if (buttonTargetValue == 'solovey' && button.classList.contains('active')) {
			mainSection.setAttribute('class', `main ${buttonTargetValue}`)
			audioPlayer.setAttribute('src', `assets/audio/${buttonTargetValue}.mp3`)
			audioPlayerDownloadButton.setAttribute('href', `assets/audio/${buttonTargetValue}.mp3`)
			if (audioPlayerPlayButton.classList.contains('active')) {
				audioPlayerPauseButton.classList.remove('active')
				audio.currentTime = 0
				audio.src = audioPlayer.getAttribute('src')
				audio.play()
			}
		}
		if (buttonTargetValue == 'drozd' && button.classList.contains('active')) {
			mainSection.setAttribute('class', `main ${buttonTargetValue}`)
			audioPlayer.setAttribute('src', `assets/audio/${buttonTargetValue}.mp3`)
			audioPlayerDownloadButton.setAttribute('href', `assets/audio/${buttonTargetValue}.mp3`)
			if (audioPlayerPlayButton.classList.contains('active')) {
				audioPlayerPauseButton.classList.remove('active')
				audio.currentTime = 0
				audio.src = audioPlayer.getAttribute('src')
				audio.play()
			}
		}
		if (buttonTargetValue == 'zarynka' && button.classList.contains('active')) {
			mainSection.setAttribute('class', `main ${buttonTargetValue}`)
			audioPlayer.setAttribute('src', `assets/audio/${buttonTargetValue}.mp3`)
			audioPlayerDownloadButton.setAttribute('href', `assets/audio/${buttonTargetValue}.mp3`)
			if (audioPlayerPlayButton.classList.contains('active')) {
				audioPlayerPauseButton.classList.remove('active')
				audio.currentTime = 0
				audio.src = audioPlayer.getAttribute('src')
				audio.play()
			}
		}
		if (buttonTargetValue == 'javoronok' && button.classList.contains('active')) {
			mainSection.setAttribute('class', `main ${buttonTargetValue}`)
			audioPlayer.setAttribute('src', `assets/audio/${buttonTargetValue}.mp3`)
			audioPlayerDownloadButton.setAttribute('href', `assets/audio/${buttonTargetValue}.mp3`)
			if (audioPlayerPlayButton.classList.contains('active')) {
				audioPlayerPauseButton.classList.remove('active')
				audio.currentTime = 0
				audio.src = audioPlayer.getAttribute('src')
				audio.play()
			}
		}
		if (buttonTargetValue == 'slavka' && button.classList.contains('active')) {
			mainSection.setAttribute('class', `main ${buttonTargetValue}`)
			audioPlayer.setAttribute('src', `assets/audio/${buttonTargetValue}.mp3`)
			audioPlayerDownloadButton.setAttribute('href', `assets/audio/${buttonTargetValue}.mp3`)
			if (audioPlayerPlayButton.classList.contains('active')) {
				audioPlayerPauseButton.classList.remove('active')
				audio.currentTime = 0
				audio.src = audioPlayer.getAttribute('src')
				audio.play()
			}
		}
	})
})

audioPlayerPlayButton.addEventListener('click', (event) => {

	if (audioPlayerPauseButton.classList.contains('active')) {
		audioPlayerPauseButton.classList.remove('active')
		audioPlayerPlayButton.classList.add('active')
		audio.play()
	}
	else if (!audioPlayerPauseButton.classList.contains('active')) {
		audioPlayerPlayButton.classList.add('active')
		audio.currentTime = 0
		audio.src = audioPlayer.getAttribute('src')
		audio.play()
	}
})

audioPlayerPauseButton.addEventListener('click', (event) => {
	audioPlayerPlayButton.classList.remove('active')
	audioPlayerPauseButton.classList.add('active')
	audio.pause()
})

