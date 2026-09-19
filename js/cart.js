// --- ГЛОБАЛЬНІ ЗМІННІ ---
let cart = [];
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx8FLNex7G99248UHp5X_wvxcvOJyEtWZOgTcSMG5lCAAnG_12HW06hssHSzHBNTyrRMg/exec";

// --- ЛОГІКА КОШИКА ---
function addToCart(event, productId) {
    if(event) event.stopPropagation();
    const product = products.find(p => p.id === productId);
    if (!product) return;

    cart.push(product);
    updateCartCounter();
    showToast(`"${product.name}" додано до кошика!`);
    
    if (typeof gtag === 'function') {
        gtag('event', 'conversion', {'send_to': 'AW-17988325004/1D9rCMKI9IkcEIydwIFD'});
    }

    const cartBtn = document.getElementById('floating-cart');
    cartBtn.style.transform = 'scale(1.3)';
    setTimeout(() => cartBtn.style.transform = 'scale(1)', 200);
}

function updateCartCounter() {
    const countElement = document.getElementById('cart-count');
    countElement.innerText = cart.length;
    if (cart.length > 0) countElement.style.display = 'block';
    else countElement.style.display = 'none';
}

function removeFromCart(index) {
    cart.splice(index, 1);
    renderCartItems();
    updateCartCounter();
}

function renderCartItems() {
    const cartContainer = document.getElementById('cart-items-container');
    const totalEl = document.getElementById('cart-total-price');
    cartContainer.innerHTML = '';
    let totalPrice = 0;

    if (cart.length === 0) {
        cartContainer.innerHTML = '<div style="text-align: center; color: var(--text-muted); padding: 40px;">Ваш кошик порожній 😔</div>';
    } else {
        cart.forEach((item, index) => {
            totalPrice += item.price;
            const itemEl = document.createElement('div');
            itemEl.className = 'cart-item';
            itemEl.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-details">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">${item.price.toLocaleString('uk-UA')} ₴</div>
                </div>
                <button class="remove-btn" onclick="removeFromCart(${index})" title="Видалити">
                    <i class="fas fa-trash"></i>
                </button>
            `;
            cartContainer.appendChild(itemEl);
        });
    }
    totalEl.innerText = totalPrice.toLocaleString('uk-UA') + ' ₴';
}


// --- ВІДПРАВКА ЗАМОВЛЕННЯ ---
function checkout() {
    if(cart.length === 0) {
        showToast("Кошик порожній! Додайте товари.");
        return;
    }

    const name = document.getElementById('client-name').value.trim();
    const phone = document.getElementById('client-phone').value.trim();

    if(!name || !phone) {
        alert("Будь ласка, вкажіть ваше ім'я та телефон!");
        return;
    }

    let itemsText = "";
    let totalPrice = 0;
    cart.forEach(item => {
        itemsText += `- ${item.name} (${item.price.toLocaleString('uk-UA')} ₴)\n`;
        totalPrice += item.price;
    });

    const btn = document.querySelector('.checkout-btn');
    const originalText = btn.innerText;
    btn.innerText = "Відправка...";
    btn.disabled = true;

    const data = {
        name: name,
        phone: phone,
        items: itemsText,
        total: totalPrice.toLocaleString('uk-UA') + " ₴"
    };

    gtag('event', 'conversion', {
        'send_to': 'AW-17988325004/1D9rCMKI9IkcEIydwIFD'
    });

    fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(response => {
        document.getElementById('cart-modal').style.display = 'none';
        document.getElementById('client-name').value = "";
        document.getElementById('client-phone').value = "";
        cart = [];
        renderCartItems();
        updateCartCounter();
        document.getElementById('order-success-modal').style.display = 'flex';
    })
    .catch(error => {
        alert("Помилка при замовленні. Спробуйте ще раз.");
        console.error(error);
    })
    .finally(() => {
        btn.innerText = originalText;
        btn.disabled = false;
    });
}

function openCartModal() {
    renderCartItems();
    document.getElementById('cart-modal').style.display = 'flex';
}