// Lấy các phần tử cần thiết
const trailerBtn = document.getElementById('trailerBtn');
const movieContent = document.getElementById('movieContent');
const trailerContent = document.getElementById('trailerContent');
const backToContent = document.getElementById('backToContent');

// Khi nhấn nút Trailer, ẩn nội dung phim và hiện khối trailer
trailerBtn.addEventListener('click', function() {
  movieContent.style.display = 'none';
  trailerContent.style.display = 'block';
});

// Nếu có nút "Quay lại", khi nhấn thì quay lại hiển thị nội dung phim
backToContent.addEventListener('click', function() {
  trailerContent.style.display = 'none';
  movieContent.style.display = 'block';
});

