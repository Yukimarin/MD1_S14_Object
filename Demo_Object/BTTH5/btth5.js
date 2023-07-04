let stores = [
  { id: 1, name: "Milk", count: 100 },
  { id: 2, name: "Yakult", count: 100 },
  { id: 3, name: "Butter", count: 100 },
];
let carts = [];
function renderCart() {
  console.log("Giỏ hàng của bạn hiện tại gồm:");
  for (let i = 0; i < carts.length; i++) {
    console.log(`${i + 1}.${carts[i].name}--${carts[i].count}`);
  }
}
function renderStores() {
  console.log("Cửa hàng hiện tại gồm:");
  for (let i = 0; i < stores.length; i++) {
    console.log(`${i + 1}.${stores[i].name}--${stores[i].count}`);
  }
}
let state = true;

while (state) {
  let input = prompt("Nhập vào C/R/U/D/E").toLowerCase();

  if (input == "c") {
    let inputProduct = prompt("Nhập vào sản phẩm muốn mua");
    let checkStore = -1;
    for (let i = 0; i < stores.length; i++) {
      if (stores[i].name == inputProduct) {
        checkStore = i;
      }
    }
    if (checkStore == -1) {
      console.log("Không tìm thấy sản phẩm bạn cần");
    } else {
      // Giảm count đi 1 đơn vi
      stores[checkStore].count--;
      let newCart = {
        id: 1,
        name: stores[checkStore].name,
        count: 1,
      };
      carts.push(newCart);
    }
    renderCart();
  } else if (input == "r") {
    renderCart();
  } else if (input == "u") {
    let updateIndex = Number(
      prompt("Nhập vào vị trí sản phẩm muốn update trong giỏ hàng")
    );
    let updateCountCart = Number(prompt("Nhập vào số lượng sản phẩm muốn mua"));
    carts[updateIndex - 1].count =
      carts[updateIndex - 1].count + updateCountCart;
    stores[updateIndex - 1].count =
      stores[updateIndex - 1].count - updateCountCart;
    renderStores();
    renderCart();
  } else if (input == "d") {
    let deleteIndex = Number(
      prompt("Nhập vào vị trí sản phẩm muốn xóa trong giỏ hàng")
    );
    carts.splice(deleteIndex - 1, 1);
    renderCart();
  } else if (input == "e") {
    state = false;
    console.log("Cảm ơn bạn đã đến với Rikkei Stores");
  }
}
