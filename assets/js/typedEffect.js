document.addEventListener("DOMContentLoaded", function () {
    var typed1 = new Typed('#indexMainBannerTitle', {
        strings: ['Hi, This is Yuti.'],
        typeSpeed: 80,
        loop: false,
        onComplete: function (self) {
            if (self.cursor) {
                self.cursor.style.display = 'none';
            }
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var typed2 = new Typed('#indexMainBannerSubtitle', {
        strings: ['I AM A WEB DESIGNER AND DEVELOPER.^1000 <br> SHARE YOUR IDEAS WITH ME AND WE CAN MAKE THEM COMING TRUE.'],
        typeSpeed: 40,
        loop: false,
        startDelay: 3000,
        showCursor: true,
    });
});
