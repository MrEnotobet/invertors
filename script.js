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
const products = [
    {
        id: 1,
        name: "Лінійка гібридних інверторів Deye (від 5 до 80 кВт)",
        category: "hybrid",
        price: 40000, 
        images: ["img/deye_5kvt.png"],
        image: "img/deye_5kvt.png",
        description: "Оберіть потрібну модель зі списку нижче. Лінійка гібридних інверторів Deye підтримує підключення сонячних панелей, акумуляторів (низьковольтних або високовольтних) та функцію продажу надлишків за 'Зеленим тарифом'.",
        specs: { 
            "Бренд": "Deye", 
            "Тип": "Гібридний інвертор", 
            "Моніторинг": "WiFi модуль (в комплекті)",
            "Гарантія": "Офіційна 5 років"
        },
        hasVariants: true, // Вказуємо, що це товар з вибором моделі
        variants: [
            { name: "SUN-05K-SG05LP1-EU-AM2-PLUS (5 kW, 1ф, 2 MPPT, LV)", price: 40000 },
            { name: "SUN-6K-SG05LP1-EU (6 kW, 1ф, 2 MPPT, LV)", price: 43000 },
            { name: "SUN-8K-SG05LP1-EU (8 kW, 1ф, 2 MPPT, LV)", price: 58000 },
            { name: "SUN-10K-SG02LP1-EU-AM3 (10 kW, 1ф, 3 MPPT, LV)", price: 76000 },
            { name: "SUN-10k-SG05LP3 (10 kW, 3ф, 2 MPPT, LV)", price: 80000 },
            { name: "SUN-12K-SG02LP1-EU-AM3 (12 kW, 1ф, 3 MPPT, LV)", price: 82000 },
            { name: "SUN-12K-SG04LP3-EU (12 kW, 3ф, 2 MPPT, LV)", price: 85000 },
            { name: "SUN-15K-SG05LP3-EU-SM2 (15 kW, 3ф, 2 MPPT, LV)", price: 95000 },
            { name: "SUN-16K-SG01LP1-EU (16 kW, 1ф, 3 MPPT, LV)", price: 94000 },
            { name: "SUN-16K-SG05LP3-EU-SM2 (16 kW, 3ф, 2 MPPT, LV)", price: 94000 },
            { name: "SUN-20K-SG05LP3-EU-SM2 (20 kW, 3ф, 2 MPPT, LV)", price: 120000 },
            { name: "SUN-20K-SG01HP3-EU-AM2 (20 kW, 3ф, 2 MPPT, HV)", price: 85000 },
            { name: "SUN-30K-SG01HP3-EU-BM3 (30 kW, 3ф, 3 MPPT, HV)", price: 121000 },
            { name: "SUN-40K-SG01HP3-EU-BM4 (40 kW, 3ф, 4 MPPT, HV)", price: 180000 },
            { name: "SUN-50K-SG01HP3-EU-BM4 (50 kW, 3ф, 4 MPPT, HV)", price: 210000 },
            { name: "SUN-60K-SG02HP3-EU-EM4 (60 kW, 3ф, 6 MPPT, HV)", price: 215000 },
            { name: "SUN-75K-SG02HP3-EU-EM6 (75 kW, 3ф, 6 MPPT, HV)", price: 240000 },
            { name: "SUN-80K-SG02HP3-EU-EM6 (80 kW, 3ф, 6 MPPT, HV)", price: 253000 }
        ]
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
        id: 3,
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
        id: 4,
        name: "BASEN LiFePO4 25.6V 100Ah з Bluetooth",
        category: "battery",
        price: 24000,
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
        id: 5,
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
        id: 6,
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
        id: 7,
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
        id: 8,
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
    {
        id: 9,
        name: "Акумулятор Basen Green LiFePO4 25.6V 230Ah з Bluetooth",
        category: "battery",
        price: 32900,
        images: [
            "img/basen_24v_230ah.png"
        ],
        image: "img/basen_24v_230ah.png",
        description: "Надійна літій-залізо-фосфатна батарея для систем резервного та автономного живлення з глибоким розрядом. Забезпечує тривалу та стабільну роботу обладнання без частих підзарядок. Вбудована система керування (BMS) контролює заряд, розряд, температуру та захищає акумулятор від перевантажень. Завдяки Bluetooth можна в реальному часі переглядати основні параметри батареї через смартфон.",
        specs: { 
            "Ємність": "230 Аг (5.8 кВт·год)", 
            "Напруга": "25,6 В", 
            "Тип": "LiFePO4", 
            "BMS": "Вбудована + Bluetooth", 
            "Особливості": "Глибокий розряд"
        }
    },
    {
        id: 10,
        name: "Лінійка сонячних панелей Longi Solar (555 - 650 Вт)",
        category: "solar",
        price: 4120,
        images: ["img/longi_panel.png"],
        image: "img/longi_panel.png",
        description: "Оберіть потрібну модель зі списку нижче. Високоефективні монокристалічні сонячні панелі від світового лідера Longi Solar (Tier 1). Ідеально підходять для домашніх, комерційних мережевих та гібридних сонячних електростанцій.",
        specs: { 
            "Бренд": "Longi Solar", 
            "Тип": "Монокристал", 
            "Клас": "Tier 1",
            "Гарантія": "12 років"
        },
        hasVariants: true,
        variants: [
            { name: "LR5-72HPH 545-555W (Hi-MO5) 555Вт", price: 4120 },
            { name: "LR5-72HTH-575M (Hi-MO 6m) 575Вт", price: 4250 },
            { name: "LR7-72HGD 610-620W (Hi-MO7) 620Вт", price: 4300 },
            { name: "LR7-72HVH-650M Explorer (Hi-MO X10) 650Вт", price: 5060 }
        ]
    },
    {
        id: 11,
        name: "Лінійка сонячних панелей Jinko Solar (570 - 620 Вт)",
        category: "solar",
        price: 4000,
        images: ["img/jinko_panel.png"],
        image: "img/jinko_panel.png",
        description: "Оберіть потрібну модель зі списку нижче. Високоефективні сонячні панелі від світового лідера Jinko Solar (Tier 1). Включають передові технології N-Type та Bifacial (двосторонні) для максимальної генерації енергії навіть у похмуру погоду.",
        specs: { 
            "Бренд": "Jinko Solar", 
            "Тип": "Монокристал (N-Type / Bifacial)", 
            "Клас": "Tier 1",
            "Гарантія": "12 років"
        },
        hasVariants: true,
        variants: [
            { name: "JKM570N72HL4-BDV Bifacial Tiger Neo N-Type 570Вт", price: 4000 },
            { name: "JKM620N-78HL4 620Вт", price: 4400 }
        ]
    },
    {
        id: 12,
        name: "Лінійка сонячних панелей HORAY Solar (455 - 700 Вт)",
        category: "solar",
        price: 3910,
        images: ["img/horay_panel.png"],
        image: "img/horay_panel.png",
        description: "Оберіть потрібну модель зі списку нижче. Надійні та високоефективні сонячні панелі HORAY Solar. Відмінний вибір для створення сонячних електростанцій будь-якого масштабу. Лінійка включає надпотужні панелі до 700 Вт для отримання максимальної генерації з кожного квадратного метра.",
        specs: { 
            "Бренд": "HORAY Solar", 
            "Тип": "Монокристал", 
            "Потужність": "від 455 Вт до 700 Вт",
            "Гарантія": "12 років"
        },
        hasVariants: true,
        variants: [
            { name: "HS455TC-MHC-D 455Вт", price: 3910 },
            { name: "HS510TC-MHC-D 510Вт", price: 4200 },
            { name: "HS620TC-MHC-D 620Вт", price: 4620 },
            { name: "HS700TC-MHG-D 700Вт", price: 5060 }
        ]
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
        
        // Якщо товар має варіанти, пишемо "від X грн"
        const formattedPrice = (product.hasVariants ? 'від ' : '') + product.price.toLocaleString('uk-UA') + ' ₴';
        
        // Змінюємо кнопку на "Вибрати модель" для мультитоварів
        const btnAction = product.hasVariants 
            ? `onclick="openProductModalById(event, ${product.id})">Вибрати модель` 
            : `onclick="addToCart(event, ${product.id})">Купити`;

        card.innerHTML = `
            <img src="${product.image}" class="card-img" alt="${product.name}">
            <div class="card-body">
                <div>
                    <div class="category-tag">${getCategoryName(product.category)}</div>
                    <h3 class="card-title">${product.name}</h3>
                </div>
                <div>
                    <span class="card-price">${formattedPrice}</span>
                    <button class="buy-btn" ${btnAction}</button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// Допоміжна функція для відкриття модалки з кнопки "Вибрати"
function openProductModalById(event, productId) {
    if(event) event.stopPropagation();
    const prod = products.find(p => p.id === productId);
    if(prod) openProductModal(prod);
}

function getCategoryName(cat) {
    if(cat === 'hybrid') return 'Гібридний інвертор';
    if(cat === 'autonomous') return 'Автономний інвертор';
    if(cat === 'battery') return 'Акумулятор';
    if(cat === 'kits') return 'Готовий набір';
    if(cat === 'solar') return 'Сонячна панель';
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

// --- МОДАЛЬНІ ВІКНА ---
function openCartModal() {
    renderCartItems();
    document.getElementById('cart-modal').style.display = 'flex';
}

function openProductModal(product) {
    const modal = document.getElementById("product-modal");
    const imgContainer = document.querySelector(".modal-img-container");

    // Блок галереї з мініатюрами (залишаємо як було)
    imgContainer.innerHTML = '';
    if (product.images && product.images.length > 1) {
        const mainImgSrc = product.images[0];
        let thumbsHTML = '';
        product.images.forEach((src, index) => {
            const isActive = index === 0 ? 'active' : '';
            thumbsHTML += `<img src="${src}" class="modal-thumbnail ${isActive}" onclick="changeModalImage(this, '${src}')" alt="thumbnail">`;
        });
        imgContainer.innerHTML = `
            <div class="modal-gallery">
                <img id="modal-main-image" class="modal-main-image" src="${mainImgSrc}" alt="${product.name}">
                <div class="modal-thumbnails">${thumbsHTML}</div>
            </div>
        `;
    } else {
        const src = (product.images && product.images.length > 0) ? product.images[0] : product.image;
        imgContainer.innerHTML = `
            <div class="modal-gallery" style="justify-content: center;">
                <img id="modal-main-image" class="modal-main-image" src="${src}" alt="${product.name}" style="height: 100%; margin: 0;">
            </div>
        `;
    }

    // --- ЛОГІКА ВИПАДАЮЧОГО СПИСКУ (НОВЕ) ---
    const variantsContainer = document.getElementById("modal-variants-container");
    if (variantsContainer) variantsContainer.innerHTML = ''; // очищаємо
    
    let currentPrice = product.price;

    if (product.hasVariants && product.variants) {
        // Створюємо список
        let selectHTML = `<select id="variant-select" class="form-input" style="margin-bottom: 20px; cursor: pointer; font-weight: bold; font-size: 0.95rem; border: 2px solid var(--primary);">`;
        product.variants.forEach((v, index) => {
            selectHTML += `<option value="${index}">${v.name} — ${v.price.toLocaleString('uk-UA')} ₴</option>`;
        });
        selectHTML += `</select>`;
        variantsContainer.innerHTML = selectHTML;

        currentPrice = product.variants[0].price; // Беремо ціну першої моделі

        // Коли вибирають іншу модель - змінюємо ціну на екрані
        document.getElementById('variant-select').addEventListener('change', function(e) {
            const selectedVariant = product.variants[e.target.value];
            document.getElementById("modal-price").innerText = selectedVariant.price.toLocaleString('uk-UA') + ' ₴';
        });
    }

    // Заповнюємо тексти
    document.getElementById("modal-title").innerText = product.name;
    document.getElementById("modal-category").innerText = getCategoryName(product.category);
    document.getElementById("modal-desc").innerText = product.description;
    document.getElementById("modal-price").innerText = currentPrice.toLocaleString('uk-UA') + ' ₴';

    const specsContainer = document.getElementById("modal-specs");
    specsContainer.innerHTML = '';
    for (const [key, value] of Object.entries(product.specs)) {
        specsContainer.innerHTML += `<div class="spec-item"><span>${key}</span><b>${value}</b></div>`;
    }

    // Оновлюємо кнопку "Купити"
    const modalBtn = document.getElementById("modal-buy-btn");
    const newBtn = modalBtn.cloneNode(true);
    modalBtn.parentNode.replaceChild(newBtn, modalBtn);
    
    newBtn.onclick = () => {
        if (product.hasVariants) {
            // Додаємо в кошик саме ВИБРАНУ модель
            const selectedIdx = document.getElementById('variant-select').value;
            const selectedVariant = product.variants[selectedIdx];
            
            cart.push({
                name: `Deye ${selectedVariant.name}`,
                price: selectedVariant.price,
                image: (product.images && product.images.length > 0) ? product.images[0] : product.image
            });
            updateCartCounter();
            showToast(`Додано до кошика!`);
            modal.style.display = "none";
        } else {
            // Звичайний товар
            addToCart(null, product.id);
            modal.style.display = "none";
        }
    };

    const closeBtn = document.querySelector('.close-modal');
    closeBtn.onclick = function() { modal.style.display = "none"; };

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

// ==========================================
// СИСТЕМА ВІДГУКІВ (Firebase Realtime Database)
// ==========================================

// УВАГА: Встав сюди СВОЄ посилання з Firebase і обов'язково додай в кінці /reviews.json
const DB_URL = "https://svitenergy-2e01e-default-rtdb.europe-west1.firebasedatabase.app/reviews.json";

// Функція для завантаження відгуків з сервера
async function loadReviews() {
    try {
        const response = await fetch(DB_URL);
        const data = await response.json();
        
        const container = document.getElementById('reviews-container');
        if (!container) return;
        container.innerHTML = '';

        // Якщо база порожня
        if (!data) {
            container.innerHTML = '<p style="text-align: center; width: 100%; color: #888;">Поки що немає відгуків. Будьте першим!</p>';
            return;
        }

        // Firebase повертає об'єкт об'єктів, перетворюємо його на масив
        const reviewsArray = Object.values(data);
        
        // Сортуємо так, щоб нові були зверху (за часом додавання)
        reviewsArray.sort((a, b) => b.timestamp - a.timestamp);

        reviewsArray.forEach(review => {
            const stars = '⭐'.repeat(review.rating);
            const card = document.createElement('div');
            card.className = 'review-card';
            card.innerHTML = `
                <div class="review-header">
                    <span class="review-name">${review.name}</span>
                    <span class="review-date">${review.date}</span>
                </div>
                <div class="review-stars">${stars}</div>
                <div class="review-text">${review.text}</div>
            `;
            container.appendChild(card);
        });
    } catch (error) {
        console.error("Помилка завантаження відгуків:", error);
    }
}

// Запускаємо завантаження при відкритті сторінки
loadReviews();

// Обробка форми додавання нового відгуку
const reviewForm = document.getElementById('review-form');
if (reviewForm) {
    reviewForm.addEventListener('submit', async function(e) {
        e.preventDefault(); 
        
        const name = document.getElementById('review-name').value;
        const rating = parseInt(document.getElementById('review-rating').value);
        const text = document.getElementById('review-text').value;
        
        const today = new Date();
        const dateStr = today.toLocaleDateString('uk-UA');
        
        const newReview = {
            name: name,
            rating: rating,
            text: text,
            date: dateStr,
            timestamp: Date.now() // Додаємо мітку часу для правильного сортування
        };
        
        try {
            // Відправляємо дані на сервер Firebase
            await fetch(DB_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newReview)
            });
            
            // Якщо все ок - очищаємо форму, показуємо повідомлення і перезавантажуємо список
            reviewForm.reset();
            if(typeof showToast === 'function') {
                showToast('Дякуємо за ваш відгук!');
            } else {
                alert('Дякуємо за ваш відгук!');
            }
            loadReviews(); 
            
        } catch (error) {
            console.error("Помилка відправки відгуку:", error);
            alert("Сталася помилка. Спробуйте пізніше.");
        }
    });
}