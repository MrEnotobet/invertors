const container = document.getElementById('products-container');

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
        
        const formattedPrice = (product.hasVariants ? 'від ' : '') + product.price.toLocaleString('uk-UA') + ' ₴';
        
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


window.onload = function() {
    setTimeout(() => {
        const loader = document.getElementById('loader-wrapper');
        loader.style.opacity = '0';
        setTimeout(() => { loader.style.display = 'none'; }, 500);
    }, 1000);

    displayProducts('all');
    updateCartCounter();
};