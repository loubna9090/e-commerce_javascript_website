const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    img: "./img/air.png",
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    img: "./img/jordan.png",
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    img: "./img/blazer.png",
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    img: "./img/crater.png",
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    img: "./img/hippie.png",
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

let choseProduct = products[0];

const wraper = document.querySelector(".sliderWraper");
const menuItem = document.querySelectorAll(".menuItem");

const currentImgProd = document.querySelector(".prodImg");
const currentTitleProd = document.querySelector(".prodTitle");
const currentPriceProd = document.querySelector(".prodPrice");
const currentColorsProd = document.querySelectorAll(".color");
const currentSizesProd = document.querySelectorAll(".size");
const closeModal = document.querySelector(".close");
const payment = document.querySelector(".payement");
const productBtn = document.querySelector(".prodButton");
// products
const shopContent = document.querySelector(".shopContent");
// cart selection
const cartIcon = document.querySelector(".myCart");
const cart = document.querySelector(".cart");
const addQuant = document.querySelector(".cart-quantity");
const btnBuy = document.querySelector(".btn-buy");
const colseCart = document.querySelector(".close-cart");

menuItem.forEach((item, index) => {
  item.addEventListener("click", () => {
    wraper.style.transform = `translateX(${-100 * index}vw)`;
    choseProduct = products[index];
    currentTitleProd.textContent = choseProduct.title;
    currentPriceProd.textContent = "$" + choseProduct.price;
    currentImgProd.src = choseProduct.colors[0].img;
    currentColorsProd.forEach((color, index) => {
      color.style.backgroundColor = choseProduct.colors[index].code;
    });
  });
});

currentColorsProd.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentImgProd.src = choseProduct.colors[index].img;
  });
});

currentSizesProd.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentSizesProd.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });

    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

productBtn?.addEventListener("click", () => {
  payment.style.display = "flex";
});

closeModal?.addEventListener("click", () => {
  payment.style.display = "none";
});

// display products
window.addEventListener("DOMContentLoaded", () => {
  let dispalyProd = products.map(function (prod) {
    return ` <div class="shopBox">
                <img src=${prod.img} class="imgBox" alt="">
                <h2 class="titleBox">
                    ${prod.title} 
                </h2>
                <span class="priceBox">$${prod.price} </span>
               <button class="add-cart">Add to Cart</button>
            </div>`;
  });
  dispalyProd = dispalyProd.join("");
  shopContent.innerHTML = dispalyProd;
  ready();
});

cartIcon.addEventListener("click", () => {
  cart.classList.toggle("active");
});

colseCart.addEventListener("click", () => {
  cart.classList.toggle("active");
});

function ready() {
  // remove item from cart
  var removeCart = document.getElementsByClassName("cart-remove");

  for (let i = 0; i < removeCart.length; i++) {
    var button = removeCart[i];
    button.addEventListener("click", removeCartItem);
  }
  // chnage quantity

  var qunatityInputs = document.getElementsByClassName("cart-quantity");
  for (let i = 0; i < qunatityInputs.length; i++) {
    var input = qunatityInputs[i];
    input.addEventListener("change", changeQuantity);
  }
  //  add to cart
  var addToCart = document.querySelectorAll(".add-cart");
  for (let i = 0; i < addToCart.length; i++) {
    var selected = addToCart[i];
    selected.addEventListener("click", addCartClicked);
  }

  //btn buy now
  document
    .getElementsByClassName("btn-buy")[0]
    .addEventListener("click", buyNowbtn);
}

function buyNowbtn() {
  alert("your order are placed");
  var contentCart = document.getElementsByClassName("contentCart")[0];
  while (contentCart.hasChildNodes()) {
    contentCart.removeChild(contentCart.firstChild);
  }
  handelTotal();
}

function addCartClicked(e) {
  var item = e.target;

  var selectPro = item.parentElement;
  var title = selectPro.getElementsByClassName("titleBox")[0].innerText;
  var price = selectPro.getElementsByClassName("priceBox")[0].innerText;
  var imgprod = selectPro.getElementsByClassName("imgBox")[0].src;

  addProducToCart(title, price, imgprod);
  handelTotal();
}

function addProducToCart(title, price, imgprod) {
  var cartShopBox = document.createElement("div");
  cartShopBox.classList.add("cartBox");
  var cartItems = document.getElementsByClassName("contentCart")[0];
  var cartItemName = cartItems.getElementsByClassName("cart-title");
  for (let i = 0; i < cartItemName.length; i++) {
    if (cartItemName[i].innerHTML == title) {
      alert("you have already add this product to the cart");
      return;
    }
  }

  var cartBoxCentent = `
            <img src="${imgprod}" alt="" class="cartImg" />
              <div class="detailsBox">
                <div class="cart-title">${title}</div>
                <div class="cart-price">${price}</div>
                <input type="number" value="1" class="cart-quantity" />
              </div>
           <img src="./img/supprimer-la-corbeille.png" alt="" class="cart-remove  img-remove">
`;
  cartShopBox.innerHTML = cartBoxCentent;
  cartItems.append(cartShopBox);
  cartShopBox
    .getElementsByClassName("cart-remove")[0]
    .addEventListener("click", removeCartItem);
  cartShopBox
    .getElementsByClassName("cart-quantity")[0]
    .addEventListener("change", changeQuantity);
}

function changeQuantity(e) {
  const input = e.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  handelTotal();
}

function removeCartItem(e) {
  var btnClick = e.target;
  btnClick.parentElement.remove();
  handelTotal();
}

// make totral cart

function handelTotal() {
  var cartCentent = document.getElementsByClassName("contentCart")[0];
  var boxCarts = cartCentent.getElementsByClassName("cartBox");
  let total = 0;
  for (let i = 0; i < boxCarts.length; i++) {
    var boxCart = boxCarts[i];
    var priceElem = boxCart.getElementsByClassName("cart-price")[0];
    var price = parseFloat(priceElem.innerHTML.replace("$", ""));
    var quantityElem = boxCart.getElementsByClassName("cart-quantity")[0];
    var quantity = quantityElem.value;
    total = total + price * quantity;
  }
  total = Math.round(total * 100) / 100;
  document.getElementsByClassName("total-price")[0].innerHTML = "$" + total;
}
