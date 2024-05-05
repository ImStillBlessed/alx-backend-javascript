export default function updateStudentGradeByCity(students, city, newGrade) {
  filteredStudents = students.filter((student) => student.location === city);

  return filteredStudents.map((student) => {
    const updateGrade = newGrade.find((x) => x.studentId === student.id);

    student.grade = updateGrade ? updateGrade.grade : 'N/A';
    return student;
  });
}
