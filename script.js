const controls = document.querySelectorAll(".control");

let currentItem = 0;

const items = document.querySelectorAll(".item");

const maxItems = items.length;

// biome-ignore lint/complexity/noForEach: <explanation>
controls.forEach((control) => {
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

		// biome-ignore lint/complexity/noForEach: <explanation>
		items.forEach((item) => item.classList.remove("current-item"));

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
	const header = document.querySelector(".header");
	header.classList.toggle("rolagem", window.scrollY > 0);
});
