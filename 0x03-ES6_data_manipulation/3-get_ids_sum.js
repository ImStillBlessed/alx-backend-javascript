export default function getStudentIdsSum(students) {
  return students.reduce((prev, current) => prev + current.id, 0);
}
