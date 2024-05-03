interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

let student1: Student;
let student2: Student;
let studentsList: Array<Student> = [student1, student2];

console.log(student1);
console.log(student2);
// Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table

const table = document.createElement('table');
document.body.appendChild(table);

// Each row should contain the first name of the student and the location

studentsList.forEach((student) => {
  const row = table.insertRow();
  row.insertCell().textContent = student.firstName;
  row.insertCell().textContent = student.location;
});
