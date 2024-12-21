// Particles initialization
new JParticles.particle('#particles', {
    color: ['white', '#dee0e0'],
    proximity: 120,
    range: 150,
    parallax: true
});

// Title animation
$(function () {
    var title = document.title,
        animSeq = ["|"],
        animIndex = 0,
        titleIndex = 0;
    
    function doInverseSpinZeroPitch() {
        var loadTitle = title.substring(0, titleIndex);
        if (titleIndex > title.length) {
            animIndex = 0;
            titleIndex = 0;
        }
        if (animIndex > 1) {
            titleIndex++;
            animIndex = 0;
        }
        document.title = loadTitle + animSeq[0];
        animIndex++;
    }
    window.setInterval(doInverseSpinZeroPitch, 150);
});

// Typed text animation with previous messages
$(function () {
    $(".typed").typed({
        strings: [
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
        ],
        typeSpeed: 135,
        loop: true,
        cursorChar: "|",
    });
});

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
