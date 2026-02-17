// --- ЗМІНА ТЕМИ ---
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Змінюємо іконку
    if (body.classList.contains('dark-mode')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
});

// --- ДАНІ ПРО ТОВАРИ ---
// Я оновив картинки заглушки на нейтральні (сірі), щоб пасували під обидві теми
const products = [
    {
        id: 1,
        name: "Deye 5kW Hybrid Inverter",
        category: "hybrid",
        price: 35000,
        image: "https://placehold.co/600x400/dddddd/333333?text=Deye+5kW\\nHybrid",
        description: "Потужний гібридний інвертор для дому. Працює з сонячними панелями та генератором. Підтримує віддалений моніторинг через додаток.",
        specs: { "Потужність": "5 кВт", "Тип": "Гібридний", "Батарея": "48В", "Захист": "IP65", "Гарантія": "5 років" }
    },
    {
        id: 2,
        name: "Must 3kW Pure Sine",
        category: "autonomous",
        price: 12500,
        image: "https://placehold.co/600x400/dddddd/333333?text=Must+3kW\\nAutonomous",
        description: "Автономний інвертор з чистою синусоїдою. Ідеальний для квартири та живлення котлів опалення.",
        specs: { "Потужність": "3 кВт", "Форма": "Чиста синусоїда", "Батарея": "24В", "Вага": "7 кг", "Зарядка": "30А" }
    },
    {
        id: 3,
        name: "LiFePO4 Battery 24V 100Ah",
        category: "battery",
        price: 18000,
        image: "https://placehold.co/600x400/dddddd/333333?text=LiFePO4\\nBattery+24V",
        description: "Сучасний літій-залізо-фосфатний акумулятор. Витримує до 6000 циклів заряду-розряду. Безпечний для використання в житлі.",
        specs: { "Ємність": "100 Аг", "Напруга": "24 В", "Тип": "LiFePO4", "Термін": "10+ років", "BMS": "Вбудована" }
    },
    {
        id: 4,
        name: "Growatt 6kW PRO",
        category: "hybrid",
        price: 42000,
        image: "https://placehold.co/600x400/dddddd/333333?text=Growatt+6kW\\nProfessional",
        description: "Професійне рішення для великих будинків. Підтримка зеленого тарифу та продаж електроенергії в мережу.",
        specs: { "Потужність": "6 кВт", "Фази": "1 фаза", "MPPT": "2 трекери", "Моніторинг": "Wi-Fi модуль", "ККД": "98%" }
    },
    {
        id: 5,
        name: "BASEN LiFePO4 25.6V 100Ah з Bluetooth",
        category: "battery",
        price: 21170,
        // Якщо ти зберіг фото у папку img:
        image: "img/basen_1.jpg", 
        // Якщо фото ще немає, використовуй заглушку нижче (розкоментуй):
        // image: "https://placehold.co/600x400/2a2a2a/00ff88?text=BASEN+24V+100Ah",
        
        description: "Потужна станція на 2.56 кВт·год. Вбудована BMS 100А із захистом. Головна фішка — Bluetooth моніторинг через телефон та зарядний пристрій 10А у комплекті. Ресурс >4000 циклів.",
        specs: { 
            "Ємність": "100 Аг (2.56 кВт·год)", 
            "Напруга": "25.6 В", 
            "Тип": "LiFePO4 (Клас А)", 
            "BMS": "100А + Bluetooth", 
            "Циклів": "4000+ (10 років)",
            "Вага": "24 кг",
            "Комплект": "Зарядне 10А"
        }
    },
    {
        id: 6,
        name: "Victron Phoenix 12/800",
        category: "autonomous",
        price: 15000,
        image: "https://placehold.co/600x400/dddddd/333333?text=Victron+Energy\\nPhoenix",
        description: "Преміум якість від європейського виробника (Нідерланди). Надійність 100%, витримує високі пускові струми.",
        specs: { "Потужність": "800 Вт", "Пік": "1600 Вт", "ККД": "92%", "Гарантія": "5 років", "Bluetooth": "Є" }
    }
];

