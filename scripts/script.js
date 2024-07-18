const apiUrl = "http://localhost:3000/products";

// Fetch the products on page load
document.addEventListener("DOMContentLoaded", getProducts());

const productContainer = select("#products");

function select(selector) {
  return document.querySelector(selector);
}

function createElement(element) {
  return document.createElement(element);
}

function getProducts() {
  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      // I'll display the first 6 products from the server
      data.slice(0, 6).forEach((product) => createProductCard(product));
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
  addToCartBtn.textContent = "Add to Cart";
  addToCartBtn.addEventListener("click", () => addToCart(product));
  card.appendChild(addToCartBtn);

  const category = createElement("p");
  category.textContent = `Category: ${product.category}`;
  card.appendChild(category);

  const deleteBtn = createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", () =>
    updateProduct(productId, productData)
  );
  card.appendChild(deleteBtn);

  const editBtn = createElement("button");
  editBtn.textContent = "Update";
  editBtn.addEventListener("click", () => updateProduct(product));
  card.appendChild(editBtn);

  productContainer.appendChild(card);
}

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
