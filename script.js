const controls = document.querySelectorAll(".control");

let currentItem = 0;

const items = document.querySelectorAll(".item");

const maxItems = items.length;

controls.forEach((control, i) => {
	control.addEventListener("click", () => {
		const isLeft = control.classList.contains("arrow-left");

		if (isLeft) {
			currentItem -= 1;
		} else {
			currentItem += 1;
		}

		if (currentItem >= maxItems) {
			currentItem = 0;
		}

		if (currentItem < 0) {
			currentItem = maxItems - 1;
		}

		items.forEach((item, i) => item.classList.remove("current-item"));

		items[currentItem].scrollIntoView({
			inline: "center",
			behavior: "smooth",
			block: "nearest",
		});

		items[currentItem].classList.add("current-item");

		console.log("control", isLeft, currentItem, maxItems);
	});
});

// trocar cor do header

window.addEventListener("scroll", () => {
	const header = document.querySelector("nav");
	header.classList.toggle("rolagem", window.scrollY > 0);
});

// ativar navbar

class MobileNavbar {
	constructor(mobileMenu, navList, navLinks) {
		this.mobileMenu = document.querySelector(mobileMenu);
		this.navList = document.querySelector(navList);
		this.navLinks = document.querySelectorAll(navLinks);
		this.activeClass = "active";
		this.handleClick = this.handleClick.bind(this);
	}

	animateLinks() {
		this.navLinks.forEach((link, index) => {
			link.style.animation
				? ""
				: `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
		});
	}

	handleClick() {
		this.navList.classList.toggle(this.activeClass);
		this.mobileMenu.classList.toggle(this.activeClass);
		this.animateLinks();
	}

	addClickEvent() {
		this.mobileMenu.addEventListener("click", this.handleClick);
	}

	init() {
		if (this.mobileMenu) {
			this.addClickEvent();
		}
		return this;
	}
}

const mobileNavbar = new MobileNavbar(".mobile-menu", ".nav-list", ".nav-link");

mobileNavbar.init();
