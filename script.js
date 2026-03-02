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
        name: "Гібридний інвертор Deye SUN-5K-SG03LP1-EU 5kW",
        category: "hybrid",
        price: 54630,
        images: [
            "img/deye_5kvt.png"
        ],
        image: "img/deye_5kvt.png",
        description: "Потужний інструмент для генерації власної сонячної енергії. Має вбудований зарядний контролер для батарей з глибоким циклом розряду. Підтримує продаж надлишків за 'Зеленим тарифом' та керування зі смартфона.",
        specs: { 
            "Потужність": "5 кВт (Пік 10 кВт)", 
            "Тип мережі": "1 фаза", 
            "MPPT трекери": "2 шт (11А + 11А)", 
            "Струм зарядки": "120А (Max)", 
            "Підтримка АКБ": "AGM, GEL, LiFePO4, Li-ion",
            "Ступінь захисту": "IP65",
            "Вага": "32 кг"
        }
    },
    {
        id: 2,
        name: "Інвертор Must PV18-3024 VPM 3kW/24V MPPT",
        category: "autonomous",
        price: 17325,
        images: [
            "img/must_3kvt.png"
        ],
        image: "img/must_3kvt.png",
        description: "Надійне та ефективне обладнання для гібридних фотоелектричних станцій невеликої потужності. Поєднує функції перетворювача з чистою синусоїдою, сонячного зарядного пристрою MPPT (60A) та мережевого зарядного пристрою. Має вбудований захист від перевантаження та функцію холодного старту.",
        specs: { 
            "Номінальна потужність": "3 кВт (3000 ВА)", 
            "Пікова потужність": "6 кВт (6000 ВА)", 
            "Напруга акумулятора": "24 В", 
            "Струм заряду (Мережа)": "20А / 30А", 
            "Струм заряду (MPPT)": "60А",
            "Ефективність": "90% - 93%",
            "Вага": "7.4 кг"
        }
    },
    {
        id: 4,
        name: "Гібридний інвертор Growatt SPF 6000 ES PLUS (WIFI) 6kW",
        category: "hybrid",
        price: 31500,
        images: [
            "img/growatt_6kvt.png"
        ],
        image: "img/growatt_6kvt.png",
        description: "Універсальний гібридний сонячний інвертор на 6 кВт для житлових і комерційних систем. Поєднує функції інвертора, зарядного пристрою та перемикача. Підтримує паралельне підключення до 6 пристроїв та функцію підмішування.",
        specs: { 
            "Номінальна потужність": "6 кВт (Пік 12 кВт)", 
            "Фази": "1 фаза", 
            "Напруга акумулятора": "48 В", 
            "Тип акумуляторів": "LiFePO4, Li-ion, Lead-acid", 
            "Макс. потужність панелей": "8000 Вт",
            "Моніторинг": "WiFi / Bluetooth",
            "Вага": "13.5 кг"
        }
    },
    {
        id: 5,
        name: "BASEN LiFePO4 25.6V 100Ah з Bluetooth",
        category: "battery",
        price: 21170,
        image: "img/basen_1.jpg",
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
        name: "Інвертор Victron Energy Phoenix 12/1200 VE.Direct",
        category: "autonomous",
        price: 15151,
        images: [
            "img/Victron_1.png",
            "img/Victron_2.png",
            "img/Victron_3.png"
        ],
        image: "img/Victron_1.png",
        description: "Перетворювач напруги преміум-класу (Нідерланди) з чистою синусоїдою на виході. Ідеальний для систем резервного живлення, автобудинків та катерів. Має ECO-режим, функцію динамічного відключення та можливість віддаленого моніторингу через порт VE.Direct.",
        specs: { 
            "Номінальна потужність": "1000 Вт (1200 ВА)", 
            "Пікова потужність": "2200 Вт", 
            "Вхідна напруга": "12 В (9.2 - 17 В DC)", 
            "Вихідна напруга": "230 В (Чиста синусоїда)", 
            "Макс. ефективність": "91%",
            "Інтерфейси": "VE.Direct (Bluetooth опціонально)",
            "Вага": "7.4 кг"
        }
    },
    {
        id: 8,
        name: "Комплект: Інвертор MUST 3кВт + Смарт LiFePO4 24V 100Ah",
        category: "kits",
        price: 43500,
        images: [
            "img/komplekt-must-3-0.png"
        ],
        image: "img/komplekt-must-3-0.png",
        description: "Готовий комплект резервного живлення на базі гібридного інвертора MUST PV18-3024VPM і смарт-акумулятора MUST LiFePO4 24V 100Ah (2.56 кВт·год). Автоматично вмикається при зникненні світла, забезпечує чисту синусоїду. Ідеально для котла, холодильника, освітлення та Wi-Fi. Вистачає на 12-30 годин автономної роботи.",
        specs: { 
            "Потужність інвертора": "3000 Вт (Пік 6000 Вт)", 
            "Ємність акумулятора": "100 А·год (2.56 кВт·год)", 
            "Тип акумулятора": "LiFePO4 (Смарт BMS 100A)", 
            "Ресурс АКБ": "6000+ циклів (10-15 років)", 
            "Струм заряду (MPPT)": "60 А (Сонячні панелі до 1500 Вт)",
            "Час автономності": "12–30 год (залежить від навантаження)",
            "Гарантія": "12 місяців"
        }
    },
    {
        id: 9,
        name: "Комплект: Інвертор MUST 3кВт + Смарт LiFePO4 24V 200Ah",
        category: "kits",
        price: 54000,
        images: [
            "img/komplekt-rezervnogo-zhivlennya-must-3-0-kvt-smart-lifepo4-akumulyator-24v-200ah-5-12-kvt-god-18-500x500.png"
        ],
        image: "img/komplekt-rezervnogo-zhivlennya-must-3-0-kvt-smart-lifepo4-akumulyator-24v-200ah-5-12-kvt-god-18-500x500.png",
        description: "Готовий комплект резервного живлення збільшеної ємності на базі інвертора MUST PV18-3024VPM і смарт-акумулятора MUST LiFePO4 24V 200Ah (5.12 кВт·год). Забезпечує тривалу автономну роботу будинку (котел, освітлення, холодильник, Wi-Fi) та має чисту синусоїду, безпечну для будь-якої техніки.",
        specs: { 
            "Потужність інвертора": "3000 Вт (Пік 6000 Вт)", 
            "Ємність акумулятора": "200 А·год (5.12 кВт·год)", 
            "Тип акумулятора": "LiFePO4 (Смарт BMS 100A)", 
            "Ресурс АКБ": "6000+ циклів (10-15 років)", 
            "Струм заряду (MPPT)": "60 А (Сонячні панелі до 1500 Вт)",
            "Вага АКБ": "44 кг",
            "Гарантія": "12 місяців"
        }
    },
    {
        id: 10,
        name: "Комплект: Інвертор MUST 6кВт + Смарт LiFePO4 48V 100Ah",
        category: "kits",
        price: 66000,
        images: [
            "img/komplekt-rezervnogo-zhivlennya-must-3-2-kvt-smart-lifepo4-akumulyator-24v-200ah-5-12-kvt-god-1-500x500.jpg"
        ],
        image: "img/komplekt-rezervnogo-zhivlennya-must-3-2-kvt-smart-lifepo4-akumulyator-24v-200ah-5-12-kvt-god-1-500x500.jpg",
        description: "Потужний готовий комплект резервного живлення для всього будинку на базі інвертора MUST PV18-6048 (6 кВт) і смарт-акумулятора MUST LiFePO4 48V 100Ah (5.12 кВт·год). Забезпечує чисту синусоїду, витримує високі навантаження та підтримує потужні масиви сонячних панелей до 4000 Вт (вбудований MPPT 120A).",
        specs: { 
            "Потужність інвертора": "6000 Вт (Пік 12000 Вт)", 
            "Ємність акумулятора": "100 А·год (5.12 кВт·год)", 
            "Напруга системи": "48 В",
            "Тип акумулятора": "LiFePO4 (Смарт BMS 120A)", 
            "Ресурс АКБ": "6000+ циклів (10-15 років)", 
            "Струм заряду (MPPT)": "120 А (Панелі до 4000 Вт)",
            "Вага АКБ": "55 кг",
            "Гарантія": "12 місяців"
        }
    },
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
    if(cat === 'kits') return 'Готовий набір';
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
    const imgContainer = document.querySelector(".modal-img-container");

    // 1. Очищаємо контейнер
    imgContainer.innerHTML = '';

    // 2. Будуємо нову Галерею з мініатюрами
    if (product.images && product.images.length > 1) {
        // Беремо перше фото як головне
        const mainImgSrc = product.images[0];
        
        let thumbsHTML = '';
        product.images.forEach((src, index) => {
            // Перша мініатюра одразу отримує клас 'active'
            const isActive = index === 0 ? 'active' : '';
            thumbsHTML += `<img src="${src}" class="modal-thumbnail ${isActive}" onclick="changeModalImage(this, '${src}')" alt="thumbnail">`;
        });

        imgContainer.innerHTML = `
            <div class="modal-gallery">
                <img id="modal-main-image" class="modal-main-image" src="${mainImgSrc}" alt="${product.name}">
                <div class="modal-thumbnails">
                    ${thumbsHTML}
                </div>
            </div>
        `;
    } else {
        // Якщо фото тільки одне, показуємо його без мініатюр
        const src = (product.images && product.images.length > 0) ? product.images[0] : product.image;
        imgContainer.innerHTML = `
            <div class="modal-gallery" style="justify-content: center;">
                <img id="modal-main-image" class="modal-main-image" src="${src}" alt="${product.name}" style="height: 100%; margin: 0;">
            </div>
        `;
    }

    // 3. Заповнюємо тексти
    document.getElementById("modal-title").innerText = product.name;
    document.getElementById("modal-category").innerText = getCategoryName(product.category);
    document.getElementById("modal-desc").innerText = product.description;
    document.getElementById("modal-price").innerText = product.price.toLocaleString('uk-UA') + ' ₴';

    // 4. Заповнюємо характеристики
    const specsContainer = document.getElementById("modal-specs");
    specsContainer.innerHTML = '';
    for (const [key, value] of Object.entries(product.specs)) {
        specsContainer.innerHTML += `<div class="spec-item"><span>${key}</span><b>${value}</b></div>`;
    }

    // 5. Оновлюємо кнопку "Купити"
    const modalBtn = document.getElementById("modal-buy-btn");
    const newBtn = modalBtn.cloneNode(true);
    modalBtn.parentNode.replaceChild(newBtn, modalBtn);
    newBtn.onclick = () => {
        addToCart(null, product.id);
        modal.style.display = "none";
    };

    // 6. Хрестик закриття
    const closeBtn = document.querySelector('.close-modal');
    closeBtn.onclick = function() {
        modal.style.display = "none";
    };

    // Показуємо вікно
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


// --- ФУНКЦІЯ ПЕРЕМИКАННЯ ФОТО В ГАЛЕРЕЇ ---
function changeModalImage(element, src) {
    // Міняємо головне фото
    document.getElementById('modal-main-image').src = src;
    
    // Забираємо клас active у всіх мініатюр
    const thumbs = document.querySelectorAll('.modal-thumbnail');
    thumbs.forEach(t => t.classList.remove('active'));
    
    // Додаємо клас active тій мініатюрі, на яку клікнули
    element.classList.add('active');
}