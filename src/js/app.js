import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();


import $ from "jquery";
import "slick-carousel";

//---------- SLIDERS ----------//

$(function () {
	$('.choose__slider').slick({
		arrows: false,
		dots: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true
				}
			},
		]
	});
});

$(function () {
	$('.reviews__slider').slick({
		arrows: false,
		dots: true,
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		responsive: [
			{
				breakpoint: 730,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			}
		]
	});
});

$(function () {
	$('.shares__inner').slick({
		arrows: false,
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000
	});
});

$(function () {
	$('.service__inner').slick({
		arrows: false,
		dots: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		autoplaySpeed: 300,
		responsive: [
			{
				breakpoint: 925,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 610,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			}
		]
	});
});

$(function () {
	$('.certificate__slider').slick({
		arrows: false,
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplaySpeed: 300
	});
});

$(function () {
	$('.news__slider').slick({
		arrows: false,
		dots: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		autoplaySpeed: 300,
		responsive: [
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 720,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			}
		]
	});
});



/*
$('.menu').on('click', function () {
	$('.header__list').toggleClass('header__list--active')
});
*/


/*	document.getElementById("a1").innerHTML = "All";*/


//--------------- BURGER-MENU ---------------//
function burgerMenu(selector) {
	let menu = $(selector);
	let button = menu.find('.header-menu__button', '.header-menu__lines');
	let links = menu.find('.header-item__link');
	let overlay = menu.find('.header-menu__overlay');

	button.on('click', (e) => {
		e.preventDefault();
		toggleMenu();
	});

	links.on('click', () => toggleMenu());
	overlay.on('click', () => toggleMenu());

	function toggleMenu() {
		menu.toggleClass('header__menu-active');

		if (menu.hasClass('header__menu-active')) {
			$('body').css('overlow', 'hidden');
		} else {
			$('body').css('overlow', 'visible');
		}
	}
}

burgerMenu('.header__menu');


// CONTENT MORE //
const btn = document.querySelector("#btn");
const more = document.querySelector(".content");

btn.addEventListener("click", () => {
	more.style.display = "flex"
});



btn.addEventListener("click", btnClick);
function btnClick() {
	console.log(content.classList);

	if (content.classList.contains("menu-prices__more")) {
		btn.textContent = "Скрыть элемент";
	} else {
		btn.textContent = "Показать элемент";
	}

	content.classList.toggle("menu-prices__more");
};


