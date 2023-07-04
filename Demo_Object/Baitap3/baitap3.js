let student = {
  id: 1,
  name: "Nguyễn Văn A",
  gender: "Male",
  age: 20,
  mark: 8,
};

let newStudent = {
  id: 2,
  name: "Nguyễn Thị B",
  gender: "Female",
  age: 30,
  mark: 9,
};

let students = [];
students.push(student, newStudent);
let max = students[0].mark;
for (let i = 0; i < students.length; i++) {
  if (max < students[i].mark) {
    max = students[i];
  }
}
console.log(`Tên sinh viên có điểm trung bình cao nhất:${max.name}`);
