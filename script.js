document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    var closeBtn = document.getElementsByClassName("close")[0];
    var images = document.querySelectorAll('.map-img');

    // Gán sự kiện click cho từng ảnh sơ đồ
    images.forEach(function (img) {
        img.addEventListener('click', function () {
            // Sử dụng 'flex' để kích hoạt tính năng căn giữa của CSS
            modal.style.display = "flex";
            modalImg.src = this.src; // Lấy nguồn ảnh hiện tại
            captionText.innerHTML = this.alt; // Lấy mô tả ảnh
        });
    });

    // Hàm đóng Modal
    function closeModal() {
        modal.style.display = "none";
    }

    // Sự kiện click nút đóng (X)
    closeBtn.onclick = closeModal;

    // Sự kiện click ra ngoài vùng ảnh để đóng modal
    window.onclick = function (event) {
        // Nếu click vào vùng đen (modal) mà không phải vào ảnh (img01)
        if (event.target == modal) {
            closeModal();
        }
    }
});