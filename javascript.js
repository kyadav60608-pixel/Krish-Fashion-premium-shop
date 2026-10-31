/* =====================================================
   KRISH FASHION
   Premium Gold Edition — Main JavaScript
   Features: Products, Search, Categories, Cart,
   WhatsApp Checkout, My Orders, Local Storage
===================================================== */

"use strict";

/* =====================================================
   1. CONFIGURATION
===================================================== */

const CONFIG = {
  whatsappNumber: "918738084554",
  currency: "INR",
  storageCart: "krish_fashion_cart_v1",
  storageOrders: "krish_fashion_orders_v1",
  currencyLocale: "en-IN",
  maxQuantity: 20
};

/* =====================================================
   2. PRODUCT DATABASE
   Demo catalogue: confirm prices and availability
   before accepting real customer orders.
===================================================== */

const PRODUCTS = [

  // ---------------- MEN: 15 PRODUCTS ----------------

  {
    id: "M001",
    name: "Classic White Casual Shirt",
    category: "men",
    type: "Shirts",
    price: 899,
    oldPrice: 1199,
    rating: 4.7,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=700&q=85",
    badge: "POPULAR"
  },
  {
    id: "M002",
    name: "Premium Black Formal Shirt",
    category: "men",
    type: "Shirts",
    price: 1099,
    oldPrice: 1399,
    rating: 4.6,
    reviews: 96,
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=700&q=85",
    badge: "PREMIUM"
  },
  {
    id: "M003",
    name: "Men's Casual T-Shirt",
    category: "men",
    type: "T-Shirts",
    price: 499,
    oldPrice: 699,
    rating: 4.5,
    reviews: 84,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=85",
    badge: "TRENDING"
  },
  {
    id: "M004",
    name: "Classic Denim Jacket",
    category: "men",
    type: "Jackets",
    price: 1599,
    oldPrice: 1999,
    rating: 4.8,
    reviews: 72,
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=700&q=85",
    badge: "STYLE PICK"
  },
  {
    id: "M005",
    name: "Men's Casual Hoodie",
    category: "men",
    type: "Hoodies",
    price: 1199,
    oldPrice: 1499,
    rating: 4.5,
    reviews: 63,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=700&q=85",
    badge: "POPULAR"
  },
  {
    id: "M006",
    name: "Classic Blue Denim Jeans",
    category: "men",
    type: "Jeans",
    price: 1299,
    oldPrice: 1599,
    rating: 4.7,
    reviews: 105,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=700&q=85",
    badge: "BEST STYLE"
  },
  {
    id: "M007",
    name: "Men's Cotton Polo T-Shirt",
    category: "men",
    type: "T-Shirts",
    price: 699,
    oldPrice: 899,
    rating: 4.4,
    reviews: 51,
    image: "https://images.unsplash.com/photo-1625910513413-5fc45e5c8e33?auto=format&fit=crop&w=700&q=85",
    badge: "NEW"
  },
  {
    id: "M008",
    name: "Men's Traditional Kurta",
    category: "men",
    type: "Ethnic Wear",
    price: 999,
    oldPrice: 1299,
    rating: 4.8,
    reviews: 91,
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=700&q=85",
    badge: "ETHNIC"
  },
  {
    id: "M009",
    name: "Men's Casual Blazer",
    category: "men",
    type: "Blazers",
    price: 2299,
    oldPrice: 2799,
    rating: 4.6,
    reviews: 44,
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=700&q=85",
    badge: "PREMIUM"
  },
  {
    id: "M010",
    name: "Men's Sports Sneakers",
    category: "men",
    type: "Footwear",
    price: 1499,
    oldPrice: 1899,
    rating: 4.7,
    reviews: 118,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=85",
    badge: "TRENDING"
  },
  {
    id: "M011",
    name: "Men's Classic Watch",
    category: "men",
    type: "Accessories",
    price: 1199,
    oldPrice: 1599,
    rating: 4.5,
    reviews: 56,
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=700&q=85",
    badge: "ACCESSORY"
  },
  {
    id: "M012",
    name: "Men's Cotton Trousers",
    category: "men",
    type: "Trousers",
    price: 999,
    oldPrice: 1299,
    rating: 4.4,
    reviews: 39,
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=700&q=85",
    badge: "CLASSIC"
  },
  {
    id: "M013",
    name: "Men's Casual Sweatshirt",
    category: "men",
    type: "Sweatshirts",
    price: 899,
    oldPrice: 1199,
    rating: 4.6,
    reviews: 47,
    image: "https://images.unsplash.com/photo-1578681994506-b8f463449011?auto=format&fit=crop&w=700&q=85",
    badge: "COMFORT"
  },
  {
    id: "M014",
    name: "Men's Leather Style Jacket",
    category: "men",
    type: "Jackets",
    price: 2499,
    oldPrice: 2999,
    rating: 4.8,
    reviews: 68,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=700&q=85",
    badge: "PREMIUM"
  },
  {
    id: "M015",
    name: "Men's Casual Shorts",
    category: "men",
    type: "Shorts",
    price: 599,
    oldPrice: 799,
    rating: 4.3,
    reviews: 31,
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=700&q=85",
    badge: "CASUAL"
  },

  // ---------------- WOMEN: 15 PRODUCTS ----------------

  {
    id: "W001",
    name: "Elegant Traditional Saree",
    category: "women",
    type: "Sarees",
    price: 1799,
    oldPrice: 2299,
    rating: 4.8,
    reviews: 142,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=700&q=85",
    badge: "POPULAR"
  },
  {
    id: "W002",
    name: "Women's Designer Kurti",
    category: "women",
    type: "Kurtis",
    price: 899,
    oldPrice: 1199,
    rating: 4.7,
    reviews: 105,
    image: "https://images.unsplash.com/photo-1583391733958-6c78276477e7?auto=format&fit=crop&w=700&q=85",
    badge: "TRENDING"
  },
  {
    id: "W003",
    name: "Women's Floral Dress",
    category: "women",
    type: "Dresses",
    price: 1299,
    oldPrice: 1599,
    rating: 4.6,
    reviews: 86,
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=700&q=85",
    badge: "NEW"
  },
  {
    id: "W004",
    name: "Women's Casual Top",
    category: "women",
    type: "Tops",
    price: 599,
    oldPrice: 799,
    rating: 4.5,
    reviews: 74,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=700&q=85",
    badge: "POPULAR"
  },
  {
    id: "W005",
    name: "Women's Ethnic Suit Set",
    category: "women",
    type: "Ethnic Wear",
    price: 1599,
    oldPrice: 1999,
    rating: 4.8,
    reviews: 97,
    image: "https://images.unsplash.com/photo-1583391733981-849840c0e9f1?auto=format&fit=crop&w=700&q=85",
    badge: "ETHNIC"
  },
  {
    id: "W006",
    name: "Women's Casual Jeans",
    category: "women",
    type: "Jeans",
    price: 1099,
    oldPrice: 1399,
    rating: 4.5,
    reviews: 62,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=85",
    badge: "CASUAL"
  },
  {
    id: "W007",
    name: "Women's Cotton Leggings",
    category: "women",
    type: "Leggings",
    price: 399,
    oldPrice: 549,
    rating: 4.4,
    reviews: 59,
    image: "https://images.unsplash.com/photo-1506629905607-d9c297d1f7a7?auto=format&fit=crop&w=700&q=85",
    badge: "COMFORT"
  },
  {
    id: "W008",
    name: "Women's Elegant Handbag",
    category: "women",
    type: "Bags",
    price: 1199,
    oldPrice: 1499,
    rating: 4.7,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=700&q=85",
    badge: "ACCESSORY"
  },
  {
    id: "W009",
    name: "Women's Fashion Sandals",
    category: "women",
    type: "Footwear",
    price: 799,
    oldPrice: 999,
    rating: 4.5,
    reviews: 46,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=700&q=85",
    badge: "STYLE PICK"
  },
  {
    id: "W010",
    name: "Women's Lipstick",
    category: "women",
    type: "Beauty",
    price: 299,
    oldPrice: 399,
    rating: 4.4,
    reviews: 73,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=700&q=85",
    badge: "BEAUTY"
  },
  {
    id: "W011",
    name: "Women's Fashion Scarf",
    category: "women",
    type: "Accessories",
    price: 349,
    oldPrice: 499,
    rating: 4.3,
    reviews: 35,
    image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=700&q=85",
    badge: "ACCESSORY"
  },
  {
    id: "W012",
    name: "Women's Traditional Dupatta",
    category: "women",
    type: "Ethnic Wear",
    price: 499,
    oldPrice: 699,
    rating: 4.6,
    reviews: 48,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=700&q=85",
    badge: "ETHNIC"
  },
  {
    id: "W013",
    name: "Women's Comfortable Nightwear",
    category: "women",
    type: "Nightwear",
    price: 899,
    oldPrice: 1199,
    rating: 4.5,
    reviews: 41,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=700&q=85",
    badge: "COMFORT"
  },
  {
    id: "W014",
    name: "Women's Casual Sneakers",
    category: "women",
    type: "Footwear",
    price: 1199,
    oldPrice: 1499,
    rating: 4.6,
    reviews: 57,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=85",
    badge: "TRENDING"
  },
  {
    id: "W015",
    name: "Women's Cotton Kurta Set",
    category: "women",
    type: "Kurtis",
    price: 1399,
    oldPrice: 1799,
    rating: 4.7,
    reviews: 81,
    image: "https://images.unsplash.com/photo-1583391733981-849840c0e9f1?auto=format&fit=crop&w=700&q=85",
    badge: "POPULAR"
  },

  // ---------------- KIDS: 15 PRODUCTS ----------------

  {
    id: "K001",
    name: "Kids Cotton T-Shirt",
    category: "kids",
    type: "T-Shirts",
    price: 349,
    oldPrice: 449,
    rating: 4.6,
    reviews: 63,
    image: "https://images.unsplash.com/photo-1503919005314-30d93d07d823?auto=format&fit=crop&w=700&q=85",
    badge: "POPULAR"
  },
  {
    id: "K002",
    name: "Kids Casual Shirt",
    category: "kids",
    type: "Shirts",
    price: 499,
    oldPrice: 649,
    rating: 4.5,
    reviews: 42,
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=700&q=85",
    badge: "NEW"
  },
  {
    id: "K003",
    name: "Kids Party Wear Dress",
    category: "kids",
    type: "Dresses",
    price: 899,
    oldPrice: 1199,
    rating: 4.8,
    reviews: 77,
    image: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=700&q=85",
    badge: "PARTY WEAR"
  },
  {
    id: "K004",
    name: "Kids Denim Jeans",
    category: "kids",
    type: "Jeans",
    price: 599,
    oldPrice: 799,
    rating: 4.5,
    reviews: 38,
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=700&q=85",
    badge: "CASUAL"
  },
  {
    id: "K005",
    name: "Kids Cotton Shorts",
    category: "kids",
    type: "Shorts",
    price: 299,
    oldPrice: 399,
    rating: 4.4,
    reviews: 32,
    image: "https://images.unsplash.com/photo-1503919005314-30d93d07d823?auto=format&fit=crop&w=700&q=85",
    badge: "COMFORT"
  },
  {
    id: "K006",
    name: "Kids Traditional Outfit",
    category: "kids",
    type: "Ethnic Wear",
    price: 999,
    oldPrice: 1299,
    rating: 4.7,
    reviews: 59,
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=700&q=85",
    badge: "ETHNIC"
  },
  {
    id: "K007",
    name: "Kids Hooded Sweatshirt",
    category: "kids",
    type: "Hoodies",
    price: 699,
    oldPrice: 899,
    rating: 4.5,
    reviews: 46,
    image: "https://images.unsplash.com/photo-1578681994506-b8f463449011?auto=format&fit=crop&w=700&q=85",
    badge: "TRENDING"
  },
  {
    id: "K008",
    name: "Kids Sports Shoes",
    category: "kids",
    type: "Footwear",
    price: 799,
    oldPrice: 999,
    rating: 4.6,
    reviews: 68,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=85",
    badge: "POPULAR"
  },
  {
    id: "K009",
    name: "Kids Casual Jacket",
    category: "kids",
    type: "Jackets",
    price: 1099,
    oldPrice: 1399,
    rating: 4.7,
    reviews: 37,
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=700&q=85",
    badge: "PREMIUM"
  },
  {
    id: "K010",
    name: "Kids School Backpack",
    category: "kids",
    type: "Bags",
    price: 649,
    oldPrice: 849,
    rating: 4.5,
    reviews: 82,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=85",
    badge: "ESSENTIAL"
  },
  {
    id: "K011",
    name: "Kids Cotton Pajama Set",
    category: "kids",
    type: "Nightwear",
    price: 499,
    oldPrice: 649,
    rating: 4.4,
    reviews: 29,
    image: "https://images.unsplash.com/photo-1503919005314-30d93d07d823?auto=format&fit=crop&w=700&q=85",
    badge: "COMFORT"
  },
  {
    id: "K012",
    name: "Kids Printed T-Shirt",
    category: "kids",
    type: "T-Shirts",
    price: 399,
    oldPrice: 499,
    rating: 4.6,
    reviews: 54,
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=700&q=85",
    badge: "NEW"
  },
  {
    id: "K013",
    name: "Kids Cotton Frock",
    category: "kids",
    type: "Dresses",
    price: 699,
    oldPrice: 899,
    rating: 4.7,
    reviews: 43,
    image: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=700&q=85",
    badge: "STYLE PICK"
  },
  {
    id: "K014",
    name: "Kids Winter Sweater",
    category: "kids",
    type: "Sweaters",
    price: 799,
    oldPrice: 999,
    rating: 4.5,
    reviews: 35,
    image: "https://images.unsplash.com/photo-1578681994506-b8f463449011?auto=format&fit=crop&w=700&q=85",
    badge: "WINTER"
  },
  {
    id: "K015",
    name: "Kids Casual Shoes",
    category: "kids",
    type: "Footwear",
    price: 699,
    oldPrice: 899,
    rating: 4.6,
    reviews: 49,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=85",
    badge: "POPULAR"
  }

];

