fetch("products.json")
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById("product-list");
    data.forEach(product => {
      const div = document.createElement("div");
      div.className = "product";
      div.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p><strong>PKR ${product.price}</strong></p>
        <a href="${product.link}" target="_blank">
          <button>Buy Now</button>
        </a>
      `;
      list.appendChild(div);
    });
  })
  .catch(err => console.error("Error loading products:", err));
