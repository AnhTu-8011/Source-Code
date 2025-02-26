

// Lấy phần tử cần thiết
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const closeModal = document.getElementById('closeModal');


// Mở modal khi bấm nút "Đăng Nhập"
loginBtn.addEventListener('click', function(e) {
  e.preventDefault(); // Ngăn hành động mặc định của liên kết
  loginModal.classList.add('active');
});

// Đóng modal khi bấm nút "x"
closeModal.addEventListener('click', function() {
  loginModal.classList.remove('active');
});

// Đóng modal nếu bấm ngoài vùng form
window.addEventListener('click', function(e) {
  if (e.target === loginModal) {
    loginModal.classList.remove('active');
  }
});
// Lấy phần tử nút và modal đăng ký
const registerBtn = document.getElementById('registerBtn');
const registerModal = document.getElementById('registerModal');
const closeRegister = document.getElementById('closeRegister');

// Khi bấm vào nút "Đăng Ký" thì hiển thị modal đăng ký
registerBtn.addEventListener('click', function(e) {
  e.preventDefault();  // Ngăn hành động mặc định của liên kết
  registerModal.classList.add('active'); // Thêm class active để hiển thị modal
});

// Đóng modal khi bấm nút "x"
closeRegister.addEventListener('click', function() {
  registerModal.classList.remove('active');
});

// Đóng modal khi bấm bên ngoài vùng modal-container
window.addEventListener('click', function(e) {
  if (e.target === registerModal) {
    registerModal.classList.remove('active');
  }
});
// Toggle mật khẩu cho đăng nhập
const togglePasswordLogin = document.getElementById('togglePasswordLogin');
const passwordInput = document.getElementById('password');
togglePasswordLogin.addEventListener('click', function() {
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);
  this.textContent = type === 'password' ? 'Hiện mật khẩu' : 'Ẩn mật khẩu';
});

// Toggle mật khẩu cho đăng ký
const togglePasswordRegister = document.getElementById('togglePasswordRegister');
const regPasswordInput = document.getElementById('regPassword');
togglePasswordRegister.addEventListener('click', function() {
  const type = regPasswordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  regPasswordInput.setAttribute('type', type);
  this.textContent = type === 'password' ? 'Hiện mật khẩu' : 'Ẩn mật khẩu';
});

// phần chuyển ảnh
let slideIndex = 0;
    const slides = document.querySelectorAll('.slides');

    // Hiển thị slide theo chỉ số hiện tại
    function showSlide(index) {
      slides.forEach(slide => slide.classList.remove('active'));
      slides[index].classList.add('active');
    }

    // Thay đổi slide theo bước nhảy n (dương: sang phải, âm: sang trái)
    function plusSlides(n) {
      slideIndex = (slideIndex + n + slides.length) % slides.length;
      showSlide(slideIndex);
      resetInterval();
    }

    // Tự động chuyển slide mỗi 3 giây
    function autoSlide() {
      plusSlides(1);
    }
    
    // Thiết lập interval và reset khi chuyển thủ công
    let slideInterval = setInterval(autoSlide, 3000);
    function resetInterval() {
      clearInterval(slideInterval);
      slideInterval = setInterval(autoSlide, 3000);
    }

    // Hiển thị slide đầu tiên
    showSlide(slideIndex);


    // nút di chuyển posterposter
  // Lấy các phần tử cần thiết từ DOM
  const leftBtn = document.getElementById('leftBtn');
  const rightBtn = document.getElementById('rightBtn');
  const movieRow = document.querySelector('.movie-row');

  // Khi bấm nút trái, cuộn container sang trái 420px
  leftBtn.addEventListener('click', () => {
    movieRow.scrollBy({ left: -420, behavior: 'smooth' });
  });

  // Khi bấm nút phải, cuộn container sang phải 420px
  rightBtn.addEventListener('click', () => {
    movieRow.scrollBy({ left: 420, behavior: 'smooth' });
  });


   // Khi bấm vào nút, chuyển sang trang "lich-chieu.html"
  document.getElementById('btnShowSchedule').addEventListener('click', function() {
    window.location.href = 'lich-chieu.html';
  });