/* =====================================================
   3. APP STATE
===================================================== */

let cart = loadStorage(CONFIG.storageCart, []);
let orders = loadStorage(CONFIG.storageOrders, []);

let activeCategory = "all";
let searchTerm = "";
let toastTimer = null;

/* =====================================================
   4. DOM ELEMENTS
===================================================== */

const DOM = {
  productGrid: document.getElementById("productGrid"),
  resultCount: document.getElementById("resultCount"),
  empty: document.getElementById("empty"),
  listingTitle: document.getElementById("listingTitle"),

  searchInput: document.getElementById("searchInput"),
  searchBox: document.getElementById("searchBox"),
  searchToggle: document.getElementById("searchToggle"),
  clearSearch: document.getElementById("clearSearch"),

  toast: document.getElementById("toast"),

  cartCount: document.getElementById("cartCount"),
  cartItems: document.getElementById("cartItems"),
  subtotal: document.getElementById("subtotal"),
  cartDrawer: document.getElementById("cartDrawer"),
  cartOpen: document.getElementById("cartOpen"),
  cartClose: document.getElementById("cartClose"),
  cartShade: document.getElementById("cartShade"),
  checkout: document.getElementById("checkout"),

  menuOpen: document.getElementById("menuOpen"),
  menuClose: document.getElementById("menuClose"),
  drawer: document.getElementById("drawer"),
  shade: document.getElementById("shade"),

  ordersContainer: document.getElementById("ordersContainer")
};

