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
$(function () {
  $(".typed").typed({
    strings: [
      "Hi, tôi tên là Tazuki :D",
      "Tôi thích bing chilling",
      "Tôi thích chơi Minecraft",
      "Máy chủ tôi thường chơi là LàngBăngVN",
      "Tôi đến từ Việt Nam thân yêu💖",
      "Tôi là 1 wibu , vì vậy tui love anime",
      "TazukiMC#0999 is my Discord",
      "My store on Discord: dsc.gg/bstore",
    ],
    typeSpeed: 135,
    loop: true,
    cursorChar: "|",
  });
});
