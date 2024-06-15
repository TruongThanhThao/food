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
        tenInput.value = '';
        sdtInput.value = '';
    }
});


let bigImg = document.querySelector('.big-img img');
function showImg(pic){
    bigImg.src = pic;
}



const stars = document.querySelectorAll('.star i');
const submitButton = document.getElementById('submit-button');
const cancelButton = document.getElementById('cancel-button');
const inputField = document.getElementById('input-field');

// Lưu trạng thái ban đầu của các ngôi sao
const initialStarStates = [];
stars.forEach(star => {
    initialStarStates.push(star.classList.contains('bx-star'));
});

stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        if (star.classList.contains('bx-star')) {
            star.classList.remove('bx-star');
            star.classList.add('bxs-star');
        } else {
            star.classList.remove('bxs-star');
            star.classList.add('bx-star');
        }
    });
});

// Xử lý sự kiện khi ấn nút Gửi
submitButton.addEventListener('click', () => {
    let selectedStars = 0;
    stars.forEach((star, index) => {
        if (star.classList.contains('bxs-star')) {
            selectedStars++;
        }
    });
    
    if (selectedStars === 0) {
        alert('Bạn chưa đánh giá!');
    } else {
        alert('Cảm ơn bạn đã đánh giá ' + selectedStars + ' sao!');
        // Reset trạng thái ban đầu của các ngôi sao
        stars.forEach((star, index) => {
            if (initialStarStates[index]) {
                star.classList.remove('bxs-star');
                star.classList.add('bx-star');
            } else {
                star.classList.remove('bx-star');
                star.classList.add('bxs-star');
            }
        });
        // Làm trống input
        inputField.value = '';
    }
});

// Xử lý sự kiện khi ấn nút Hủy bỏ
cancelButton.addEventListener('click', () => {
    // Reset trạng thái ban đầu của các ngôi sao
    stars.forEach((star, index) => {
        if (initialStarStates[index]) {
            star.classList.remove('bxs-star');
            star.classList.add('bx-star');
        } else {
            star.classList.remove('bx-star');
            star.classList.add('bxs-star');
        }
    });
    // Làm trống input
    inputField.value = '';
});




//thêm vào giỏ hàng
function addToCart(product) {
    let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    
    // Check if product already in cart
    let existingProduct = cart.find(item => item.name === product.name);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        product.quantity = 1;
        cart.push(product);
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Đã thêm sản phẩm vào giỏ hàng!');
}


//thêm vào sản phẩm yêu thích
let favoriteItems = JSON.parse(localStorage.getItem('favoriteItems')) || [];

// Hàm thêm sản phẩm vào danh sách yêu thích
function addToLike(product) {
  // Kiểm tra xem sản phẩm đã có trong danh sách yêu thích hay chưa
  const existingProduct = favoriteItems.find(item => item.name === product.name);

  // Nếu sản phẩm chưa có trong danh sách, thêm vào
  if (!existingProduct) {
    favoriteItems.push(product);
    localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems));
    alert('Đã thêm ' + product.name + ' vào danh sách yêu thích!');

    // Thay đổi trạng thái của biểu tượng "heart-icon"
    const heartIcon = document.getElementById('heart-icon');
    heartIcon.classList.toggle('active'); // Thêm hoặc xóa lớp "active" cho biểu tượng
  } else {
    alert('Sản phẩm đã có trong danh sách yêu thích!');
  }
}




document.addEventListener("DOMContentLoaded", function() {
document.querySelector(".flex-box").classList.add("show");
});