/* =====================================================
   5. STORAGE HELPERS
===================================================== */

function loadStorage(key, fallback) {
  try {
    const saved = localStorage.getItem(key);

    if (!saved) return fallback;

    const parsed = JSON.parse(saved);

    return Array.isArray(parsed) ? parsed : fallback;

  } catch (error) {
    console.warn("Storage read failed:", error);
    return fallback;
  }
}

function saveStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;

  } catch (error) {
    console.warn("Storage save failed:", error);

    showToast("Storage unavailable. Your changes may not be saved.");

    return false;
  }
}

function saveCart() {
  saveStorage(CONFIG.storageCart, cart);
}

function saveOrders() {
  saveStorage(CONFIG.storageOrders, orders);
}

/* =====================================================
   6. HELPER FUNCTIONS
===================================================== */

function formatPrice(amount) {
  return new Intl.NumberFormat(CONFIG.currencyLocale, {
    style: "currency",
    currency: CONFIG.currency,
    maximumFractionDigits: 0
  }).format(amount);
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, function(char) {
    const map = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    };

    return map[char];
  });
}

function getProduct(id) {
  return PRODUCTS.find(product => product.id === id);
}

function getCategoryName(category) {
  const names = {
    all: "All Collections",
    men: "Men's Collection",
    women: "Women's Collection",
    kids: "Kids' Collection"
  };

  return names[category] || "All Collections";
}

