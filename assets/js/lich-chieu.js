// Lấy tất cả các phần tử .date-item
const dateItems = document.querySelectorAll('.date-item');

// Lắng nghe sự kiện click cho mỗi ô ngày
dateItems.forEach(item => {
  item.addEventListener('click', () => {
    // Xóa class active từ tất cả các ô ngày
    dateItems.forEach(el => el.classList.remove('active'));
    // Thêm class active cho ô ngày vừa được click
    item.classList.add('active');
  });
});
