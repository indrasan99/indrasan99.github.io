document.onreadystatechange = () => {
	const loader = document.querySelector('#loader');
	const header = document.querySelector('header');
	const top = header.offsetTop;
	const backToTop = document.querySelector('#back-to-top');
	const clientHeight = document.documentElement.clientHeight;
	const trophy = document.querySelector('#trophy');
	const about = document.querySelector('#about');
	const portfolio = document.querySelector('#portfolio');
	const skills = document.querySelector('#skills');
	const blog = document.querySelector('#blog');
	const contact = document.querySelector('#contact');
	const footer = document.querySelector('footer');
	let executed = false;

	if (document.readyState === 'complete') {
		loader.classList.add('hidden');

		// On load & on scroll
		window.onload = function () {
			animateWithDelay('.menu-', false, 5, 'animate-fade-in-down');
			animateWithDelay('.logo', false, 1, 'animate-fade-in-down');

			animateWithDelay('.hero-', false, 5, 'animate-slide-in-left');
			animateWithDelay('.avatar', false, 1, 'animate-slide-in-right');

			// Reset animation
			animateWithDelay('.menu-', true, 5, 'animate-fade-in-down');
			animateWithDelay('.logo', true, 1, 'animate-fade-in-down');
			animateWithDelay('.hero-', true, 5, 'animate-slide-in-left');
			animateWithDelay('.avatar', true, 1, 'animate-slide-in-right');

			window.onscroll = (function () {
				return function () {
					// Fixed header
					if (window.scrollY > top) {
						header.classList.add('fixed-header');
					} else {
						header.classList.remove('fixed-header');
					}

					// Back to top
					if (window.scrollY > clientHeight) {
						backToTop.classList.remove('hidden');
						backToTop.classList.add('block');
					} else {
						backToTop.classList.remove('block');
						backToTop.classList.add('hidden');
					}

					// Header & hero section
					if (isElementVisible(document.querySelector('#hero'))) {
						animateWithDelay(
							'.menu-',
							false,
							5,
							'animate-fade-in-down'
						);
						animateWithDelay(
							'.logo',
							false,
							1,
							'animate-fade-in-down'
						);

						animateWithDelay(
							'.hero-',
							false,
							5,
							'animate-slide-in-left'
						);
						animateWithDelay(
							'.avatar',
							false,
							1,
							'animate-slide-in-right'
						);
					}

					// Trophy section
					if (isElementVisible(trophy)) {
						if (!executed) {
							animateNum('num-1', 0, 5, 1000);
							animateNum('num-2', 0, 15, 3000);
							animateNum('num-3', 0, 30, 4000);
							animateWithDelay(
								'.trophy-title-',
								false,
								2,
								'animate-slide-in-down'
							);
							animateWithDelay(
								'.trophy-box-',
								false,
								3,
								'animate-fade-in'
							);
						}
						executed = true;
					} else {
						animateWithDelay(
							'.trophy-box-',
							true,
							3,
							'animate-fade-in'
						);
						executed = false;
					}

					// About section
					if (isElementVisible(about)) {
						animateWithDelay(
							'.pic-',
							false,
							3,
							'animate-slide-in-left'
						);
						animateWithDelay(
							'.about-',
							false,
							8,
							'animate-slide-in-right'
						);
						animateWithDelay('.work-', false, 2, 'animate-fade-in');
					}

					// Portfolio section
					if (isElementVisible(portfolio)) {
						animateWithDelay(
							'.portfolio-',
							false,
							2,
							'animate-slide-in-left'
						);
						animateWithDelay(
							'.portfolio-filter',
							false,
							1,
							'animate-slide-in-right'
						);
						animateWithDelay(
							'.portfolio-content',
							false,
							1,
							'animate-fade-in'
						);
						animateWithDelay(
							'.portfolio-btn',
							false,
							1,
							'animate-fade-in'
						);
					}

					// Skills section
					if (isElementVisible(skills)) {
						animateWithDelay(
							'.skills-',
							false,
							2,
							'animate-slide-in-left'
						);
						animateWithDelay(
							'.gauge-',
							false,
							6,
							'animate-fill-gauge'
						);
						animateWithDelay(
							'.skills-btn',
							false,
							1,
							'animate-fade-in'
						);
					} else {
						animateWithDelay(
							'.gauge-',
							true,
							6,
							'animate-fill-gauge'
						);
					}

					// Blog section
					if (isElementVisible(blog)) {
						animateWithDelay(
							'.blog-',
							false,
							3,
							'animate-slide-in-left'
						);
						animateWithDelay(
							'.blog-image',
							false,
							1,
							'animate-slide-in-right'
						);
					}

					// Contact section
					if (isElementVisible(contact)) {
						animateWithDelay(
							'.contact-',
							false,
							3,
							'animate-slide-in-down'
						);
						animateWithDelay(
							'.contact-form',
							false,
							1,
							'animate-fade-in'
						);
					}

					// Footer section
					if (isElementVisible(footer)) {
						animateWithDelay(
							'.footer-logo',
							false,
							1,
							'animate-slide-in-left'
						);
						animateWithDelay(
							'.footer-menu-',
							false,
							3,
							'animate-fade-in'
						);
						animateWithDelay(
							'.copy-l',
							false,
							1,
							'animate-slide-in-left'
						);
						animateWithDelay(
							'.copy-r',
							false,
							1,
							'animate-slide-in-right'
						);
					}
				};
			})();
		};
	}
};

