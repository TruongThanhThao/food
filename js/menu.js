document.getElementById('searchIcon').addEventListener('click', function() {
    const keyword = document.getElementById('searchKeyword').value.trim();
    
    if (!keyword) {
        alert('Vui lòng nhập từ khóa tìm kiếm!');
    }
});
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".annhe").classList.add("show");
});
//gỏi
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
  
    var targets = document.querySelectorAll('.goi');
    targets.forEach(function(target) {
        observer.observe(target);
    });
  });

//mâm cơm
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
  
    var targets = document.querySelectorAll('.mamcom');
    targets.forEach(function(target) {
        observer.observe(target);
    });
  });

//mâm cơm
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
  
    var targets = document.querySelectorAll('.douong');
    targets.forEach(function(target) {
        observer.observe(target);
    });
  });
  

//phở
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
  
    var targets = document.querySelectorAll('.pho');
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