let products = [
  { id: 1, name: "Milk", count: 100 },
  { id: 3, name: "Butter", count: 100 },
  { id: 2, name: "Yakult", count: 100 },
];
// Thêm đối tượng có các thuộc tính tương tự các đối tượng có trong mảng “products”
let newProduct = {
  id: 4,
  name: "Yogurt",
  count: 100,
};
products.push(newProduct);
console.log(products);
// Xóa đối tượng có id là 2
let check = -1;
for (let i = 0; i < products.length; i++) {
  if (products[i].id == 2) {
    check = i;
  }
}
products.splice(check, 1);
console.log(products);
// Truy vấn đến đối tượng có id là 3, sau đó cập nhật lại giá trị count = 0
let flag = -1;
for (let i = 0; i < products.length; i++) {
  if (products[i].id == 3) {
    flag = i;
  }
}
products[flag].count = 0;
console.log(products);

// Cho từ khóa “Butter”. Kiểm tra từ khóa có trong mảng “products” hay không?
// Nếu Có in toàn bộ thông tin, nếu Không hiển thị thông báo “Không có dữ liệu bạn tìm kiếm”
let checkKeyword = -1;
for (let i = 0; i < products.length; i++) {
  if (products[i].name == "Bách") {
    checkKeyword = i;
  }
}

if (checkKeyword != -1) {
  console.log("Đã tìm thấy sản phẩm", products[checkKeyword].name);
} else {
  console.log("Không có dữ liệu bạn tìm kiếm");
}
