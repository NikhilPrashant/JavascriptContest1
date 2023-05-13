/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  const studentsWithMarksOver50 = arr.filter(arr => arr.marks > 50);
  studentsWithMarksOver50.map(arr => console.log(arr));
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach(arr => {
    if (arr.marks > 50) {
      console.log(arr);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  const newStudent = { id: 4, name: "susan", age: "20", marks: 45 };
  arr.push(newStudent);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  const passedStudents = arr.filter(e => e.marks >= 50);
  arr.length = 0;
  passedStudents.forEach(e => arr.push(e));
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  const newStudents = [
    { id: 5, name: "alice", age: "21", marks: 75 },
    { id: 6, name: "bob", age: "22", marks: 90 },
    { id: 7, name: "emma", age: "19", marks: 60 }
  ];
  arr.push(...newStudents);
  console.log(arr);
}
