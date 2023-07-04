let courses = [
  { id: 1, name: "HTML", complete: false },
  { id: 2, name: "CSS", complete: false },
  { id: 3, name: "Basic of Javascript", complete: false },
  { id: 4, name: "Node package Manager", complete: false },
  { id: 5, name: "Git", complete: false },
];
// In ra dữ liêu
function render() {
  for (let i = 0; i < courses.length; i++) {
    console.log(
      `${i + 1}.${courses[i].name} \n Complete:${courses[i].complete}`
    );
  }
}

// render();

// Làm CRUDE
let state = true;

while (state) {
  let input = prompt("Nhập vào C/R/U/D/E").toLowerCase();
  if (input == "c") {
    let inputCourse = prompt("Nhập vào tên khóa học mới");
    let newCourse = {
      id: Math.floor(Math.random() * 10000),
      name: inputCourse,
      complete: true,
    };
    courses.push(newCourse);
    render();
  } else if (input == "r") {
    render();
  } else if (input == "u") {
    let updateIndex = Number(prompt("Nhập vào vị trí khóa học muốn update"));
    courses[updateIndex - 1].complete = !courses[updateIndex - 1].complete;
    render();
  } else if (input == "d") {
    let deleteIndex = Number(prompt("Nhập vào vị trí khóa học muốn xóa"));
    courses.splice(deleteIndex - 1, 1);
    render();
  } else if ((input = "e")) {
    state = false;
    render();
    console.log("Cảm ơn bạn đã đến với Rikkei Academy");
  }
}
