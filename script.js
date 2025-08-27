AOS.init();

// Gallery modal
const galleryItems = document.querySelectorAll('.gallery-item');
const modalImg = document.getElementById('galleryModalImg');
const galleryModal = new bootstrap.Modal(document.getElementById('galleryModal'));

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        modalImg.src = item.src;
        galleryModal.show();
    });
});

// Header background khi scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var navbarCollapse = document.getElementById("navbarNav");

    window.addEventListener("scroll", function() {
        if (navbarCollapse.classList.contains("show")) {
            // Nếu menu đang mở thì đóng lại khi scroll
            var collapse = new bootstrap.Collapse(navbarCollapse, {
                toggle: false
            });
            collapse.hide();
        }
    });
});