function showToast(message) {
  if (!DOM.toast) return;

  DOM.toast.textContent = message;
  DOM.toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    DOM.toast.classList.remove("show");
  }, 2600);
}

function getStars(rating) {
  const fullStars = Math.floor(rating);

  return "★".repeat(fullStars) +
    "☆".repeat(5 - fullStars);
}

/* =====================================================
   7. PRODUCT DISPLAY
===================================================== */

function getFilteredProducts() {
  return PRODUCTS.filter(product => {

    const matchesCategory =
      activeCategory === "all" ||
      product.category === activeCategory;

    const searchableText = [
      product.name,
      product.category,
      product.type,
      product.badge
    ].join(" ").toLowerCase();

    const matchesSearch =
      searchableText.includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });
}

function renderProducts() {
  if (!DOM.productGrid) return;

  const filteredProducts = getFilteredProducts();

  if (DOM.listingTitle) {
    DOM.listingTitle.textContent = getCategoryName(activeCategory);
  }

  if (DOM.resultCount) {
    DOM.resultCount.textContent =
      `${filteredProducts.length} Products Found`;
  }

  if (DOM.empty) {
    DOM.empty.hidden = filteredProducts.length !== 0;
  }

  DOM.productGrid.style.display =
    filteredProducts.length === 0 ? "none" : "grid";

  DOM.productGrid.innerHTML = filteredProducts.map(product => {

    const safeName = escapeHTML(product.name);
    const safeType = escapeHTML(product.type);
    const safeImage = escapeHTML(product.image);

    return `
      <article class="product-card" data-product-id="${product.id}">

        <div class="product-image-wrap">

          <img
            src="${safeImage}"
            alt="${safeName}"
            loading="lazy"
            onerror="this.onerror=null;this.src='https://placehold.co/600x750/F3EEDF/92702E?text=KRISH+FASHION';"
          >

          <span class="product-badge">
            ${escapeHTML(product.badge)}
          </span>

        </div>

        <div class="product-info">

          <span class="product-category">
            ${safeType}
          </span>

          <h3>${safeName}</h3>

          <div class="product-rating">
            ${getStars(product.rating)}
            <small>
              ${product.rating} · ${product.reviews} demo reviews
            </small>
          </div>

          <div class="product-price">
            ${formatPrice(product.price)}
            <del>${formatPrice(product.oldPrice)}</del>
          </div>

          <div class="product-actions">

            <button
              class="add-to-cart"
              data-add="${product.id}"
              type="button"
            >
              ADD TO BAG
            </button>

            <button
              class="buy-now"
              data-buy="${product.id}"
              type="button"
            >
              BUY NOW
            </button>

          </div>

        </div>
      </article>
    `;
  }).join("");
}

