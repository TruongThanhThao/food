function loadCart() {
    let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    let cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    let total = 0;

    cart.forEach(item => {
        let cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" style="width: 70px; height: 70px; object-fit: cover;">
            <span>${item.name}</span>
            <span>Giá: ${item.price} VNĐ</span>
            <span>Số lượng: ${item.quantity}</span>
        `;
        cartItems.appendChild(cartItem);

        total += item.price * item.quantity;
    });

    document.getElementById('cart-total').innerText = `Tổng tiền: ${total} VNĐ`;
}

window.onload = loadCart;




//xóa tất cả sản phẩm trong giỏ hàng
function clearCart() {
    localStorage.removeItem('cart');
    loadCart();
    alert('Đã xóa tất cả sản phẩm trong giỏ hàng!');
}



//chuyển đến trang thanh toán
function gotoCheckout() {
    window.location.href = 'checkout.html';
}
