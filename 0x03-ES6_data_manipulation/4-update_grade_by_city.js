export default function updateStudentGradeByCity(students, city, newGrade) {
  // newGrade = [{ studentId: 31, grade: 78 }, { studentId: 31, grade: 78 }];
  students = students.filter((student) => student.location === city);

  return students.map((student) => {
    if (newGrade.map((x) => x.studentId).includes(student.id)) {
      student.grade = newGrade.find((x) => x.studentId === student.id).grade;
    } else {
      student.grade = 'N/A';
    }
    return student;
  });
}
