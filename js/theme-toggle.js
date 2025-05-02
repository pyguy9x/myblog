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