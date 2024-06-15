//banner
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".banner").classList.add("show");
});
//thương hiệu
document.addEventListener("DOMContentLoaded", function() {
  var threshold = 0.5; // Ngưỡng hiển thị
  var options = {
      root: null,
      rootMargin: "0px",
      threshold: threshold
  };

  var observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
          if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
              entry.target.classList.add("show");
          }
      });
  }, options);

  var targets = document.querySelectorAll('.spthuonghieu');
  targets.forEach(function(target) {
      observer.observe(target);
  });
});

//lý do chọn
document.addEventListener("DOMContentLoaded", function() {
  var threshold = 0.5; // Ngưỡng hiển thị
  var options = {
      root: null,
      rootMargin: "0px",
      threshold: threshold
  };

  var observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
          if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
              entry.target.classList.add("show");
          }
      });
  }, options);

  var targets = document.querySelectorAll('.lydochon');
  targets.forEach(function(target) {
      observer.observe(target);
  });
});

//đánh giá
document.addEventListener("DOMContentLoaded", function() {
  var threshold = 0.5; // Ngưỡng hiển thị
  var options = {
      root: null,
      rootMargin: "0px",
      threshold: threshold
  };

  var observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
          if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
              entry.target.classList.add("show");
          }
      });
  }, options);

  var targets = document.querySelectorAll('.testimonial');
  targets.forEach(function(target) {
      observer.observe(target);
  });
});


//dịch vụ
document.addEventListener("DOMContentLoaded", function() {
  var threshold = 0.5; // Ngưỡng hiển thị
  var options = {
      root: null,
      rootMargin: "0px",
      threshold: threshold
  };

  var observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
          if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
              entry.target.classList.add("show");
          }
      });
  }, options);

  var targets = document.querySelectorAll('.service');
  targets.forEach(function(target) {
      observer.observe(target);
  });
});


//chân trang
document.addEventListener("DOMContentLoaded", function() {
  var threshold = 0.5; // Ngưỡng hiển thị
  var options = {
      root: null,
      rootMargin: "0px",
      threshold: threshold
  };

  var observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
          if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
              entry.target.classList.add("show");
          }
      });
  }, options);

  var targets = document.querySelectorAll('.footer');
  targets.forEach(function(target) {
      observer.observe(target);
  });
});







//gửi thông tin chân trang

const btnGui = document.getElementById('btngui');
const tenInput = document.querySelector('.form-container input[type="text"]'); // Assuming both inputs are within the form-container
const sdtInput = document.querySelector('.form-container input[type="text"] + input[type="text"]'); // Assuming phone number input comes after name input

btnGui.addEventListener('click', function() {
  const ten = tenInput.value.trim();
  const sdt = sdtInput.value.trim();

  if (ten === '' || sdt === '') {
    alert('Vui lòng nhập đầy đủ tên và số điện thoại!');
  } else {
    alert('Cảm ơn bạn đã quan tâm! Chúng tôi sẽ liên hệ với bạn sớm nhất có thể.');
    // Optionally, clear the input fields here
    tenInput.value = '';
    sdtInput.value = '';
  }
});
//Đánh giá
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



// Hiển thị nút khi cuộn xuống 20px từ đỉnh trang
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    const backToTopBtn = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "flex";
    } else {
        backToTopBtn.style.display = "none";
    }
}

// Cuộn lên đầu trang khi nhấn nút
document.getElementById("backToTopBtn").onclick = function() {
    scrollToTop();
};

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
