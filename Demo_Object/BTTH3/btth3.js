class User {
  constructor(id, name, email, address, phone) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.address = address;
    this.phone = phone;
    this.role = 0;
  }
}

class Admin extends User {
  constructor(id, name, email, address, phone) {
    super(id, name, email, address, phone);
    this.role = 1;
  }
}
let users = [];

users.push(new User(1, "Nguyễn Văn A", "A@gmail.com", "Địa chỉ A", "0123"));
users.push(new User(2, "Nguyễn Văn B", "B@gmail.com", "Địa chỉ B", "01234"));
users.push(new User(3, "Nguyễn Văn C", "C@gmail.com", "Địa chỉ C", "012345"));
users.push(new Admin(4, "Nguyễn Văn D", "D@gmail.com", "Địa chỉ D", "0123456"));

console.log(users);

// Xóa người dùng thông qua tên của họ (không xóa được admin)
function deleteUser(name) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].name === name && users[i].role != 1) {
      users.splice(i, 1);
    }
  }
  console.log("Không thể xóa người dùng này");
}

deleteUser("Nguyễn Văn D");
console.log(users);

// Sửa thông tin người dùng thông qua id (không sửa được thông tin admin)
function editUser(id, name, email, address, phone) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === id && users[i].role != 1) {
      users[i].name = name;
      users[i].email = email;
      users[i].address = address;
      users[i].phone = phone;
    }
  }
  console.log("Không thể thay đổi thông tin người dùng này");
}

editUser(1, "Bach", "Bach", "Bach", "0");
console.log(users);

// Thêm 1 nick admin vào mảng danh sách người dùng.
// Sau đó tìm kiếm toàn bộ thông tin các tài khoản là admin và in ra
users.push(
  new Admin(5, "Nguyễn Văn E", "E@gmail.com", "Địa chỉ E", "01234567")
);

function searchAdmin(role) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].role === role) {
      console.log(users[i]);
    }
  }
}

searchAdmin(1);
