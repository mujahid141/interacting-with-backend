button = document.querySelectorAll(".btn-cat");
Array.from(button).forEach((button) => {
  button.addEventListener("click", (e) => {
    let trg = e.target.innerHTML;
    category = "/category/" + trg;

    console.log(category);
    p = fetch("http://fakestoreapi.com/products" + category);
    p.then((res) => {
      return res.json();
    }).then((data) => {
      let tableData = "";
      data.map((products) => {
        tableData += `
        <div class="card">
        <img class='img' src="${products.image}" alt="Denim Jeans" >
        <h5>${products.title}</h5>
        <p class="price">${products.price}$</p>
      
        <p><button>Add to Cart</button></p>
        </div>
        `;
      });
      document.querySelector(".container").innerHTML = tableData;
      let image = document.querySelector(".img");
    });
  });
});

// data.map((values) => {
//   tableData += `
//   <div class="table">
//   <img src="${values.image}" />
//   <p >${values.title}</p>
//   <p >${values.description}</p>
//   <p class="price">
//   <span>${values.price}</span>

//   <span>&$;</span>

//   </p>

//   `;
// });
p.then((res) => {
  return res.json();
}).then((data) => {
  // console.log(data);
  let tableData = "";
  data.map((products) => {
    tableData += `
        <div class="card">
        <img src="${products.image}" alt="Denim Jeans" >
        <h5>${products.title}</h5>
        <p class="price">${products.price}$</p>

        <p><button class='add-cart'>Add to Cart</button></p>
        </div>
        `;
  });
  document.querySelector(".container").innerHTML = tableData;

  let add_to_cart = document.querySelectorAll("add-cart");
  add_to_cart.addEventListener("click", (e) => {
    console.log(e.target.innerHTML);
  });
});
