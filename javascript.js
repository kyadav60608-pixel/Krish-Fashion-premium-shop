"use strict";

/* KRISH FASHION - DEMO STORE */

const products = [
  {id:1,name:"Classic Black Shirt",category:"Men",price:899,image:"https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=700",tag:"BESTSELLER"},
  {id:2,name:"Premium Casual Jacket",category:"Men",price:1499,image:"https://images.unsplash.com/photo-1551028719-00167b16eac5?w=700",tag:"NEW"},
  {id:3,name:"Classic White Sneakers",category:"Men",price:1299,image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700",tag:"POPULAR"},
  {id:4,name:"Elegant Women's Dress",category:"Women",price:1599,image:"https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=700",tag:"NEW"},
  {id:5,name:"Premium Handbag",category:"Women",price:1199,image:"https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=700",tag:"TRENDING"},
  {id:6,name:"Women's Fashion Outfit",category:"Women",price:1399,image:"https://images.unsplash.com/photo-1483985988355-763728e1935b?w=700",tag:"POPULAR"},
  {id:7,name:"Kids Casual Outfit",category:"Kids",price:699,image:"https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=700",tag:"NEW"},
  {id:8,name:"Kids Fashion Wear",category:"Kids",price:799,image:"https://images.unsplash.com/photo-1503919005314-30d93d07d823?w=700",tag:"POPULAR"},
  {id:9,name:"Kids Shoes",category:"Kids",price:599,image:"https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=700",tag:"BESTSELLER"},
  {id:10,name:"Wireless Headphones",category:"Electronics",price:1299,image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700",tag:"NEW"},
  {id:11,name:"Smart Watch",category:"Electronics",price:1799,image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700",tag:"POPULAR"},
  {id:12,name:"Portable Speaker",category:"Electronics",price:999,image:"https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=700",tag:"TRENDING"}
];

const $ = id => document.getElementById(id);

const STORAGE = {
  cart: "krishFashionCart",
  orders: "krishFashionOrders"
};

let activeCategory = "All";
let searchText = "";
let cart = readStorage(STORAGE.cart, []);
let orders = readStorage(STORAGE.orders, []);

function readStorage(key, fallback) {
  try {
    const value = JSON.parse(localStorage.getItem(key));
    return value ?? fallback;
  } catch {
    return fallback;
  }
}

function saveCart() {
  localStorage.setItem(STORAGE.cart, JSON.stringify(cart));
}

function saveOrders() {
  localStorage.setItem(STORAGE.orders, JSON.stringify(orders));
}

function money(value) {
  return "₹" + Number(value).toLocaleString("en-IN");
}

function safe(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({
    "&":"&amp;",
    "<":"&lt;",
    ">":"&gt;",
    '"':"&quot;",
    "'":"&#039;"
  })[char]);
}

function showToast(message) {
  const toast = $("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2400);
}

/* PRODUCTS */

function renderProducts() {
  const filtered = products.filter(product => {
    const categoryMatch =
      activeCategory === "All" || product.category === activeCategory;

    const searchMatch =
      product.name.toLowerCase().includes(searchText) ||
      product.category.toLowerCase().includes(searchText);

    return categoryMatch && searchMatch;
  });

  $("resultCount").textContent = `${filtered.length} products found`;
  $("emptyState").hidden = filtered.length !== 0;

  $("productGrid").innerHTML = filtered.map(product => `
    <article class="product-card">
      <div class="product-image">
        <img src="${safe(product.image)}" alt="${safe(product.name)}" loading="lazy">
        <span class="product-tag">${safe(product.tag)}</span>
      </div>
      <div class="product-info">
        <p class="product-category">${safe(product.category.toUpperCase())}</p>
        <h3>${safe(product.name)}</h3>
        <div class="product-rating">★★★★★ <span style="color:#aaa">Demo rating</span></div>
        <div class="product-price">${money(product.price)}</div>
        <div class="product-actions">
          <button class="add-btn" data-add="${product.id}">ADD TO BAG</button>
          <button class="buy-btn" data-buy="${product.id}">BUY NOW</button>
        </div>
      </div>
    </article>
  `).join("");
}

function setCategory(category) {
  activeCategory = category;
  document.querySelectorAll(".filter").forEach(button => {
    button.classList.toggle("active", button.dataset.filter === category);
  });
  renderProducts();
  $("products").scrollIntoView({behavior:"smooth"});
}

document.querySelectorAll("[data-filter]").forEach(button => {
  button.addEventListener("click", () => {
    setCategory(button.dataset.filter);
  });
});

document.querySelectorAll("[data-collection]").forEach(button => {
  button.addEventListener("click", () => {
    setCategory(button.dataset.collection);
  });
});

$("productGrid").addEventListener("click", event => {
  const addButton = event.target.closest("[data-add]");
  const buyButton = event.target.closest("[data-buy]");

  if (addButton) {
    addToCart(Number(addButton.dataset.add));
  }

  if (buyButton) {
    addToCart(Number(buyButton.dataset.buy));
    openCart();
    openCheckout();
  }
});

/* SEARCH */

$("searchToggle").addEventListener("click", () => {
  $("searchBox").classList.toggle("show");
  if ($("searchBox").classList.contains("show")) {
    $("searchInput").focus();
  }
});

$("searchInput").addEventListener("input", event => {
  searchText = event.target.value.trim().toLowerCase();
  renderProducts();
});

$("clearSearch").addEventListener("click", () => {
  $("searchInput").value = "";
  searchText = "";
  renderProducts();
});

/* CART */

function addToCart(id) {
  const product = products.find(item => item.id === id);
  if (!product) return;

  const existing = cart.find(item => item.id === id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({...product, quantity:1});
  }

  saveCart();
  renderCart();
  showToast("Product added to your bag");
}

function changeQuantity(id, change) {
  const item = cart.find(product => product.id === id);
  if (!item) return;

  item.quantity += change;

  if (item.quantity <= 0) {
    cart = cart.filter(product => product.id !== id);
  }

  saveCart();
  renderCart();
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
  renderCart();
}

function cartTotal() {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

function renderCart() {
  const count = cart.reduce((total, item) => total + item.quantity, 0);

  $("cartCount").textContent = count;
  $("bagItemsCount").textContent = `(${count})`;
  $("subtotal").textContent = money(cartTotal());

  if (!cart.length) {
    $("cartItems").innerHTML =
      `<p class="empty-state">Your bag is empty. Start shopping!</p>`;
  } else {
    $("cartItems").innerHTML = cart.map(item => `
      <div class="cart-item">
        <img src="${safe(item.image)}" alt="${safe(item.name)}">
        <div>
          <h4>${safe(item.name)}</h4>
          <p>${money(item.price)}</p>
          <div class="qty-row">
            <button data-minus="${item.id}" aria-label="Decrease quantity">−</button>
            <span>${item.quantity}</span>
            <button data-plus="${item.id}" aria-label="Increase quantity">+</button>
            <button class="remove-btn" data-remove="${item.id}">Remove</button>
          </div>
        </div>
      </div>
    `).join("");
  }
}

$("cartItems").addEventListener("click", event => {
  const plus = event.target.closest("[data-plus]");
  const minus = event.target.closest("[data-minus]");
  const remove = event.target.closest("[data-remove]");

  if (plus) changeQuantity(Number(plus.dataset.plus), 1);
  if (minus) changeQuantity(Number(minus.dataset.minus), -1);
  if (remove) removeFromCart(Number(remove.dataset.remove));
});

function openCart() {
  $("cartShade").classList.add("show");
  $("cartDrawer").classList.add("show");
}

function closeCart() {
  $("cartShade").classList.remove("show");
  $("cartDrawer").classList.remove("show");
}

$("cartOpen").addEventListener("click", openCart);
$("cartClose").addEventListener("click", closeCart);
$("cartShade").addEventListener("click", closeCart);

/* CHECKOUT FORM */

function openCheckout() {
  if (!cart.length) {
    showToast("Your bag is empty");
    return;
  }

  closeCart();
  $("checkoutModal").classList.add("show");
}

$("checkoutBtn").addEventListener("click", openCheckout);

document.querySelectorAll("[data-close]").forEach(button => {
  button.addEventListener("click", () => {
    $(button.dataset.close).classList.remove("show");
  });
});

document.querySelectorAll(".modal-backdrop").forEach(backdrop => {
  backdrop.addEventListener("click", event => {
    if (event.target === backdrop) {
      backdrop.classList.remove("show");
    }
  });
});

$("checkoutForm").addEventListener("submit", event => {
  event.preventDefault();

  if (!cart.length) {
    showToast("Your bag is empty");
    $("checkoutModal").classList.remove("show");
    return;
  }

  const form = new FormData(event.currentTarget);

  const customer = {
    name: String(form.get("name")).trim(),
    phone: String(form.get("phone")).trim(),
    address: String(form.get("address")).trim(),
    pincode: String(form.get("pincode")).trim(),
    district: String(form.get("district")).trim()
  };

  if (!/^[6-9][0-9]{9}$/.test(customer.phone)) {
    showToast("Enter a valid 10-digit mobile number");
    return;
  }

  if (!/^[1-9][0-9]{5}$/.test(customer.pincode)) {
    showToast("Enter a valid 6-digit PIN code");
    return;
  }

  const order = {
    id: "KF" + Date.now().toString().slice(-8),
    customer,
    items: cart.map(item => ({
      id:item.id,
      name:item.name,
      price:item.price,
      quantity:item.quantity
    })),
    total: cartTotal(),
    status: "Pending",
    date: new Date().toLocaleString("en-IN")
  };

  orders.unshift(order);
  saveOrders();

  cart = [];
  saveCart();
  renderCart();
  renderMyOrders();
  renderAdminOrders();

  event.currentTarget.reset();
  $("checkoutModal").classList.remove("show");

  $("successMessage").textContent =
    `Your Order ID is ${order.id}. Your order details have been saved in this demo store.`;

  $("successModal").classList.add("show");
});

/* CUSTOMER ORDER HISTORY */

function renderMyOrders() {
  if (!orders.length) {
    $("myOrders").innerHTML =
      `<p class="empty-state">No orders found on this device yet.</p>`;
    return;
  }

  $("myOrders").innerHTML = orders.map(order => `
    <div class="order-card">
      <h3>Order ${safe(order.id)}</h3>
      <p>Date: ${safe(order.date)}</p>
      <p>Items: ${order.items.map(item =>
        `${safe(item.name)} × ${item.quantity}`
      ).join(", ")}</p>
      <p>Total: <strong>${money(order.total)}</strong></p>
      <p>Status: <strong>${safe(order.status)}</strong></p>
    </div>
  `).join("");
}

/* OWNER PANEL - DEMO ONLY */

const DEMO_OWNER_PIN = "2468";

$("adminLoginBtn").addEventListener("click", () => {
  if ($("adminPin").value === DEMO_OWNER_PIN) {
    $("adminLogin").hidden = true;
    $("adminDashboard").hidden = false;
    $("adminPin").value = "";
    renderAdminOrders();
    showToast("Dashboard opened");
  } else {
    showToast("Incorrect owner PIN");
  }
});

$("adminLogout").addEventListener("click", () => {
  $("adminDashboard").hidden = true;
  $("adminLogin").hidden = false;
});

$("adminRefresh").addEventListener("click", renderAdminOrders);

function renderAdminOrders() {
  const pending = orders.filter(order => order.status === "Pending").length;
  const total = orders.reduce((sum, order) => sum + order.total, 0);

  $("totalOrders").textContent = orders.length;
  $("pendingOrders").textContent = pending;
  $("totalSales").textContent = money(total);

  if (!orders.length) {
    $("adminOrders").innerHTML =
      `<p class="empty-state">No orders have been placed yet.</p>`;
    return;
  }

  $("adminOrders").innerHTML = orders.map(order => `
    <article class="admin-order-card">
      <h3>Order ${safe(order.id)}</h3>
      <p>${safe(order.date)}</p>
      <p class="customer-details">
        Customer: ${safe(order.customer.name)}<br>
        Phone: ${safe(order.customer.phone)}<br>
        Address: ${safe(order.customer.address)}<br>
        PIN: ${safe(order.customer.pincode)}<br>
        District: ${safe(order.customer.district)}
      </p>
      <p>Products: ${order.items.map(item =>
        `${safe(item.name)} × ${item.quantity}`
      ).join(", ")}</p>
      <p>Order Total: <strong>${money(order.total)}</strong></p>
      <label>
        Order Status
        <select data-order-status="${safe(order.id)}">
          <option value="Pending" ${order.status==="Pending"?"selected":""}>Pending</option>
          <option value="Confirmed" ${order.status==="Confirmed"?"selected":""}>Confirmed</option>
          <option value="Shipped" ${order.status==="Shipped"?"selected":""}>Shipped</option>
          <option value="Delivered" ${order.status==="Delivered"?"selected":""}>Delivered</option>
          <option value="Cancelled" ${order.status==="Cancelled"?"selected":""}>Cancelled</option>
        </select>
      </label>
    </article>
  `).join("");
}

$("adminOrders").addEventListener("change", event => {
  const select = event.target.closest("[data-order-status]");
  if (!select) return;

  const order = orders.find(item => item.id === select.dataset.orderStatus);
  if (!order) return;

  order.status = select.value;
  saveOrders();
  renderMyOrders();
  renderAdminOrders();
  showToast("Order status updated");
});

/* MOBILE MENU */

function closeMenu() {
  $("mobileDrawer").classList.remove("show");
  $("menuShade").classList.remove("show");
}

$("menuOpen").addEventListener("click", () => {
  $("mobileDrawer").classList.add("show");
  $("menuShade").classList.add("show");
});

$("menuClose").addEventListener("click", closeMenu);
$("menuShade").addEventListener("click", closeMenu);

$("mobileDrawer").querySelectorAll("a").forEach(link => {
  link.addEventListener("click", closeMenu);
});

/* INITIAL LOAD */

renderProducts();
renderCart();
renderMyOrders();
renderAdminOrders();
