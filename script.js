// Number of Order event
let incrementBtn = document.querySelector(".plus-btn");
let decrementBtn = document.querySelector(".minus-btn");
let inputEle = document.querySelector("#order-amt");

let incrementValue = (inputEle) => {
	inputEle.value = parseInt(inputEle.value) + 1;

	// console.log(inputEle.value);
};

let decrementValue = (inputEle) => {
	// inputEle.value = parseInt(inputEle.value) - 1;
	if (inputEle.value <= 0) {
		inputEle.value = 0;
	} else {
		inputEle.value = parseInt(inputEle.value) - 1;
	}
};

incrementBtn.addEventListener("click", () => {
	let inputEle = document.querySelector("#order-amt");
	incrementValue(inputEle);
});

decrementBtn.addEventListener("click", () => {
	let inputEle = document.querySelector("#order-amt");
	decrementValue(inputEle);
});

// Product Image Events

// Change Displayed Image

let productDisplayedImg = document.querySelector(".product-img");
let productThumbnails = document.querySelectorAll(".product-thumbnails");

productThumbnails.forEach((productThumbnail) => {
	productThumbnail.addEventListener("click", () => {
		let displayImg = document.querySelector(".product-img");
		let previousDisplayed = document.querySelector(
			".product-thumbnails.active"
		);
		previousDisplayed.classList.remove("active");

		let nowDisplayed = productThumbnail;
		let nowDisplayedSrc = `./images/image-product-${nowDisplayed.id}.jpg`;

		nowDisplayed.classList.add("active");
		displayImg.src = nowDisplayedSrc;
	});
});

productDisplayedImg.addEventListener("click", () => {
	// let thumbnailDiv = productDisplayedImg.nextElementSibling;
	let imgZoomModal = document.getElementById("img-modal");

	let modalContainer = document.createElement("div");
	modalContainer.className = "modal-container";
	modalContainer.innerHTML = productDisplayedImg.parentElement.innerHTML;
	imgZoomModal.appendChild(modalContainer);

	console.log(imgZoomModal);
});
0;

// Menu event
let opensMenu = (openBtn, menuEle) => {
	openBtn.addEventListener("click", function () {
		// console.log(openBtn.childNodes[1]);
		let menuImg = openBtn.childNodes[1];
		if (menuImg.classList.contains("openBtn")) {
			menuImg.classList.add("closeBtn");
			menuImg.classList.remove("openBtn");
			menuEle.style.display = "flex";
			menuImg.src = "./images/icon-close.svg";
			closesModal(openBtn, menuEle);
		}
	});
};

let closesModal = (openBtn, menuEle) => {
	// close with close btn
	Close = () => {
		menuEle.style.display = "none";
		openBtn.removeEventListener("click", Close);
		window.removeEventListener("keyup", escClose);
		menuEle.removeEventListener("click", Close);
		let closeImg = openBtn.childNodes[1];
		if (closeImg.classList.contains("closeBtn")) {
			closeImg.src = "./images/icon-menu.svg";
			closeImg.classList.remove("closeBtn");
			closeImg.classList.add("openBtn");
		}
		console.log("close");
	};
	openBtn.addEventListener("click", Close);

	// close with escape key
	escClose = (e) => {
		if (e.key == "Escape") {
			Close();
		}
	};
	window.addEventListener("keyup", escClose);

	// close with clicking outside the modal box
};

let menuBtn = document.querySelector(".menu-icon-div");
let menuEle = document.querySelector("nav");

opensMenu(menuBtn, menuEle);
