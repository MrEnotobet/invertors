// --- ДАНІ ПРО ТОВАРИ ---
/* Я налаштував стильні заглушки, які ідеально пасують до дизайну.
   Щоб вставити свої фото:
   1. Створіть папку "img" у папці з сайтом.
   2. Покладіть туди фото (наприклад, deye.jpg).
   3. Замініть посилання в коді: image: "img/deye.jpg"
*/

const products = [
    {
        id: 1,
        name: "Deye 5kW Hybrid Inverter",
        category: "hybrid",
        price: 35000,
        // Стильна картинка-заглушка під дизайн сайту
        image: "https://placehold.co/600x400/2a2a2a/00ff88?text=Deye+5kW\\nHybrid",
        description: "Потужний гібридний інвертор для дому. Працює з сонячними панелями та генератором. Підтримує віддалений моніторинг через додаток.",
        specs: { 
            "Потужність": "5 кВт", 
            "Тип": "Гібридний", 
            "Батарея": "48В", 
            "Захист": "IP65",
            "Гарантія": "5 років"
        }
    },
    {
        id: 2,
        name: "Must 3kW Pure Sine",
        category: "autonomous",
        price: 12500,
        image: "https://placehold.co/600x400/2a2a2a/00ff88?text=Must+3kW\\nAutonomous",
        description: "Автономний інвертор з чистою синусоїдою. Ідеальний для квартири та живлення котлів опалення.",
        specs: { 
            "Потужність": "3 кВт", 
            "Форма": "Чиста синусоїда", 
            "Батарея": "24В", 
            "Вага": "7 кг",
            "Зарядка": "30А"
        }
    },
    {
        id: 3,
        name: "LiFePO4 Battery 24V 100Ah",
        category: "battery",
        price: 18000,
        image: "https://placehold.co/600x400/2a2a2a/00ff88?text=LiFePO4\\nBattery+24V",
        description: "Сучасний літій-залізо-фосфатний акумулятор. Витримує до 6000 циклів заряду-розряду. Безпечний для використання в житлі.",
        specs: { 
            "Ємність": "100 Аг", 
            "Напруга": "24 В", 
            "Тип": "LiFePO4", 
            "Термін": "10+ років",
            "BMS": "Вбудована"
        }
    },
    {
        id: 4,
        name: "Growatt 6kW PRO",
        category: "hybrid",
        price: 42000,
        image: "https://placehold.co/600x400/2a2a2a/00ff88?text=Growatt+6kW\\nProfessional",
        description: "Професійне рішення для великих будинків. Підтримка зеленого тарифу та продаж електроенергії в мережу.",
        specs: { 
            "Потужність": "6 кВт", 
            "Фази": "1 фаза", 
            "MPPT": "2 трекери", 
            "Моніторинг": "Wi-Fi модуль",
            "ККД": "98%"
        }
    },
    {
        id: 5,
        name: "Gel Battery 12V 200Ah",
        category: "battery",
        price: 9500,
        image: "https://placehold.co/600x400/2a2a2a/00ff88?text=GEL+Battery\\n12V+200Ah",
        description: "Гелевий акумулятор глибокого розряду. Економне рішення для резервного живлення на короткий час.",
        specs: { 
            "Ємність": "200 Аг", 
            "Напруга": "12 В", 
            "Тип": "GEL", 
            "Вага": "60 кг",
            "Циклів": "400-600"
        }
    },
    {
        id: 6,
        name: "Victron Phoenix 12/800",
        category: "autonomous",
        price: 15000,
        image: "https://placehold.co/600x400/2a2a2a/00ff88?text=Victron+Energy\\nPhoenix",
        description: "Преміум якість від європейського виробника (Нідерланди). Надійність 100%, витримує високі пускові струми.",
        specs: { 
            "Потужність": "800 Вт", 
            "Пік": "1600 Вт", 
            "ККД": "92%", 
            "Гарантія": "5 років",
            "Bluetooth": "Є"
        }
    }
];

// --- ГЛОБАЛЬНІ ЗМІННІ ---
let cart = []; // Масив для зберігання товарів у кошику
const container = document.getElementById('products-container');

