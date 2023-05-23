function toNum(str) {
  const num = Number(str.replace(/ /g, ""));
  return num;
}

function toCurrency(num) {
  const format = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "KZT",
    minimumFractionDigits: 0,
  }).format(num);
  return format;
}

const cardAddArr = Array.from(document.querySelectorAll(".card__add"));
const cartNum = document.querySelector("#cart_num");
const cart = document.querySelector("#cart");

class Cart { 
  products;
  constructor() {
    this.products = [];
  } 
  get count() {
    return this.products.length;
  }
  addProduct(product) {
    this.products.push(product);
  }
  removeProduct(index) {
    this.products.splice(index, 1);
  }
  get cost() {
    const prices = this.products.map((product) => {
      return toNum(product.price);
    });
    const sum = prices.reduce((acc, num) => {
      return acc + num;
    }, 0);
    return sum;
  }
}

class Product {
  imageSrc;
  name;
  price;
  constructor(card) {
    this.imageSrc = card.querySelector(".card__image").children[0].src;
    this.name = card.querySelector(".card__title").innerText;
    this.price = card.querySelector(".card__price").innerText;
  }
}

const myCart = new Cart();

if (localStorage.getItem("cart") == null) {
  localStorage.setItem("cart", JSON.stringify(myCart));
}

const savedCart = JSON.parse(localStorage.getItem("cart"));
myCart.products = savedCart.products;
cartNum.textContent = myCart.count;

myCart.products = cardAddArr.forEach((cardAdd) => {
  cardAdd.addEventListener("click", (e) => {
    e.preventDefault();
    const card = e.target.closest(".card");
    const product = new Product(card);
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    myCart.products = savedCart.products;
    myCart.addProduct(product);
    localStorage.setItem("cart", JSON.stringify(myCart));
    cartNum.textContent = myCart.count;
  });
});


const popup = document.querySelector(".popup");
const popupClose = document.querySelector("#popup_close");
const body = document.body;
const popupContainer = document.querySelector("#popup_container");
const popupProductList = document.querySelector("#popup_product_list");
const popupCost = document.querySelector("#popup_cost");

cart.addEventListener("click", (e) => {
  e.preventDefault();
  popup.classList.add("popup--open");
  body.classList.add("lock");
  popupContainerFill();
});

function popupContainerFill() {
  popupProductList.innerHTML = null;
  const savedCart = JSON.parse(localStorage.getItem("cart"));
  myCart.products = savedCart.products;
  const productsHTML = myCart.products.map((product) => {
    const productItem = document.createElement("div");
    productItem.classList.add("popup__product");

    const productWrap1 = document.createElement("div");
    productWrap1.classList.add("popup__product-wrap");
    const productWrap2 = document.createElement("div");
    productWrap2.classList.add("popup__product-wrap");

    const productImage = document.createElement("img");
    productImage.classList.add("popup__product-image");
    productImage.setAttribute("src", product.imageSrc);

    const productTitle = document.createElement("h2");
    productTitle.classList.add("popup__product-title");
    productTitle.innerHTML = product.name;

    const productPrice = document.createElement("div");
    productPrice.classList.add("popup__product-price");
    productPrice.innerHTML = toCurrency(toNum(product.price));

    const productDelete = document.createElement("button");
    productDelete.classList.add("popup__product-delete");
    productDelete.innerHTML = "&#10006;";

    productDelete.addEventListener("click", () => {
      myCart.removeProduct(product);
      localStorage.setItem("cart", JSON.stringify(myCart));
      popupContainerFill();
    });

    productWrap1.appendChild(productImage);
    productWrap1.appendChild(productTitle);
    productWrap2.appendChild(productPrice);
    productWrap2.appendChild(productDelete);
    productItem.appendChild(productWrap1);
    productItem.appendChild(productWrap2);

    return productItem;
  });

  productsHTML.forEach((productHTML) => {
    popupProductList.appendChild(productHTML);
  });

  popupCost.value = toCurrency(myCart.cost);
}

popupClose.addEventListener("click", (e) => {
  e.preventDefault();
  popup.classList.remove("popup--open");
  body.classList.remove("lock");
});




const popuph = document.querySelector(".popuph");
const popuphClose = document.querySelector("#popuph_close");
const bodyh = document.body;
const popuphContainer = document.querySelector("#popuph_container");
const popuphProductList = document.querySelector("#popuph_product_list");
const popuphCost = document.querySelector("#popuph_cost");

