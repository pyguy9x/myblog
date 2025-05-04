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
// -------------------------Hien thi album
$(document).ready(function() {
    if (typeof $.fn.justifiedGallery !== 'undefined') {
        $('.article-gallery').justifiedGallery({
            rowHeight: 120,
            margins: 5,
            lastRow: 'justify'
        });

        $('article .article-gallery').each(function() {
            $(this).justifiedGallery({
                rowHeight: 120,
                margins: 5,
                lastRow: 'justify'
            });
        });
    } else {
        console.error('Justified Gallery not loaded!');
    }

    $('article img').each(function() {
        var $img = $(this);
        var src = $img.attr('src');
        var alt = $img.attr('alt') || 'Ảnh bài viết';
        if (!$img.parent().is('a') || !$img.closest('.article-gallery').length) {
            $img.wrap(`<a class="gallery-item" href="${src}" data-fancybox="post" data-caption="${alt}"></a>`);
            if (!$img.closest('.article-gallery').length) {
                $img.closest('p').wrap('<div class="article-gallery"></div>');
            }
        }
    });

    $('.gallery-item').each(function() {
        console.log('Gallery title:', $(this).find('.gallery-title').text());
    });
	// Hiển thị tiêu đề trên mobile
    $('.gallery-item').on('click', function() {
    $(this).find('.gallery-title').toggleClass('visible');
});
    Fancybox.bind('[data-fancybox]', {
        closeButton: true,
        Thumbs: {
            autoStart: true
        }
    });
});