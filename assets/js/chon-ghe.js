// Lấy bảng ghế
const seatMap = document.getElementById('seatMap');

// Chọn tất cả các ô ghế có thể chọn (loại trừ ghế đã đặt)
const seats = seatMap.querySelectorAll('td:not(.booked)');

// Thêm sự kiện click cho từng ô ghế
seats.forEach(seat => {
  seat.addEventListener('click', function() {
    // Thêm class "selected" nếu chưa có, giữ nguyên nếu đã có
    if (!this.classList.contains('selected')) {
      this.classList.add('selected');
    }
  });
});
