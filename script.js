// Particles initialization
new JParticles.particle('#particles', {
    color: ['white', '#dee0e0'],
    proximity: 120,
    range: 150,
    parallax: true
});

// Typing text configuration
const messages = [
    "👋 Welcome to my profile! Thanks for visiting! ✨",
    "🙏 Chào bạn, đây là trang bio của tôi! 💫",
    "🌟 Sinh ra là bản gốc, đừng sống như một bản sao! 💯",
    "🇻🇳 Sinh ra và lớn lên ở Việt Nam thân yêu! ❤️",
    "🙌 Hãy bố thí tôi bằng cách click vào phần bố thí! 💰",
    "🏠 Sống ở Quảng Ngãi! 🌊",
    "😎 Chill thôi! 🎵",
    "🎮 Thích chơi game, 5 năm chơi minecraft, 6 năm chơi free fire 🏆",
    "🌊 Yêu biển và sóng, thích yên tĩnh 🧘‍♂️",
    "⚔️ Founder server minecraft Làng Lá vào chơi với tôi 🎮",
    "💝 Giàu tình cảm... 🥺",
    "🎯 Thường chơi game với nick name TazukiVN 🎮",
    "⚽ Fan MU 20 năm 🔴",
    "💔 Dell có người yêu huhu 😢"
];

class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type() {
        // Current index of word
        const current = this.wordIndex % this.words.length;
        // Get full text of current word
        const fullTxt = this.words[current];

        // Check if deleting
        if (this.isDeleting) {
            // Remove char
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            // Add char
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        // Insert txt into element
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        // Initial Type Speed
        let typeSpeed = 50;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        // If word is complete
        if (!this.isDeleting && this.txt === fullTxt) {
            // Make pause at end
            typeSpeed = this.wait;
            // Set delete to true
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            // Move to next word
            this.wordIndex++;
            // Pause before start typing
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
    const txtElement = document.getElementById('typingText');
    if (txtElement) {
        new TypeWriter(txtElement, messages, 3000);
    }
}

// Modal functions
function openModal() {
    const modal = document.getElementById('donationModal');
    if (modal) {
        modal.style.display = 'block';
    }
}

function closeModal() {
    const modal = document.getElementById('donationModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('donationModal');
    if (event.target == modal) {
        closeModal();
    }
}

// DateTime update function
function updateDateTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString('vi-VN', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    const datetimeElement = document.getElementById('datetime');
    if (datetimeElement) {
        datetimeElement.textContent = dateTimeString;
    }
}

// Initialize datetime and update every second
updateDateTime();
setInterval(updateDateTime, 1000);
