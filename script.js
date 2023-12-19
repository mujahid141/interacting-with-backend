let cart = document.getElementById("cart");
let cartArea = document.querySelector(".cartArea");
let cartClose = document.querySelector(".closed");
const addcart = document.querySelectorAll(".add-cart");
let apiendPoint = "http://fakestoreapi.com/products";
const products = document.querySelector(".container"); // Use a class selector here
const input = document.querySelector(".input");
const buttons = document.querySelectorAll(".btn-cat");
Array.from(buttons).forEach((element) => {
  element.addEventListener("click", (e) => {
    console.log(e.target.innerHTML);
    if (e.target.innerHTML === "All") {
      apiendPoint = "http://fakestoreapi.com/products";
      displayProducts();
      return;
    } else if (e.target.innerHTML === "men's clothing") {
      apiendPoint = "http://fakestoreapi.com/products/category/men's clothing";
    } else if (e.target.innerHTML === "women's clothing") {
      apiendPoint =
        "http://fakestoreapi.com/products/category/women's clothing";
    } else if (e.target.innerHTML === "jewelery") {
      apiendPoint = "http://fakestoreapi.com/products/category/jewelery";
    } else if (e.target.innerHTML === "electronics") {
      apiendPoint = "http://fakestoreapi.com/products/category/electronics";
    }

    displayProducts();
  });
});

const getData = async () => {
  const res = await fetch(apiendPoint);
  const data = await res.json();
  return data;
};

const displayProducts = async (category) => {
  const payload = await getData();
  let query = input.value;
  let tableData = "";
  payload
    .filter((evenData) => {
      if (query === "") {
        return evenData;
      } else if (evenData.title.toLowerCase().includes(query.toLowerCase()))
        return { evenData };
    })
    .map((object) => {
      tableData += `
        <div class="card">
        <img src="${object.image}" alt="Denim Jeans" >
        <h5>${object.title}</h5>
        <p class="price">${object.price}$</p>
        <p><button class='add-cart' >Add to Cart</button></p>
        </div>
    `;
    });

  products.innerHTML = tableData; // Join the array of template literals into a single string
};
const addtocart = document.querySelectorAll(".add-cart");
Array.from(addtocart).map((e) => {
  console.log(e);
  e.addEventListener("click ", () => {
    console.log(e);
  });
});
displayProducts();
input.addEventListener("input", () => {
  displayProducts();
});

cart.onclick = (event) => {
  event.preventDefault();
  cartArea.classList.add("active");
};
cartClose.onclick = (event) => {
  event.preventDefault();
  cartArea.classList.remove("active");
};
