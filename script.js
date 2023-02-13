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
	if (inputEle.value <= 1) {
		inputEle.value = 1;
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

// Mobile Image change
let previousImgBtn = document.querySelector(".prev-btn");
let nextImgBtn = document.querySelector(".next-btn");
// let displayedImgNumber = productDisplayedImg.src[109];

previousImgBtn.addEventListener("click", () => {
	let productDisplayedImg = document.querySelector(".product-img");
	let displayedImgNumber = productDisplayedImg.src[109];

	let newDisplayedImage;

	if (displayedImgNumber > 1) {
		let newNum = parseInt(displayedImgNumber) - 1;
		newDisplayedImage = `./images/image-product-${newNum}.jpg`;
	} else {
		newDisplayedImage = `./images/image-product-4.jpg`;
	}
	productDisplayedImg.src = newDisplayedImage;
});

nextImgBtn.addEventListener("click", () => {
	let productDisplayedImg = document.querySelector(".product-img");
	let displayedImgNumber = productDisplayedImg.src[109];

	let newDisplayedImage;

	if (displayedImgNumber < 4) {
		let newNum = parseInt(displayedImgNumber) + 1;
		newDisplayedImage = `./images/image-product-${newNum}.jpg`;
	} else {
		newDisplayedImage = `./images/image-product-1.jpg`;
	}
	productDisplayedImg.src = newDisplayedImage;
});

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

			openBtn.style.position = "fixed";
			openBtn.style.top = "";
			openBtn.style.left = "5vw";
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

			openBtn.style.position = "static";
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
};

let menuBtn = document.querySelector(".menu-icon-div");
let menuEle = document.querySelector("nav");

opensMenu(menuBtn, menuEle);

// Cart Events
// localStorage.removeItem("cart");

let cartBtn = document.querySelector(".cart-div>svg");
let cartBox = document.querySelector(".cart-box");

const cartDelete = (cartItem) => {
	localStorage.removeItem("cart");
	cartItem.innerHTML = "";
};

const carting = () => {
	let cart = localStorage.cart ? localStorage.cart.split(",") : null;

	if (cart) {
		let cartItem = document.querySelector(".cart-item");
		cartItem.innerHTML = `
		<div class="item-img">
			<img src="./images/image-product-1-thumbnail.jpg" />
		</div>
		<div class="item-info">
			<p class="item-name">${cart[0]}</p>
			<p class="item-value">
				<span class="item-price">$${cart[1]}</span>
				x
				<span class="item-qty">${cart[2]}</span>
				<span class="item-total-value">$${parseInt(cart[1]) * parseInt(cart[2])}</span>
			</p>
		</div>

		<div class="delete-btn btn">
			<svg class="icon delete-icon"
				width="14"
				height="16"
				xmlns="http://www.w3.org/2000/svg"
											xmlns:xlink="http://www.w3.org/1999/xlink"
										>
											<path
												d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
												id="a"
												fill-rule="nonzero"
											/>
											<!-- <use
												
											/> -->
										</svg>
									</div>
	`;

		let cartDeleteBtn = document.querySelector(".delete-icon");
		cartDeleteBtn.addEventListener("click", () => {
			cartDelete(cartItem);
		});

		const checkOutBtn = document.querySelector("#checkout-btn");

		checkOutBtn.addEventListener("click", () => {
			cartDelete(cartItem);
		});
	}
};

carting();

// Cart Button
cartBtn.addEventListener("click", () => {
	if (cartBox.classList.contains("closed")) {
		cartBox.classList.remove("closed");
		cartBox.classList.add("opened");
		cartBox.style.display = "flex";
	} else if (cartBox.classList.contains("opened")) {
		cartBox.classList.add("closed");
		cartBox.classList.remove("open");
		cartBox.style.display = "none";
	}
	// console.log(cartBox);
});

//Add to Cart Event
let addToCartBtn = document.querySelector("#add-order-btn");

addToCartBtn.addEventListener("click", () => {
	let qty = document.querySelector("#order-amt").value;
	let unitPrice = 125;
	let productName = document.querySelector(".product-name").textContent;

	let product = [productName, unitPrice, qty];

	if (localStorage.cart) {
		// console.log(localStorage.cart);
		let cart = localStorage.cart.split(",");
		let prevQty = parseInt(cart[2]);
		let newQty = prevQty + parseInt(qty);
		product = [productName, unitPrice, newQty];

		localStorage.setItem("cart", product);
	} else {
		localStorage.setItem("cart", product);
	}

	carting();

	// console.log(localStorage.getItem("cart"));
});
