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
  mark: 1,
};

let newStudent2 = {
  id: 3,
  name: "Nguyễn Xuân Bách",
  gender: "Male",
  age: 32,
  mark: 1,
};

let students = [];
students.push(student, newStudent, newStudent2);
let sum = 0;
let avg = 1;
for (let i = 0; i < students.length; i++) {
  sum = sum + students[i].mark;
  avg = sum / students.length;
}
console.log(avg);

if (avg > 7.5) {
  console.log("Lớp khá");
} else if (avg > 5 && avg <= 7.5) {
  console.log("Lớp trung bình");
} else {
  console.log("Lớp yếu");
}
