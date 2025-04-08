document.addEventListener("DOMContentLoaded", function () {
    // Navigatsiya tugmalariga 'active' klassini qo'shish
    const navLinks = document.querySelectorAll(".nav-links a");
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navLinks.forEach(l => l.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // Prompt maydoniga yozilgan matnni saqlash
    const promptInput = document.querySelector(".prompt-sec input");
    if (promptInput) {
        promptInput.addEventListener("input", function () {
            localStorage.setItem("userPrompt", this.value);
        });
        promptInput.value = localStorage.getItem("userPrompt") || "";
    }

    // Video play tugmasi bosilganda o'ynatish
    const videoBtn = document.querySelector(".video-sec .video button");
    if (videoBtn) {
        videoBtn.addEventListener("click", function () {
            const videoContainer = this.closest(".video");
            const videoImg = videoContainer.querySelector("img");
            
            // Video rasmi o‘rniga iframe qo‘shish
            const videoIframe = document.createElement("iframe");
            videoIframe.src = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1";
            videoIframe.width = "100%";
            videoIframe.height = "420px";
            videoIframe.style.borderRadius = "40px";
            videoIframe.allow = "autoplay";
            
            videoContainer.innerHTML = "";
            videoContainer.appendChild(videoIframe);
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.querySelector(".login a"); // Login tugmasi
    const modal = document.getElementById("loginModal"); // Modal oynasi
    const closeBtn = document.querySelector(".close"); // Yopish tugmasi

    // Login tugmasi bosilganda modalni ochish
    loginBtn.addEventListener("click", function (event) {
        event.preventDefault();
        modal.style.display = "flex";
    });

    // Modalni yopish
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Modal tashqarisini bosganda yopish
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Formani yuborish
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Login muvaffaqiyatli!"); // Bu joyda haqiqiy login tekshiruvi qo‘shish mumkin
        modal.style.display = "none";
    });
});

