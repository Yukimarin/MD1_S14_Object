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
console.log(`Tên sinh viên: ${students[1].name}`);
console.log(`Giới tính sinh viên: ${students[1].gender}`);
console.log(`Tuổi sinh viên: ${students[1].age}`);
console.log(`Điểm trung bình sinh viên: ${students[1].mark}`);
