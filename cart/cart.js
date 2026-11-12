// Available products
const products = [
    { id: 1, name: "Notebook", price: 150 },
    { id: 2, name: "Pen", price: 50 },
    { id: 3, name: "Backpack", price: 1200 },
    { id: 4, name: "Water Bottle", price: 350 },
];

// Shopping cart state
let cart = loadCart();

// Save cart to LocalStorage
function saveCart() {
    try {
        localStorage.setItem("shopping-cart", JSON.stringify(cart));
    } catch (error) {
        console.error("Could not save cart:", error);
    }
}

// Load cart from LocalStorage
function loadCart() {
    try {
        const savedCart = localStorage.getItem("shopping-cart");

        if (!savedCart) {
            return [];
        }

        const data = JSON.parse(savedCart);

        if (!Array.isArray(data)) {
            return [];
        }

        return data.filter(function (item) {
            return (
                item &&
                products.some((product) => product.id === item.id) &&
                Number.isInteger(item.quantity) &&
                item.quantity > 0
            );
        });
    } catch (error) {
        console.error("Could not load cart:", error);
        return [];
    }
}

// Display available products
function displayProducts() {
    const productsList = document.getElementById("products-list");

    productsList.innerHTML = products
        .map(function (product) {
            return `
            <div class="product">
                <div>
                    <h3>${product.name}</h3>
                    <p>KSh ${product.price}</p>
                </div>

                <button data-id="${product.id}">
                    Add to Cart
                </button>
            </div>
        `;
        })
        .join("");
}

// Add a product to the cart
function addToCart(productId) {
    const existingItem = cart.find(function (item) {
        return item.id === productId;
    });

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: productId,
            quantity: 1,
        });
    }

    saveCart();
    displayCart();
}

// Change product quantity
function changeQuantity(productId, amount) {
    const item = cart.find(function (item) {
        return item.id === productId;
    });

    if (!item) {
        return;
    }

    item.quantity += amount;

    if (item.quantity <= 0) {
        removeFromCart(productId);
        return;
    }

    saveCart();
    displayCart();
}

// Remove a product
function removeFromCart(productId) {
    cart = cart.filter(function (item) {
        return item.id !== productId;
    });

    saveCart();
    displayCart();
}

// Calculate total price
function calculateTotal() {
    return cart.reduce(function (total, item) {
        const product = products.find(function (product) {
            return product.id === item.id;
        });

        return total + product.price * item.quantity;
    }, 0);
}

// Display shopping cart items
function displayCart() {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        cartItems.innerHTML = cart
            .map(function (item) {
                const product = products.find(function (product) {
                    return product.id === item.id;
                });

                return `
                <div class="cart-item">
                    <div>
                        <h3>${product.name}</h3>
                        <p>KSh ${product.price} × ${item.quantity}</p>
                    </div>

                    <div>
                        <button data-action="decrease"
                            data-id="${product.id}">−</button>

                        <span>${item.quantity}</span>

                        <button data-action="increase"
                            data-id="${product.id}">+</button>

                        <button data-action="remove"
                            data-id="${product.id}">Remove</button>
                    </div>
                </div>
            `;
            })
            .join("");
    }

    cartTotal.textContent = calculateTotal();
}

// Handle adding products
document
    .getElementById("products-list")
    .addEventListener("click", function (event) {
        const button = event.target.closest("button");

        if (!button) {
            return;
        }

        addToCart(Number(button.dataset.id));
    });

// Handle cart quantity and removal buttons
document
    .getElementById("cart-items")
    .addEventListener("click", function (event) {
        const button = event.target.closest("button");

        if (!button) {
            return;
        }

        const productId = Number(button.dataset.id);
        const action = button.dataset.action;

        if (action === "increase") {
            changeQuantity(productId, 1);
        } else if (action === "decrease") {
            changeQuantity(productId, -1);
        } else if (action === "remove") {
            removeFromCart(productId);
        }
    });

// Clear the entire cart
document.getElementById("clear-cart").addEventListener("click", function () {
    cart = [];
    saveCart();
    displayCart();
});

// Initialize the shopping cart
displayProducts();
displayCart();
