document.addEventListener("DOMContentLoaded", function () {

    // Thông tin sản phẩm từ giỏ hàng
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const productInfoContainer = document.getElementById("productInfoContainer"); //Hiển thị thông tin sp
    const totalAmountElement = document.getElementById("totalAmount");
    // Hiển thị sản phẩm
    let totalAmount = 0;
    cart.forEach(item => {
        const productItem = document.createElement("div");
        productItem.innerHTML = `<img src="${item.image}" alt="${item.name}" class="product-image" style="width: 150px; height: 150px; object-fit: cover;">
                                 <p style="padding:8px 0 8px 0"><strong></strong> ${item.name}</p>
                                 <p style="padding-bottom:8px"><strong></strong> Giá: ${item.price.toLocaleString()} VNĐ</p>
                                 <p style="padding-bottom:8px"><strong></strong> Số lượng: ${item.quantity}</p>
                                 <hr>`;
        /*Sử dụng thuộc tính innerHTML để gán nội dung HTML cho phần tử div. 
        Trong trường hợp này, một chuỗi HTML được tạo để hiển thị hình ảnh, tên, giá và số lượng sản phẩm,
         cùng với một đường ngăn cách giữa các sản phẩm (<hr>).*/
        productInfoContainer.appendChild(productItem); //Thêm phần tử div này vào productInfoContainer
        // Tính tổng tiền
        totalAmount += item.price * item.quantity;
    });
    // Hiển thị tổng tiền
    totalAmountElement.textContent = `Tổng tiền: ${totalAmount.toLocaleString()} VNĐ`;
});
function completeCheckout() {
    const form = document.getElementById('checkoutForm');
    const customerName = document.getElementById('customerName');
    const customerPhone = document.getElementById('customerPhone');
    const customerAddress = document.getElementById('customerAddress');

    if (!customerName.value.trim()) {
        alert('Vui lòng nhập tên người nhận');
        customerName.focus();
        return;
    }

    if (!customerPhone.value.trim()) {
        alert('Vui lòng nhập số điện thoại');
        customerPhone.focus();
        return;
    }

    if (!customerAddress.value.trim()) {
        alert('Vui lòng nhập địa chỉ nhận hàng');
        customerAddress.focus();
        return;
    }


    localStorage.removeItem("cart");
    //Xác nhận thanh toán
    alert("Đặt hàng thành công!");
    window.location.href = "../html/trangchu.html";
}

