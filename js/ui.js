// --- ЗМІНА ТЕМИ ---
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
});

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
    if (variantsContainer) variantsContainer.innerHTML = '';
    
    let currentPrice = product.price;

    if (product.hasVariants && product.variants) {
        let selectHTML = `<select id="variant-select" class="form-input" style="margin-bottom: 20px; cursor: pointer; font-weight: bold; font-size: 0.95rem; border: 2px solid var(--primary);">`;
        product.variants.forEach((v, index) => {
            selectHTML += `<option value="${index}">${v.name} — ${v.price.toLocaleString('uk-UA')} ₴</option>`;
        });
        selectHTML += `</select>`;
        variantsContainer.innerHTML = selectHTML;

        currentPrice = product.variants[0].price;

        document.getElementById('variant-select').addEventListener('change', function(e) {
            const selectedVariant = product.variants[e.target.value];
            document.getElementById("modal-price").innerText = selectedVariant.price.toLocaleString('uk-UA') + ' ₴';
        });
    }

    document.getElementById("modal-title").innerText = product.name;
    document.getElementById("modal-category").innerText = getCategoryName(product.category);
    document.getElementById("modal-desc").innerText = product.description;
    document.getElementById("modal-price").innerText = currentPrice.toLocaleString('uk-UA') + ' ₴';

    const specsContainer = document.getElementById("modal-specs");
    specsContainer.innerHTML = '';
    for (const [key, value] of Object.entries(product.specs)) {
        specsContainer.innerHTML += `<div class="spec-item"><span>${key}</span><b>${value}</b></div>`;
    }

    const docsContainer = document.getElementById("modal-docs-container");
    if (docsContainer) {
        if (product.document) {
            docsContainer.innerHTML = `<a href="${product.document}" target="_blank" class="btn-pdf-download"><i class="fas fa-file-pdf"></i> Завантажити специфікацію (PDF)</a>`;
        } else {
            docsContainer.innerHTML = '';
        }
    }

    const modalBtn = document.getElementById("modal-buy-btn");
    const newBtn = modalBtn.cloneNode(true);
    modalBtn.parentNode.replaceChild(newBtn, modalBtn);
    
    newBtn.onclick = () => {
        if (product.hasVariants) {
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

function showToast(message) {
    const toast = document.getElementById("toast");
    toast.innerText = message;
    toast.className = "toast show";
    setTimeout(() => toast.className = toast.className.replace("show", ""), 3000);
}


// --- ФУНКЦІЯ ПЕРЕМИКАННЯ ФОТО В ГАЛЕРЕЇ ---
function changeModalImage(element, src) {
    document.getElementById('modal-main-image').src = src;
    
    const thumbs = document.querySelectorAll('.modal-thumbnail');
    thumbs.forEach(t => t.classList.remove('active'));
    
    element.classList.add('active');
}