/* =====================================================
   8. CATEGORY FILTER
===================================================== */

function setCategory(category, shouldScroll = true) {

  const validCategories = ["all", "men", "women", "kids"];

  if (!validCategories.includes(category)) {
    category = "all";
  }

  activeCategory = category;

  document.querySelectorAll(".category-tab").forEach(tab => {
    const isActive = tab.dataset.category === category;

    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-pressed", String(isActive));
  });

  renderProducts();

  if (shouldScroll) {
    document.getElementById("men")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}

/* =====================================================
   9. SEARCH
===================================================== */

function openSearch() {
  DOM.searchBox?.classList.add("open");

  setTimeout(() => {
    DOM.searchInput?.focus();
  }, 100);
}

function closeSearch() {
  DOM.searchBox?.classList.remove("open");
}

function handleSearch() {
  searchTerm = DOM.searchInput?.value.trim() || "";

  renderProducts();
}

function clearSearch() {
  if (DOM.searchInput) {
    DOM.searchInput.value = "";
  }

  searchTerm = "";

  renderProducts();
}

/* =====================================================
   10. CART MANAGEMENT
===================================================== */

function addToCart(productId, quantity = 1) {

  const product = getProduct(productId);

  if (!product) {
    showToast("Product not found.");
    return;
  }

  const existingItem = cart.find(item => item.id === productId);

  if (existingItem) {

    if (existingItem.quantity + quantity > CONFIG.maxQuantity) {
      showToast("Maximum quantity reached.");
      return;
    }

    existingItem.quantity += quantity;

  } else {

    cart.push({
      id: productId,
      quantity: Math.min(quantity, CONFIG.maxQuantity)
    });

  }

  saveCart();
  renderCart();

  showToast(`${product.name} added to your bag.`);
}

function removeFromCart(productId) {

  cart = cart.filter(item => item.id !== productId);

  saveCart();
  renderCart();

  showToast("Product removed from your bag.");
}

function updateQuantity(productId, change) {

  const item = cart.find(item => item.id === productId);

  if (!item) return;

  const newQuantity = item.quantity + change;

  if (newQuantity <= 0) {
    removeFromCart(productId);
    return;
  }

  if (newQuantity > CONFIG.maxQuantity) {
    showToast("Maximum quantity reached.");
    return;
  }

  item.quantity = newQuantity;

  saveCart();
  renderCart();
}

function getCartTotal() {
  return cart.reduce((total, item) => {

    const product = getProduct(item.id);

    if (!product) return total;

    return total + product.price * item.quantity;

  }, 0);
}

function getCartQuantity() {
  return cart.reduce((total, item) => total + item.quantity, 0);
}

/* =====================================================
   11. CART DISPLAY
===================================================== */

function renderCart() {

  cart = cart.filter(item => {
    const product = getProduct(item.id);

    return product &&
      Number.isInteger(item.quantity) &&
      item.quantity > 0 &&
      item.quantity <= CONFIG.maxQuantity;
  });

  saveCart();

  if (DOM.cartCount) {
    DOM.cartCount.textContent = getCartQuantity();
  }

  if (DOM.subtotal) {
    DOM.subtotal.textContent = formatPrice(getCartTotal());
  }

  if (!DOM.cartItems) return;

  if (cart.length === 0) {

    DOM.cartItems.innerHTML = `
      <div class="cart-empty">
        <span>♧</span>
        <h3>Your Bag Is Empty</h3>
        <p>Discover something you love.</p>
      </div>
    `;

    return;
  }

  DOM.cartItems.innerHTML = cart.map(item => {

    const product = getProduct(item.id);

    if (!product) return "";

    return `
      <div class="cart-item">

        <img
          src="${escapeHTML(product.image)}"
          alt="${escapeHTML(product.name)}"
          onerror="this.onerror=null;this.src='https://placehold.co/200x250/F3EEDF/92702E?text=Product';"
        >

        <div class="cart-item-info">

          <h4>${escapeHTML(product.name)}</h4>

          <p>${formatPrice(product.price)}</p>

          <div class="cart-quantity">

            <button
              type="button"
              data-qty="${product.id}"
              data-change="-1"
              aria-label="Decrease quantity"
            >−</button>

            <span>${item.quantity}</span>

            <button
              type="button"
              data-qty="${product.id}"
              data-change="1"
              aria-label="Increase quantity"
            >+</button>

            <button
              type="button"
              class="cart-remove"
              data-remove="${product.id}"
            >Remove</button>

          </div>

        </div>

      </div>
    `;
  }).join("");
}

/* =====================================================
   12. CART OPEN / CLOSE
===================================================== */

function openCart() {
  DOM.cartDrawer?.classList.add("open");
  DOM.cartShade?.classList.add("open");

  document.body.style.overflow = "hidden";
}

function closeCart() {
  DOM.cartDrawer?.classList.remove("open");
  DOM.cartShade?.classList.remove("open");

  document.body.style.overflow = "";
}

/* =====================================================
   13. SIDE MENU
===================================================== */

function openMenu() {
  DOM.drawer?.classList.add("open");
  DOM.shade?.classList.add("open");

  document.body.style.overflow = "hidden";
}

function closeMenu() {
  DOM.drawer?.classList.remove("open");
  DOM.shade?.classList.remove("open");

  document.body.style.overflow = "";
}

/* =====================================================
   14. WHATSAPP CHECKOUT
===================================================== */

function createOrderMessage(order) {

  const lines = order.items.map((item, index) => {

    return `${index + 1}. ${item.name}
   Quantity: ${item.quantity}
   Price: ${formatPrice(item.price * item.quantity)}`;

  });

  return `*KRISH FASHION — ORDER ENQUIRY*

Order ID: ${order.id}
Date: ${order.date}

*PRODUCT DETAILS*

${lines.join("\n\n")}

-------------------------
Subtotal: ${formatPrice(order.total)}

Please confirm product availability,
sizes, colours, delivery charges and
final order details.

This is an order enquiry, not a confirmed
payment or completed purchase.

Thank you!
KRISH FASHION`;
}

function checkoutWhatsApp() {

  if (cart.length === 0) {
    showToast("Your shopping bag is empty.");
    return;
  }

  const orderItems = cart.map(item => {

    const product = getProduct(item.id);

    return {
      id: product.id,
      name: product.name,
      category: product.category,
      price: product.price,
      quantity: item.quantity,
      image: product.image
    };

  }).filter(Boolean);

  if (orderItems.length === 0) {
    showToast("No valid products in your bag.");
    return;
  }

  const order = {
    id: "KF-" + Date.now().toString().slice(-9),
    date: new Date().toLocaleString("en-IN"),
    items: orderItems,
    total: orderItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    ),
    status: "Enquiry Created"
  };

  const message = createOrderMessage(order);

  const whatsappURL =
    "https://wa.me/" +
    CONFIG.whatsappNumber +
    "?text=" +
    encodeURIComponent(message);

  try {

    const newTab = window.open(whatsappURL, "_blank");

    if (!newTab) {
      window.location.href = whatsappURL;
    }

  } catch (error) {

    window.location.href = whatsappURL;

  }

  // Store the enquiry locally.
  orders.unshift(order);

  // Keep latest 50 local order records.
  orders = orders.slice(0, 50);

  saveOrders();
  renderOrders();

  cart = [];

  saveCart();
  renderCart();

  closeCart();

  showToast("Order enquiry saved. Complete it on WhatsApp.");
}

