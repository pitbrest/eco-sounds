

function burgerAction() {
	const burgerButton = document.querySelector('.burger')
	const navMenu = document.querySelector('.nav-list')

	burgerButton.addEventListener('click', (event) => {
		burgerButton.classList.toggle('active')
		navMenu.classList.toggle('active')
	})
}

burgerAction()