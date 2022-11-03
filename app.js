const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
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

let choseProduct=products[0]

const wraper = document.querySelector(".sliderWraper");
const menuItem = document.querySelectorAll(".menuItem");

 const currentImgProd = document.querySelector(".prodImg");
 const currentTitleProd = document.querySelector(".prodTitle");
 const currentPriceProd = document.querySelector(".prodPrice");
 const currentColorsProd = document.querySelectorAll(".color");
 const currentSizesProd = document.querySelectorAll(".size");
 const closeModal=document.querySelector('.close');
 const payment = document.querySelector(".payement");
 const productBtn = document.querySelector(".prodButton");


menuItem.forEach((item, index) => {
  item.addEventListener("click", () => {
    wraper.style.transform = `translateX(${-100 * index}vw)`;
    choseProduct=products[index]
    currentTitleProd.textContent=choseProduct.title;
    currentPriceProd.textContent="$"+ choseProduct.price;
    currentImgProd.src= choseProduct.colors[0].img;
    currentColorsProd.forEach((color, index)=>{
      color.style.backgroundColor= choseProduct.colors[index].code
    })

  });
});

currentColorsProd.forEach((color, index)=>{
 color.addEventListener("click", ()=>{
    currentImgProd.src= choseProduct.colors[index].img
 })
})

currentSizesProd.forEach((size, index)=>{
    size.addEventListener('click', ()=>{
        currentSizesProd.forEach( (size)=>{
        size.style.backgroundColor = "white";
        size.style.color = "black";
        })

        size.style.backgroundColor="black";
        size.style.color="white"
    })
})

productBtn.addEventListener("click", ()=>{
    payment.style.display="flex"
})

closeModal.addEventListener("click", () => {
  payment.style.display = "none";
});
