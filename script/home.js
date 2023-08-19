// Slideshow - E07
//Lấy mảng chứa các ảnh
const imgArr = document.getElementsByClassName("slides");
// Biến i - index dùng để chỉ thứ tự các bức ảnh có trong mảng imgArr[]
let index = 0;
// Hàm chức năng chạy ảnh sau 5 giây
setInterval(nextImage, 4000);

/**
 * Hàm ẩn hoặc hiện ảnh
 * @param {*} index - thứ tự của ảnh trong mảng imgArr[]
 * @param {*} display - trạng thái của thuộc tính display
 */
function displayImage(index, display) {
    let img = imgArr[index];
    img.style.display = display;
}
displayImage(0, "block");

/** Hàm chạy slide kế tiếp
 * Ẩn ảnh hiện tại và cho xuất hiện ảnh tiếp theo
 */
function nextImage() {
    // Ẩn ảnh hiện tại và hiện ảnh tiếp theo phía sau
    displayImage(index, "none");
    index++;
    if (index == imgArr.length) index = 0; //Điều kiện lặp lại ảnh ban đầu
    // Hiện ảnh sau
    displayImage(index, "block");
}

/** Hàm chạy slide trước đó
 * Ẩn ảnh hiện tại và hiện ảnh tiếp theo phía trước
 */
function previousImage() {
    // Ẩn ảnh hiện tại
    displayImage(index, "none");
    index--;
    if (index < 0) index = imgArr.length - 1; //Điều kiện lặp lại ảnh cuối cùng
    // Hiện ảnh sau
    displayImage(index, "block");
}

// Gán thuộc tính onclick bằng 2 cách
let a = document.getElementsByTagName("a");
const a1 = a[0];
a1.onclick = previousImage;
const a2 = a[1];
a2.addEventListener("click", nextImage);
