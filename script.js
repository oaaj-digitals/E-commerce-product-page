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
