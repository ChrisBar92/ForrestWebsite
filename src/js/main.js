const allMenuLinks = document.querySelectorAll('.nav__list-link')
const scrollSpySections = document.querySelectorAll('.scrollspy')
const footerYear = document.querySelector('.footer__copyright-year')
const navBtn = document.querySelector('.nav__burger')
const barsIcon = document.querySelector('.fa-bars')
const xIcon = document.querySelector('.fa-xmark')
const navList = document.querySelector('.nav__list--mobile')
const navListItem = document.querySelectorAll('.nav__item')

const handleNav = () => {
	barsIcon.classList.toggle('hide')
	xIcon.classList.toggle('hide')
	navList.classList.toggle('show-navigation')

	allMenuLinks.forEach(listItem => {
		listItem.addEventListener('click', () => {
			xIcon.classList.add('hide')
			barsIcon.classList.remove('hide')
			navList.classList.remove('show-navigation')
		})
	})
}

// const handleScrollSpy = () => {
// 	if (document.body.classList.contains('main-page')) {
// 		const sections = []

// 		scrollSpySections.forEach(section => {
// 			if (window.scrollY <= section.offsetTop + section.offsetHeight - 80) {
// 				sections.push(section)

// 				const activeSection = document.querySelector(`[href*="${sections[0].id}"]`)

// 				allMenuLinks.forEach(link => link.classList.remove('active'))
// 				activeSection.classList.add('active')
// 			}
// 		})
// 	}
// }

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurrentYear()
// window.addEventListener('scroll', handleScrollSpy)
navBtn.addEventListener('click', handleNav)