/* =====================================================
   15. BUY NOW
===================================================== */

function buyNow(productId) {

  const product = getProduct(productId);

  if (!product) {
    showToast("Product not found.");
    return;
  }

  const previousCart = cart;

  cart = [{
    id: product.id,
    quantity: 1
  }];

  saveCart();
  renderCart();

  openCart();

  showToast("Product ready for checkout.");
}

/* =====================================================
   16. MY ORDERS
===================================================== */

function renderOrders() {

  if (!DOM.ordersContainer) return;

  if (orders.length === 0) {

    DOM.ordersContainer.innerHTML = `
      <div class="orders-empty">
        <span>▤</span>
        <h3>No Orders Yet</h3>
        <p>Your order history will appear here after you place an order.</p>
        <a href="#collections" class="gold-btn">
          START SHOPPING →
        </a>
      </div>
    `;

    return;
  }

  DOM.ordersContainer.innerHTML = `
    <div class="orders-list">

      ${orders.map(order => `

        <article class="order-card">

          <div class="order-card-top">

            <div>
              <strong>${escapeHTML(order.id)}</strong>
              <p>${escapeHTML(order.date)}</p>
            </div>

            <span class="order-status">
              ${escapeHTML(order.status)}
            </span>

          </div>

          <div class="order-products">

            ${order.items.map(item => `

              <div class="order-product">

                <img
                  src="${escapeHTML(item.image)}"
                  alt="${escapeHTML(item.name)}"
                  onerror="this.onerror=null;this.src='https://placehold.co/100x120/F3EEDF/92702E?text=Product';"
                >

                <div>
                  <strong>${escapeHTML(item.name)}</strong>
                  <p>Qty: ${item.quantity}</p>
                  <p>${formatPrice(item.price * item.quantity)}</p>
                </div>

              </div>

            `).join("")}

          </div>

          <div class="order-total">
            <span>Enquiry Total</span>
            <strong>${formatPrice(order.total)}</strong>
          </div>

        </article>

      `).join("")}

    </div>

    <p class="order-storage-note">
      Order history is saved on this device only.
      It is not connected to a live store database.
    </p>
  `;
}

