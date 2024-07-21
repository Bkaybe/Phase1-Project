const apiUrl = "https://snap-store-backend.vercel.app/products";

// Fetch the products on page load
document.addEventListener("DOMContentLoaded", getProducts());

const productContainer = select("#products");

function select(selector) {
  return document.querySelector(selector);
}

function createElement(element) {
  return document.createElement(element);
}

// Adding scroll event listener
document.addEventListener("scroll", () => {
  const header = select("#header");

  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

function getProducts() {
  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      // I'll display the first 8 products from the server
      data.slice(-8).forEach((product) => createProductCard(product));
    })
    .catch((error) => console.error("Error:", error));
}

function createProductCard(product) {
  const card = createElement("div");
  card.classList.add("card");

  const img = createElement("img");
  img.src = product.image;
  img.alt = product.title;
  card.appendChild(img);

  const title = createElement("h3");
  title.textContent = product.title;
  card.appendChild(title);

  const price = createElement("p");
  price.textContent = `$${product.price.toFixed(2)}`;
  card.appendChild(price);

  const addToCartBtn = createElement("button");
  addToCartBtn.classList.add("add-to-cart");
  addToCartBtn.textContent = "Add to Cart";
  addToCartBtn.addEventListener("click", () => addToCart(product));
  card.appendChild(addToCartBtn);

  const category = createElement("p");
  category.textContent = `Category: ${product.category}`;
  card.appendChild(category);

  const deleteBtn = createElement("button");
  deleteBtn.classList.add("delete");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", () => deleteProduct(productId));
  card.appendChild(deleteBtn);

  const updateBtn = createElement("button");
  updateBtn.textContent = "Update";
  updateBtn.classList.add("update");
  updateBtn.addEventListener("click", () => updateProduct(product));
  card.appendChild(updateBtn);

  productContainer.appendChild(card);
}

// function with an event listener of click on the add to cart button to simulate actual adding to cart
function addToCart(product) {
  // Simulating adding to cart
  alert(`Added ${product.title} to cart`);
}

function createProduct(productData) {
  return fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productData),
  })
    .then((res) => res.json())
    .then((newProduct) => console.log("Product created:", newProduct))
    .catch((error) => console.error("Error creating product:", error));
}

// Adding submit event listener for the form
const form = select("#product-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const productData = {
    title: form.title.value,
    price: parseFloat(form.price.value),
    category: form.category.value,
    image: form.image.value,
  };

  createProduct(productData);
  alert("Element Added");

  form.reset();
  location.reload();
});

function getProduct(productId) {
  return fetch(`${apiUrl}/${productId}`)
    .then((res) => res.json())
    .then((product) => console.log("Product fetched:", product))
    .catch((error) => console.error("Error fetching product:", error));
}

function updateProduct(productId, productData) {
  return fetch(`${apiUrl}/${productId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productData),
  })
    .then((res) => res.json())
    .then((updatedProduct) => console.log("Product updated:", updatedProduct))
    .catch((error) => console.error("Error updating product:", error));
}

function deleteProduct(productId) {
  return fetch(`${apiUrl}/${productId}`, {
    method: "DELETE",
  })
    .then((res) => {
      if (res.ok) {
        console.log("Product deleted");
      } else {
        console.error("Error deleting product");
      }
    })
    .catch((error) => console.error("Error deleting product:", error));
}
