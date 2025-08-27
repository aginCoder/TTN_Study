const galleryImages = [{
        src: "./img/pic/pic1.jpg",
        caption: "Bánh thì ngọt, nhưng tụi này mặn lắm! 😜"
    },
    {
        src: "./img/pic/pic2.jpg",
        caption: "Chụp tấm hình tưởng ai cũng dễ thương… ai ngờ có vài nhân tố phá game!📸🤣"
    },
    {
        src: "./img/pic/pic3.jpg",
        caption: "👉 Còn thiếu cái micro là lên sân khấu phát biểu luôn rồi!"
    },
    {
        src: "./img/pic/pic4.jpg",
        caption: "Cặp phụ nhưng lại chính hơn cặp chính nữa!!!"
    },
    {
        src: "./img/pic/pic5.jpg",
        caption: "👉 Đi tình nguyện mà nhìn như đi casting cho phim “Tarzan bản làng” 😄"
    },
    {
        src: "./img/pic/pic6.jpg",
        caption: "🪖 Đoàn trưởng và dàn vệ sĩ nhí– ai động vô là bị cả xóm dí!"
    },
    {
        src: "./img/pic/pic7.jpg",
        caption: "Team thiện nguyện phiên bản Ti Ti En🌾"
    },
    {
        src: "./img/pic/pic8.jpg",
        caption: "nhìn như sắp debut nhóm nhạc K-Pop, chỉ thiếu cái lightstick thôi. 🎤✨"
    },
    {
        src: "./img/pic/pic9.jpg",
        caption: "Anh em xã hội phiên bản TTN, đụng là chạm"
    },
    {
        src: "./img/pic/pic10.jpg",
        caption: "Dàn nhân vật chính trong phim thanh xuân vườn trường. 🎬🎓"
    },
    {
        src: "./img/pic/pic12.jpg",
        caption: "đại ca trường học và đám đàn em bất hảo🎬👊"
    },
    {
        src: "./img/pic/pic13.jpg",
        caption: "Ngã tư đường đời, chọn ai thì chọn chứ đừng chọn... người yêu cũ🚦💔😂"
    },
    {
        src: "./img/pic/pic14.jpg",
        caption: "Team thiếu ngủ nhưng không thiếu muối 🧂"
    },
    {
        src: "./img/pic/pic15.jpg",
        caption: "Gương kia ngự ở trên tường, cho hỏi ai là người tấu hài nhất phường hôm nay? 😂"
    },
    {
        src: "./img/pic/pic16.jpg",
        caption: "Đi phát quà, nhưng ai ngờ phát luôn combo nhan sắc đỉnh cao + sự lầy lội level max 🛍️"
    },
    {
        src: "./img/pic/pic17.jpg",
        caption: "Hội những người mặc đồ đen để che giấu nội tâm... hỗn loạn 😈 Nhưng lại bị lộ vì tỏa sáng quá mức."
    },
    {
        src: "./img/pic/pic18.jpg",
        caption: "Nhây hài bựa gì cũng có rồi, lâu lâu làm tấm ngọt ngào tí chứ"
    }
];



const imagesPerPage = 6;
let currentGalleryPage = 1;

function renderGallery(page) {
    const start = (page - 1) * imagesPerPage;
    const end = start + imagesPerPage;
    const imagesToShow = galleryImages.slice(start, end);

    const grid = document.getElementById('gallery-grid');
    grid.innerHTML = imagesToShow.map(img => `
        <div class="gallery-card" data-aos="zoom-in">
            <img src="${img.src}" class="gallery-img gallery-item" alt="Hoạt động CLB">
            <div class="gallery-caption">${img.caption}</div>
        </div>
    `).join('');

    // Gắn lại sự kiện modal cho ảnh
    setTimeout(() => {
        document.querySelectorAll('.gallery-item').forEach(item => {
            item.onclick = function() {
                document.getElementById('galleryModalImg').src = this.src;
                new bootstrap.Modal(document.getElementById('galleryModal')).show();
            };
        });
    }, 0);
}

function renderGalleryPagination() {
    const totalPages = Math.ceil(galleryImages.length / imagesPerPage);
    const pag = document.getElementById('gallery-pagination');
    let html = '';

    html += `<button class="btn btn-outline-primary mx-1" ${currentGalleryPage === 1 ? 'disabled' : ''} onclick="changeGalleryPage(${currentGalleryPage - 1})">&laquo;</button>`;
    for (let i = 1; i <= totalPages; i++) {
        html += `<button class="btn btn${i === currentGalleryPage ? '' : '-outline'}-primary mx-1" onclick="changeGalleryPage(${i})">${i}</button>`;
    }
    html += `<button class="btn btn-outline-primary mx-1" ${currentGalleryPage === totalPages ? 'disabled' : ''} onclick="changeGalleryPage(${currentGalleryPage + 1})">&raquo;</button>`;

    pag.innerHTML = html;
}

window.changeGalleryPage = function(page) {
    const totalPages = Math.ceil(galleryImages.length / imagesPerPage);
    if (page < 1 || page > totalPages) return;
    currentGalleryPage = page;
    renderGallery(currentGalleryPage);
    renderGalleryPagination();
};

document.addEventListener('DOMContentLoaded', function() {
    renderGallery(currentGalleryPage);
    renderGalleryPagination();
});