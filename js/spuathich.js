document.addEventListener("DOMContentLoaded", function() {
    // Lấy danh sách sản phẩm yêu thích từ localStorage
    let favoriteItems = JSON.parse(localStorage.getItem('favoriteItems')) || [];

    // Hiển thị danh sách sản phẩm yêu thích
    const cartItems = document.getElementById('cart-items');
    displayFavoriteItems(favoriteItems);

    function displayFavoriteItems(items) {
        cartItems.innerHTML = ''; // Xóa danh sách hiện tại

        items.forEach(function(item) {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');

            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}" style="width: 70px; height: 70px; object-fit: cover;">
                <span>${item.name}</span>
                <span>Giá: ${item.price} VNĐ</span>
                <button class="remove-btn" onclick="removeFromFavorite('${item.name}')">Xóa</button>
            `;
            cartItems.appendChild(cartItem);
        });
    }

    // Xóa sản phẩm khỏi danh sách yêu thích
    window.removeFromFavorite = function(productName) { // Đặt hàm vào global scope
        favoriteItems = favoriteItems.filter(item => item.name !== productName);
        localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems));
        displayFavoriteItems(favoriteItems); // Hiển thị lại danh sách sau khi xóa
    }

    // Xóa tất cả sản phẩm khỏi danh sách yêu thích
    window.clearCart = function() { // Đặt hàm vào global scope
        favoriteItems = [];
        localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems));
        displayFavoriteItems(favoriteItems); // Hiển thị lại danh sách sau khi xóa
    }
});