// --- ГЛОБАЛЬНІ ЗМІННІ ---
let cart = [];
const container = document.getElementById('products-container');
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx8FLNex7G99248UHp5X_wvxcvOJyEtWZOgTcSMG5lCAAnG_12HW06hssHSzHBNTyrRMg/exec"; // <--- Встав сюди своє посилання!

// --- ВІДОБРАЖЕННЯ ТОВАРІВ ---
function displayProducts(filter) {
    container.innerHTML = ''; 
    const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);

    filtered.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.onclick = (e) => {
            if (e.target.classList.contains('buy-btn')) return;
            openProductModal(product);
        };
        const formattedPrice = product.price.toLocaleString('uk-UA') + ' ₴';
        card.innerHTML = `
            <img src="${product.image}" class="card-img" alt="${product.name}">
            <div class="card-body">
                <div>
                    <div class="category-tag">${getCategoryName(product.category)}</div>
                    <h3 class="card-title">${product.name}</h3>
                </div>
                <div>
                    <span class="card-price">${formattedPrice}</span>
                    <button class="buy-btn" onclick="addToCart(event, ${product.id})">Купити</button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

function getCategoryName(cat) {
    if(cat === 'hybrid') return 'Гібридний інвертор';
    if(cat === 'autonomous') return 'Автономний інвертор';
    if(cat === 'battery') return 'Акумулятор';
    return '';
}

// --- ЛОГІКА КОШИКА ---
function addToCart(event, productId) {
    if(event) event.stopPropagation();
    const product = products.find(p => p.id === productId);
    if (!product) return;

    cart.push(product);
    updateCartCounter();
    showToast(`"${product.name}" додано до кошика!`);
    
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

// --- МОДАЛЬНІ ВІКНА ---
function openCartModal() {
    renderCartItems();
    document.getElementById('cart-modal').style.display = 'flex';
}

function openProductModal(product) {
    const modal = document.getElementById("product-modal");
    document.getElementById("modal-img").src = product.image;
    document.getElementById("modal-title").innerText = product.name;
    document.getElementById("modal-category").innerText = getCategoryName(product.category);
    document.getElementById("modal-desc").innerText = product.description;
    document.getElementById("modal-price").innerText = product.price.toLocaleString('uk-UA') + ' ₴';

    const specsContainer = document.getElementById("modal-specs");
    specsContainer.innerHTML = '';
    for (const [key, value] of Object.entries(product.specs)) {
        specsContainer.innerHTML += `<div class="spec-item"><span>${key}</span><b>${value}</b></div>`;
    }

    const modalBtn = document.getElementById("modal-buy-btn");
    const newBtn = modalBtn.cloneNode(true);
    modalBtn.parentNode.replaceChild(newBtn, modalBtn);
    newBtn.onclick = () => {
        addToCart(null, product.id);
        modal.style.display = "none";
    };
    modal.style.display = "flex";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

window.onclick = (event) => {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}

// --- ФІЛЬТРИ ---
function filterProducts(category, event) {
    if (event) {
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');
    }
    container.style.opacity = '0';
    setTimeout(() => {
        displayProducts(category);
        container.style.opacity = '1';
    }, 200);
}

// --- ІНІЦІАЛІЗАЦІЯ ---
function showToast(message) {
    const toast = document.getElementById("toast");
    toast.innerText = message;
    toast.className = "toast show";
    setTimeout(() => toast.className = toast.className.replace("show", ""), 3000);
}

window.onload = function() {
    setTimeout(() => {
        const loader = document.getElementById('loader-wrapper');
        loader.style.opacity = '0';
        setTimeout(() => { loader.style.display = 'none'; }, 500);
    }, 1000);

    displayProducts('all');
    updateCartCounter();
};