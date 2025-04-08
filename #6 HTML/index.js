function openModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = "block";
    }
  }

  function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = "none";
    }
  }

  window.onclick = function(event) {
    var modals = document.getElementsByClassName('modal');
    for (var i = 0; i < modals.length; i++) {
      if (event.target == modals[i]) {
        modals[i].style.display = "none";
      }
    }
  }
  function openModal(modalId) {
var modal = document.getElementById(modalId);
if (modal) {
  modal.style.display = "block";
  setTimeout(() => modal.classList.add("show"), 10);
}
}

function closeModal(modalId) {
var modal = document.getElementById(modalId);
if (modal) {
  modal.classList.remove("show");
  setTimeout(() => modal.style.display = "none", 300);
}
}
document.getElementById("toggleDarkMode").addEventListener("click", function () {
document.body.classList.toggle("dark-mode");
});

const darkModeStyles = document.createElement("style");
darkModeStyles.innerHTML = `
.dark-mode {
  background: #000;
  color: #0ff;
}
`;
document.head.appendChild(darkModeStyles);
document.addEventListener("scroll", function() {
  let elements = document.querySelectorAll(".scroll-fade");
  let scrollPos = window.scrollY + window.innerHeight;

  elements.forEach(el => {
      if (el.offsetTop < scrollPos) {
          el.classList.add("visible");
      }
  });
});