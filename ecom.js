let qtyMinus = document.querySelector("#qtyMinus");
let qtyPlus = document.querySelector("#qtyPlus");
let qtyCount = document.querySelector("#qtyCount");
let addToCartBtn = document.querySelector("#AtoC-btn");
let lb = document.querySelector("#lightBox");
let selected = document.querySelector("#selected");
let closeBtn = document.querySelector("#closeBtn");
let cartBox = document.querySelector("#cartIconSvg");

let qty = 0;

qtyMinus.addEventListener("click", () => {
  if (qty > 0) {
    qty--;
  }
  updateQtyCount();
});

qtyPlus.addEventListener("click", () => {
  qty++;
  updateQtyCount();
});

function updateQtyCount() {
  qtyCount.value = qty;
}

addToCartBtn.addEventListener("click", checkCart);
function checkCart() {
  let product = this.parentElement.parentElement;
  let cartedProducts = document.querySelector("#cartedProducts");
  cartedProducts.innerHTML = "";
  addToCart(product);
}

function addToCart(product) {
  let productName = product.querySelector("#productName").innerHTML;
  let ProductPrice = product.querySelector("#price").innerHTML;
  let qtySelected = product.querySelector("#qtyCount").value;
  let thumbnail = document.querySelector(".thumbImg-1").src;
  let cartedProducts = document.querySelector("#cartedProducts");
  let cartCount = document.querySelector("#cartCount");
  let cart = document.querySelector("#cart");

  let replace = parseFloat(ProductPrice.replace("$", ""));
  let total = replace * qty;
  let cartProduct = document.createElement("div");
  cartProduct.innerHTML = `
    <img src="${thumbnail}" alt="" id="addedThumbnail">
    <div id="cartProductInfo">
    ${productName}
    <div>${ProductPrice}x${qtySelected} <span>$${total}<span> </div>
    </div>
    <svg
      width="14"
      height="16"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      id="deleteBtn"
      onclick="deleteProduct()"
    >
      <defs>
        <path
          d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
          id="a"
        />
      </defs>
      <use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a" />
    </svg>
    <button class="checkout">checkout</button>`;
  cartedProducts.append(cartProduct);
  cartProduct.classList.add("cartProduct");
  cartCount.innerHTML = qtySelected;
  updateQtyCount();
}

function deleteProduct() {
  let cartedProducts = document.querySelector("#cartedProducts");
  let cartProduct = document.querySelector(".cartProduct");
  let checkout = document.querySelector(".checkout");
  cartProduct.remove();
  checkout.remove();
  cartedProducts.innerHTML = `<p>your cart is empty</p>`;
  qty = 0;
  updateQtyCount();
}

selected.addEventListener("click", () => (lb.style.display = "flex"));
closeBtn.addEventListener("click", () => (lb.style.display = "none"));

let preBtn = document.querySelector("#preSvg");
let nxtBtn = document.querySelector("#nxtSvg");
let curImg = 1;

preBtn.addEventListener("click", () => {
  if (curImg === 1) {
    document.querySelector(`.lbImg-${curImg}`).style.display = "none";
    document
      .querySelector(`.lbThumbImg-${curImg}`)
      .classList.remove("lbThumbnailSelected");
    curImg = 4;
    document.querySelector(`.lbImg-${curImg}`).style.display = "flex";
    document
      .querySelector(`.lbThumbImg-${curImg}`)
      .classList.add("lbThumbnailSelected");
  } else {
    document.querySelector(`.lbImg-${curImg}`).style.display = "none";
    document
      .querySelector(`.lbThumbImg-${curImg}`)
      .classList.remove("lbThumbnailSelected");
    curImg--;
    document.querySelector(`.lbImg-${curImg}`).style.display = "flex";
    document
      .querySelector(`.lbThumbImg-${curImg}`)
      .classList.add("lbThumbnailSelected");
  }
});

