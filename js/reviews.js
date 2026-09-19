// ==========================================
// СИСТЕМА ВІДГУКІВ (Firebase Realtime Database)
// ==========================================

const DB_URL = "https://svitenergy-2e01e-default-rtdb.europe-west1.firebasedatabase.app/reviews.json";

async function loadReviews() {
    try {
        const response = await fetch(DB_URL);
        const data = await response.json();
        
        const container = document.getElementById('reviews-container');
        if (!container) return;
        container.innerHTML = '';

        if (!data) {
            container.innerHTML = '<p style="text-align: center; width: 100%; color: #888;">Поки що немає відгуків. Будьте першим!</p>';
            return;
        }

        const reviewsArray = Object.values(data);
        
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

loadReviews();

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
            timestamp: Date.now()
        };
        
        try {
            await fetch(DB_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newReview)
            });
            
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