/* =====================================================
   17. GLOBAL CLICK HANDLER
===================================================== */

document.addEventListener("click", function(event) {

  // Add to cart
  const addButton = event.target.closest("[data-add]");

  if (addButton) {
    addToCart(addButton.dataset.add);
    return;
  }

  // Buy now
  const buyButton = event.target.closest("[data-buy]");

  if (buyButton) {
    buyNow(buyButton.dataset.buy);
    return;
  }

  // Quantity change
  const quantityButton = event.target.closest("[data-qty]");

  if (quantityButton) {

    const id = quantityButton.dataset.qty;
    const change = Number(quantityButton.dataset.change);

    updateQuantity(id, change);
    return;
  }

  // Remove cart item
  const removeButton = event.target.closest("[data-remove]");

  if (removeButton) {
    removeFromCart(removeButton.dataset.remove);
    return;
  }

  // Category selection from tabs and navigation
  const categoryLink = event.target.closest("[data-category]");

  if (categoryLink) {

    const category = categoryLink.dataset.category;

    if (["all", "men", "women", "kids"].includes(category)) {

      event.preventDefault();

      setCategory(category);

      closeMenu();
      closeSearch();

      return;
    }
  }

  // Close menu when clicking an ordinary navigation link
  const menuLink = event.target.closest(".side-nav a");

  if (menuLink) {
    closeMenu();
  }

});

