document.addEventListener('DOMContentLoaded', () => {
  console.log("Script loaded");

  // Tìm các khối code highlight
  document.querySelectorAll('figure.highlight').forEach(block => {
    // Kiểm tra đã có nút copy chưa
    if (block.querySelector('.copy-btn')) return;

    // Tạo khung chứa nút
    const toolbar = document.createElement('div');
    toolbar.className = 'code-toolbar';

    // Tạo nút copy
    const button = document.createElement('button');
    button.className = 'copy-btn';
    button.innerText = '📋 Sao chép';

    toolbar.appendChild(button);
    block.insertBefore(toolbar, block.firstChild); // chèn trước <table>

    // Xử lý sao chép
    button.addEventListener('click', () => {
      // Lấy nội dung dòng code
      const codeLines = block.querySelectorAll('td.code .line');
      const text = Array.from(codeLines).map(line => line.innerText).join('\n');

      navigator.clipboard.writeText(text).then(() => {
        button.innerText = '✅ Đã sao chép';
        setTimeout(() => (button.innerText = '📋 Sao chép'), 1500);
      });
    });
  });
});