function toNum(str) {
  const num = Number(str.replace(/ /g, ""));
  return num;
}

function toCurrency(num) {
  const format = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "KZT",
    minimumFractionDigits: 0,
  }).format(num);
  return format;
}

const heartAddArr = Array.from(document.querySelectorAll(".heart__add"));
const heartNum = document.querySelector("#heart_num");
const heart= document.querySelector("#heart");

class Heart { 
  productsh;
  constructor() {
    this.productsh = [];
  } 
  get counth() {
    return this.productsh.length;
  } 
  addProducth(producth) {
    this.productsh.push(producth);
  }
  removeProducth(index) {
    this.productsh.splice(index, 1);
  }
  get costh() {
    const pricesh = this.productsh.map((producth) => {
      return toNum(producth.price);
    });
    const sum = pricesh.reduce((acc, num) => {
      return acc + num;
    }, 0);
    return sum;
  }
}

class Producth {
  imageSrch;
  nameh;
  priceh;
  constructor(heart) {
    this.imageSrch = heart.querySelector(".heart__image").children[0].src;
    this.nameh = heart.querySelector(".heart__title").innerText;
    this.priceh = heart.querySelector(".heart__price").innerText;
  }
}

const myHeart = new Heart();

if (localStorage.getItem("heart") == null) {
  localStorage.setItem("heart", JSON.stringify(myHeart));
}

const savedHeart = JSON.parse(localStorage.getItem("heart"));
myHeart.productsh = savedHeart.productsh;
heartNum.textContent = myHeart.counth;

myHeart.productsh = heartAddArr.forEach((HeartAdd) => {
  HeartAdd.addEventListener("click", (e) => {
    e.preventDefault();
    const heart = e.target.closest(".heart");
    const producth = new Producth(heart);
    const savedHeart = JSON.parse(localStorage.getItem("heart"));
    myHeart.productsh = savedHeart.products;
    myHeart.addProducth(producth);
    localStorage.setItemh("heart", JSON.stringify(myHeart));
    heartNum.textContent = myHeart.count;
  });
});
    


heart.addEventListener("click", (e) => {
  e.preventDefault();
  popuph.classList.add("popuph--open");
  body.classList.add("lock");
  popuphContainerFill();
});


function popuphContainerFill() {
  popuphProductList.innerHTML = null;
  const savedHeart = JSON.parse(localStorage.getItem("heart"));
  myHeart.productsh = savedHeart.productsh;
  const productshHTML = myHeart.productsh.map((producth) => {
    const producthItem = document.createElement("div");
    producthItem.classList.add("popuph__product");

    const producthWrap1 = document.createElement("div");
    producthWrap1.classList.add("popuph__product-wrap");
    const producthWrap2 = document.createElement("div");
    producthWrap2.classList.add("popuph__product-wrap");

    const producthImage = document.createElement("img");
    producthImage.classList.add("popuph__product-image");
    producthImage.setAttribute("src", producth.imageSrc);

    const producthTitle = document.createElement("h2");
    producthTitle.classList.add("popuph__product-title");
    producthTitle.innerHTML = producth.name;

    const producthPrice = document.createElement("div");
    producthPrice.classList.add("popuph__product-price");
    producthPrice.innerHTML = toCurrency(toNum(producth.price));

    const producthDelete = document.createElement("button");
    producthDelete.classList.add("popuph__product-delete");
    producthDelete.innerHTML = "&#10006;";

    producthDelete.addEventListener("click", () => {
      myHeart.removeProduct(producth);
      localStorage.setItem("heart", JSON.stringify(myHeart));
      popuphContainerFill();
    });

    producthWrap1.appendChild(producthImage);
    producthWrap1.appendChild(producthTitle);
    producthWrap2.appendChild(producthPrice);
    producthWrap2.appendChild(producthDelete);
    producthItem.appendChild(producthWrap1);
    producthItem.appendChild(producthWrap2);

    return producthItem;
  });

  productshHTML.forEach((producthHTML) => {
    popuphProductList.appendChild(producthHTML);
  });

  popuphCost.textContent = toCurrency(myHeart.costh);

}

popuphClose.addEventListener("click", (e) => {
  e.preventDefault();
  popuph.classList.remove("popuph--open");
  body.classList.remove("lock");
});  