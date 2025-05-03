document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'dark';

    // Áp dụng theme từ localStorage
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateButtonIcon(currentTheme);

    // Xử lý sự kiện nhấn nút
    toggleButton.addEventListener('click', () => {
        const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateButtonIcon(newTheme);
    });

    // Cập nhật biểu tượng nút
    function updateButtonIcon(theme) {
        toggleButton.innerHTML = theme === 'dark' ? '<i class="fa fa-sun"></i>' : '<i class="fa fa-moon"></i>';
    }
});
// Hien thi album
$(document).ready(function() {
    $('.article-gallery').justifiedGallery({
        rowHeight: 120,
        margins: 5,
        lastRow: 'justify'
    });
});
// Zoom  ảnh khi click
$(document).ready(function() {
    // Khởi tạo Justified Gallery cho trang gallery
    $('.article-gallery').justifiedGallery({
        rowHeight: 150,
        margins: 5,
        lastRow: 'justify'
    });

    // Kích hoạt FancyBox cho mọi ảnh trong bài viết
    $('article img').each(function() {
        var $img = $(this);
        var src = $img.attr('src');
        var alt = $img.attr('alt') || 'Ảnh bài viết';
        
        // Kiểm tra nếu ảnh chưa được bọc trong thẻ <a>
        if (!$img.parent().is('a')) {
            // Xử lý cả ảnh local và URL
            var href = src.startsWith('http') ? src : '<%- url_for("' + src + '") %>';
            $img.wrap(`<a href="${src}" data-fancybox="post" data-caption="${alt}"></a>`);
        }
    });

    // Khởi tạo FancyBox
    Fancybox.bind('[data-fancybox]', {
        closeButton: true,
        // Tùy chỉnh thêm nếu cần
        Thumbs: {
            autoStart: true // Hiển thị thumbnail khi có nhiều ảnh
        }
    });
});