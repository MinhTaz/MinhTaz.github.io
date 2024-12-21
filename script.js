// Hiệu ứng gõ chữ và cập nhật thời gian
document.addEventListener("DOMContentLoaded", function () {
    // Typed.js initialization
    new Typed("#typed", {
        strings: [
            '"👋 Welcome to my profile! Thanks for visiting! ✨"',
            '"🙏 Chào bạn, đây là trang bio của tôi! 💫"',
            '"🌟 Sinh ra là bản gốc, đừng sống như một bản sao! 💯"',
            '"🇻🇳 Sinh ra và lớn lên ở Việt Nam thân yêu! ❤️"',
            '"🙌 Hãy bố thí tôi bằng cách click vào phần bố thí! 💰"',
            '"🏠 Sống ở Quảng Ngãi! 🌊"',
            '"😎 Chill thôi! 🎵"',
            '"🎮 Thích chơi game, 5 năm chơi minecraft, 6 năm chơi free fire 🏆"',
            '"🌊 Yêu biển và sóng, thích yên tĩnh 🧘‍♂️"',
            '"⚔️ Founder server minecraft Làng Lá vào chơi với tôi 🎮"',
            '"💝 Giàu tình cảm... 🥺"',
            '"🎯 Thường chơi game với nick name TazukiVN 🎮"',
            '"⚽ Fan MU 20 năm 🔴"',
            '"💔 Dell có người yêu huhu 😢"'
        ],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true,
        showCursor: false, // Tắt cursor vì không cần | nữa
    });

    // DateTime update function
    function updateDateTime() {
        const now = new Date();
        
        // Chuyển đổi sang giờ Việt Nam
        const vietnamTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Ho_Chi_Minh' }));
        
        const hours = vietnamTime.getHours();
        const minutes = String(vietnamTime.getMinutes()).padStart(2, '0');
        const day = String(vietnamTime.getDate()).padStart(2, '0');
        const month = String(vietnamTime.getMonth() + 1).padStart(2, '0');
        const year = vietnamTime.getFullYear();

        // Xác định buổi trong ngày và icon tương ứng
        let timeOfDay, timeIcon;
        if (hours >= 5 && hours < 12) {
            timeOfDay = "Buổi sáng";
            timeIcon = "☀️"; // icon mặt trời
        } else if (hours >= 12 && hours < 18) {
            timeOfDay = "Buổi chiều";
            timeIcon = "🌤️"; // icon mặt trời có mây
        } else {
            timeOfDay = "Buổi tối";
            timeIcon = "🌙"; // icon mặt trăng
        }

        const formattedHours = String(hours).padStart(2, '0');
        const dateTimeString = `🕐 ${formattedHours}:${minutes} - ${day}/${month}/${year}<br>${timeIcon} ${timeOfDay}`;
        
        const datetimeElement = document.getElementById('datetime');
        if (datetimeElement) {
            datetimeElement.innerHTML = dateTimeString;
        }
    }

    // Initialize datetime and update every second
    updateDateTime();
    setInterval(updateDateTime, 1000);
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

// Particles initialization
new JParticles.particle('#particles', {
    color: ['white', '#dee0e0'],
    proximity: 120,
    range: 150,
    parallax: true
});
