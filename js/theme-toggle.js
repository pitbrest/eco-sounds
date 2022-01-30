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

		let buttonTargetValue = (button.getAttribute('target'))

		if (buttonTargetValue == 'solovey' && button.classList.contains('active')) {
			mainSection.setAttribute('class', `main ${buttonTargetValue}`)
			audioPlayer.setAttribute('src', `assets/audio/${buttonTargetValue}.mp3`)
			audioPlayerDownloadButton.setAttribute('href', `assets/audio/${buttonTargetValue}.mp3`)
		}
		if (buttonTargetValue == 'drozd' && button.classList.contains('active')) {
			mainSection.setAttribute('class', `main ${buttonTargetValue}`)
			audioPlayer.setAttribute('src', `assets/audio/${buttonTargetValue}.mp3`)
			audioPlayerDownloadButton.setAttribute('href', `assets/audio/${buttonTargetValue}.mp3`)
		}
		if (buttonTargetValue == 'zarynka' && button.classList.contains('active')) {
			mainSection.setAttribute('class', `main ${buttonTargetValue}`)
			audioPlayerDownloadButton.setAttribute('href', `assets/audio/${buttonTargetValue}.mp3`)
		}
		if (buttonTargetValue == 'javoronok' && button.classList.contains('active')) {
			mainSection.setAttribute('class', `main ${buttonTargetValue}`)
			audioPlayerDownloadButton.setAttribute('href', `assets/audio/${buttonTargetValue}.mp3`)
		}
		if (buttonTargetValue == 'slavka' && button.classList.contains('active')) {
			mainSection.setAttribute('class', `main ${buttonTargetValue}`)
			audioPlayerDownloadButton.setAttribute('href', `assets/audio/${buttonTargetValue}.mp3`)
		}
	})
})


audioPlayerPauseButton.addEventListener('click', (event) => {

	audioPlayerPlayButton.classList.remove('active')
	audioPlayerPauseButton.classList.add('active')		
	audio.pause()
})

audioPlayerPlayButton.addEventListener('click', (event) => {
	
	if (audioPlayerPauseButton.classList.contains('active')) {
		audioPlayerPauseButton.classList.remove('active')
		audioPlayerPlayButton.classList.toggle('active')	
		audio.currentTime			
		audio.src = audioPlayer.getAttribute('src')
		audio.play()
	}
	else if (!audioPlayerPauseButton.classList.contains('active')) {
		audio.currentTime = 0
		audio.src = audioPlayer.getAttribute('src')
		audio.play()
	}
})







/*
let isPlaying = false
let audioPausedTime = 0


audioPlayerToggleButton.addEventListener('click', (event) => {


	if (!isPlaying) {
		audio.src = audioPlayer.getAttribute('src')				
		audioPausedTime = audio.currentTime
		audio.play()
		isPlaying = true		
	}
	else if (isPlaying) {
		audio.src = audioPlayer.getAttribute('src')			
		isPlaying = 'paused'
		audio.pause()
		
	}
	else if (isPlaying == 'paused') {
		audio.src = audioPlayer.getAttribute('src')
		audio.currentTime	= audioPausedTime	
		audio.play()
		isPlaying = true
	}
})

*/