nxtBtn.addEventListener("click", () => {
  if (curImg < 4) {
    document.querySelector(`.lbImg-${curImg}`).style.display = "none";
    document
      .querySelector(`.lbThumbImg-${curImg}`)
      .classList.remove("lbThumbnailSelected");
    curImg++;
    document.querySelector(`.lbImg-${curImg}`).style.display = "flex";
    document
      .querySelector(`.lbThumbImg-${curImg}`)
      .classList.add("lbThumbnailSelected");
  } else {
    document.querySelector(`.lbImg-${curImg}`).style.display = "none";
    document
      .querySelector(`.lbThumbImg-${curImg}`)
      .classList.remove("lbThumbnailSelected");
    curImg = 1;
    document.querySelector(`.lbImg-${curImg}`).style.display = "flex";
    document
      .querySelector(`.lbThumbImg-${curImg}`)
      .classList.add("lbThumbnailSelected");
  }
});

let thumbnail = document.querySelectorAll("#thumbnail");
thumbnail.forEach((img) => {
  img.addEventListener("click", getThumbImg);
});
function getThumbImg() {
  let thumbnailselected = this;
  let thumbImg = thumbnailselected.className;
  let thumbNo = parseFloat(thumbImg.replace("thumbImg-", ""));

  let selected = document.querySelectorAll("#selectedImg");
  selected.forEach((img) => (img.style.display = "none"));
  document.querySelector(`.img-${thumbNo}`).style.display = "flex";

  let alreadyThumbSel = document.querySelectorAll(".thumbnailSelected");
  alreadyThumbSel.forEach((sel) => sel.classList.remove("thumbnailSelected"));
  thumbnailselected.classList.add("thumbnailSelected");
}

let lbThumbnail = document.querySelectorAll("#lbThumbnail");
lbThumbnail.forEach((img) => {
  img.addEventListener("click", getLbThumbImg);
});
function getLbThumbImg() {
  let lbThumbnailselected = this;
  let thumbImg = this.className;
  let thumbNo = parseFloat(thumbImg.replace("lbThumbImg-", ""));

  let lbSelected = document.querySelectorAll("#lbSelectedImg");
  lbSelected.forEach((img) => (img.style.display = "none"));
  document.querySelector(`.lbImg-${thumbNo}`).style.display = "flex";

  let alreadyLbThumbSel = document.querySelectorAll(".lbThumbnailSelected");
  alreadyLbThumbSel.forEach((sel) =>
    sel.classList.remove("lbThumbnailSelected")
  );
  lbThumbnailselected.classList.add("lbThumbnailSelected");
}

cartBox.addEventListener("click", cartActive);
function cartActive() {
  let cart = document.querySelector("#cart");
  if (cart.style.display === "none") {
    cart.style.display = "flex";
  } else if (cart.style.display === "flex") {
    cart.style.display = "none";
  }
}

let menuIcon = document.querySelector("#menu");
menuIcon.addEventListener("click", () => {
  let menuList = document.querySelector("#menuList");
  menuList.style.display = "flex";
});
let menuClose = document.querySelector("#menuclose");
menuClose.addEventListener("click", () => {
  let menuList = document.querySelector("#menuList");
  menuList.style.display = "none";
});

let preBtnForMob = document.querySelector("#preSvgForMob");
let nxtBtnForMob = document.querySelector("#nxtSvgForMob");
let curImgForMob = 1;

preBtnForMob.addEventListener("click", () => {
  if (curImgForMob === 1) {
    document.querySelector(`.img-${curImgForMob}`).style.display = "none";
    curImgForMob = 4;
    document.querySelector(`.img-${curImgForMob}`).style.display = "flex";
  } else {
    document.querySelector(`.img-${curImgForMob}`).style.display = "none";
    curImgForMob--;
    document.querySelector(`.img-${curImgForMob}`).style.display = "flex";
  }
});

nxtBtnForMob.addEventListener("click", () => {
  if (curImgForMob < 4) {
    document.querySelector(`.img-${curImgForMob}`).style.display = "none";
    curImgForMob++;
    document.querySelector(`.img-${curImgForMob}`).style.display = "flex";
  } else {
    document.querySelector(`.img-${curImgForMob}`).style.display = "none";
    curImgForMob = 1;
    document.querySelector(`.img-${curImgForMob}`).style.display = "flex";
  }
});
