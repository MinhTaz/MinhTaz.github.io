document.addEventListener("DOMContentLoaded", function () {
    new Typed("#typed", {
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
        typeSpeed: 100,
        backSpeed: 50,
        loop: true,
        showCursor: true,
        cursorChar: "|", // Fix con trỏ đứng im
    });
});

// Mở modal
function openModal() {
    const modal = document.getElementById('donationModal');
    if (modal) {
        modal.style.display = 'block';
    }
}

// Đóng modal
function closeModal() {
    const modal = document.getElementById('donationModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Đóng modal khi click bên ngoài
window.onclick = function(event) {
    const modal = document.getElementById('donationModal');
    if (event.target === modal) {
        closeModal();
    }
};