/* =====================================================
   18. EVENT LISTENERS
===================================================== */

// Search
DOM.searchToggle?.addEventListener("click", () => {

  if (DOM.searchBox?.classList.contains("open")) {
    closeSearch();
  } else {
    openSearch();
  }

});

DOM.searchInput?.addEventListener("input", handleSearch);

DOM.clearSearch?.addEventListener("click", clearSearch);

// Menu
DOM.menuOpen?.addEventListener("click", openMenu);
DOM.menuClose?.addEventListener("click", closeMenu);
DOM.shade?.addEventListener("click", closeMenu);

// Cart
DOM.cartOpen?.addEventListener("click", openCart);
DOM.cartClose?.addEventListener("click", closeCart);
DOM.cartShade?.addEventListener("click", closeCart);

// Checkout
DOM.checkout?.addEventListener("click", checkoutWhatsApp);

// Escape key
document.addEventListener("keydown", event => {

  if (event.key === "Escape") {

    closeMenu();
    closeCart();
    closeSearch();

  }

});

/* =====================================================
   19. INITIALIZE APP
===================================================== */

function initializeApp() {

  // Check and repair invalid stored cart records.
  cart = cart.filter(item => {

    return getProduct(item.id) &&
      Number.isInteger(item.quantity) &&
      item.quantity > 0 &&
      item.quantity <= CONFIG.maxQuantity;

  });

  saveCart();

  // Render all main sections.
  renderProducts();
  renderCart();
  renderOrders();

  // Set default category.
  setCategory("all", false);

  console.log("KRISH FASHION initialized successfully.");
  console.log("Total products:", PRODUCTS.length);
  console.log("Men:", PRODUCTS.filter(p => p.category === "men").length);
  console.log("Women:", PRODUCTS.filter(p => p.category === "women").length);
  console.log("Kids:", PRODUCTS.filter(p => p.category === "kids").length);

}

// Start only after the HTML is ready.
if (document.readyState === "loading") {

  document.addEventListener("DOMContentLoaded", initializeApp);

} else {

  initializeApp();

}

/* =====================================================
   END OF KRISH FASHION JAVASCRIPT
===================================================== */