// --- ВІДОБРАЖЕННЯ ТОВАРІВ ---
function displayProducts(filter) {
    container.innerHTML = ''; 
    const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);

    filtered.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        // Відкриття модалки при кліку на картку
        card.onclick = (e) => {
            // Якщо клікнули на кнопку купити, модалку не відкриваємо, тільки додаємо в кошик
            if (e.target.classList.contains('buy-btn')) return;
            openProductModal(product);
        };

        // Форматуємо ціну з пробілами (35000 -> 35 000)
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
    if(event) event.stopPropagation(); // Зупиняємо спливання події, щоб не відкрилась модалка
    
    // Знаходимо товар в базі
    const product = products.find(p => p.id === productId);
    
    // Перевірка, чи товар існує
    if (!product) return;

    // Додаємо в масив кошика
    cart.push(product);
    
    updateCartCounter();
    showToast(`"${product.name}" додано до кошика!`);
    
    // Анімація кнопки кошика (пульсація)
    const cartBtn = document.getElementById('floating-cart');
    cartBtn.style.transform = 'scale(1.3)';
    setTimeout(() => cartBtn.style.transform = 'scale(1)', 200);
}

function updateCartCounter() {
    const countElement = document.getElementById('cart-count');
    countElement.innerText = cart.length;
    
    // Якщо кошик не порожній, показуємо лічильник
    if (cart.length > 0) {
        countElement.style.display = 'block';
    } else {
        countElement.style.display = 'none';
    }
}

function removeFromCart(index) {
    cart.splice(index, 1); // Видаляємо товар за індексом
    renderCartItems(); // Перемальовуємо вміст кошика
    updateCartCounter(); // Оновлюємо червоний кружечок
}

function renderCartItems() {
    const cartContainer = document.getElementById('cart-items-container');
    const totalEl = document.getElementById('cart-total-price');
    cartContainer.innerHTML = '';
    let totalPrice = 0;

    if (cart.length === 0) {
        cartContainer.innerHTML = '<div style="text-align: center; color: gray; padding: 40px;">Ваш кошик порожній 😔</div>';
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

function checkout() {
    // 1. Перевірка на порожній кошик
    if(cart.length === 0) {
        showToast("Кошик порожній! Додайте товари.");
        return;
    }

    // 2. Закриваємо вікно кошика
    document.getElementById('cart-modal').style.display = 'none';

    // 3. Відкриваємо вікно "Успіх"
    const successModal = document.getElementById('order-success-modal');
    successModal.style.display = 'flex';

    // 4. Очищуємо кошик
    cart = []; 
    renderCartItems();
    updateCartCounter();
}

// --- МОДАЛЬНІ ВІКНА (Логіка відкриття/закриття) ---

// Відкриття кошика
function openCartModal() {
    renderCartItems(); // Спочатку наповнюємо даними
    document.getElementById('cart-modal').style.display = 'flex';
}

// Відкриття товару
function openProductModal(product) {
    const modal = document.getElementById("product-modal");
    
    // Заповнюємо даними
    document.getElementById("modal-img").src = product.image;
    document.getElementById("modal-title").innerText = product.name;
    document.getElementById("modal-category").innerText = getCategoryName(product.category);
    document.getElementById("modal-desc").innerText = product.description;
    document.getElementById("modal-price").innerText = product.price.toLocaleString('uk-UA') + ' ₴';

    // Генерація характеристик
    const specsContainer = document.getElementById("modal-specs");
    specsContainer.innerHTML = '';
    for (const [key, value] of Object.entries(product.specs)) {
        specsContainer.innerHTML += `
            <div class="spec-item">
                <span>${key}</span>
                <b>${value}</b>
            </div>
        `;
    }

    // Кнопка "Додати" всередині модалки
    const modalBtn = document.getElementById("modal-buy-btn");
    // Видаляємо старі події (щоб не додавалося по 10 разів)
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

// Закриття при кліку за межами вікна (сірий фон)
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
    // Ефект зникнення перед зміною
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
    // Імітація завантаження сайту
    setTimeout(() => {
        const loader = document.getElementById('loader-wrapper');
        loader.style.opacity = '0';
        setTimeout(() => { loader.style.display = 'none'; }, 500);
    }, 1000);

    displayProducts('all');
    updateCartCounter(); // Сховати лічильник на старті
};