// is Element Visible
function isElementVisible(el) {
	const rect = el.getBoundingClientRect();
	const viewHeight = Math.max(
		document.documentElement.clientHeight,
		window.innerHeight
	);
	return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

// Animate numbers
function animateNum(id, start, end, duration) {
	if (start === end) return;
	let range = end - start;
	let current = start;
	let increment = end > start ? 1 : -1;
	let stepTime = Math.abs(Math.floor(duration / range));
	let obj = document.getElementById(id);

	let timer = setInterval(function () {
		current += increment;
		obj.innerHTML = current + '+';
		if (current == end) {
			clearInterval(timer);
		}
	}, stepTime);
}

// Animate with delay
function animateWithDelay(id, started, count, className) {
	for (i = 1; i < count + 1; i++) {
		let gauge;
		count === 1 ? (gauge = id) : (gauge = id + i);

		let el = document.querySelector(gauge);
		if (!started) {
			setTimeout(function () {
				el.classList.add(className);
			}, i * 150);
		} else {
			el.classList.remove(className);
		}
	}
}

// Menu
const toggleMenu = document.querySelector('#toggle-menu');
const fullMenu = document.querySelector('#full-menu');
const myModal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
toggleMenu.addEventListener('click', showMenu);

function showMenu() {
	toggleMenu.classList.toggle('burger-active');
	fullMenu.classList.toggle('hidden');
}

function toggleModal(id) {
	const img = document.querySelector('#' + id).src;
	const imgTxt = document.querySelector('.' + id + '-txt').innerHTML;
	myModal.classList.toggle('hidden');
	document.querySelector('#img-modal').src = img;
	document.querySelector('#text-modal').innerHTML = imgTxt;
}

function closeModal() {
	myModal.classList.add('hidden');
}

// Close menu from outside
const htmlBody = document.querySelector('body');
htmlBody.addEventListener('click', function (e) {
	if (e.target != toggleMenu && e.target != fullMenu) {
		toggleMenu.classList.remove('burger-active');
		fullMenu.classList.add('hidden');
	}
});

// Portfolio Filter
let filterChildren = document.querySelectorAll('.filter');

function toggleActive(i) {
	if (!filterChildren[i].children[0].classList.contains('filter-active')) {
		filterChildren[0].classList.remove('text-bm-oxford');
		filterChildren[1].classList.remove('text-bm-oxford');
		filterChildren[2].classList.remove('text-bm-oxford');

		filterChildren[0].children[0].classList.remove('filter-active');
		filterChildren[1].children[0].classList.remove('filter-active');
		filterChildren[2].children[0].classList.remove('filter-active');

		filterChildren[0].children[0].classList.remove('arrow-down');
		filterChildren[1].children[0].classList.remove('arrow-down');
		filterChildren[2].children[0].classList.remove('arrow-down');

		filterChildren[i].children[0].classList.add('filter-active');
		filterChildren[i].children[0].classList.add('arrow-down');
		filterChildren[i].classList.add('text-bm-oxford');
	}

	const personal = document.querySelectorAll('.personal');
	const pro = document.querySelectorAll('.professional');
	const comingSoon = document.querySelector('#coming-soon');
	const moreProjects = document.querySelector('#more-projects');

	switch (i) {
		case 1:
			if (personal.length === 0) {
				comingSoon.classList.remove('hidden');
				comingSoon.classList.add('flex');

				moreProjects.classList.add('hidden');
				moreProjects.classList.remove('flex');

				toggleClass(personal, true);
				toggleClass(pro, false);
			} else {
				comingSoon.classList.remove('flex');
				comingSoon.classList.add('hidden');

				moreProjects.classList.remove('hidden');
				moreProjects.classList.add('flex');

				toggleClass(personal, true);
				toggleClass(pro, false);
			}
			break;
		case 2:
			if (pro.length === 0) {
				comingSoon.classList.remove('hidden');
				comingSoon.classList.add('flex');

				moreProjects.classList.add('hidden');
				moreProjects.classList.remove('flex');

				toggleClass(personal, false);
				toggleClass(pro, true);
			} else {
				comingSoon.classList.remove('flex');
				comingSoon.classList.add('hidden');

				moreProjects.classList.remove('hidden');
				moreProjects.classList.add('flex');

				toggleClass(personal, false);
				toggleClass(pro, true);
			}
			break;
		default:
			if (personal.length === 0 && pro.length === 0) {
				comingSoon.classList.remove('hidden');
				comingSoon.classList.add('flex');

				moreProjects.classList.add('hidden');
				moreProjects.classList.remove('flex');

				toggleClass(personal, true);
				toggleClass(pro, true);
			} else {
				comingSoon.classList.remove('flex');
				comingSoon.classList.add('hidden');

				moreProjects.classList.remove('hidden');
				moreProjects.classList.add('flex');

				toggleClass(personal, true);
				toggleClass(pro, true);
			}
	}
}

function toggleClass(classArray, display) {
	for (i = 0; i < classArray.length; i++) {
		if (display) {
			classArray[i].classList.add('block');
			classArray[i].classList.remove('hidden');
		} else {
			classArray[i].classList.add('hidden');
			classArray[i].classList.remove('block');
		}
	}
}

const fName = document.querySelector('#first_name');
const lName = document.querySelector('#last_name');
const waMe = document.querySelector('#wa-me');

function sendWA() {
	let first_name = fName.value;
	let last_name = lName.value;
	waMe.setAttribute(
		'href',
		'https://wa.me/6283817588579?text=Hi,+my+name+is+' +
			first_name +
			' ' +
			last_name +
			'...'
	);
}
