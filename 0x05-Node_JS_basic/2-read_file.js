const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n');
    const studentGroups = {};
    let totalStudents = 0;

    for (let i = 1; i < lines.length; i++) {
      const [firstname, , , field] = lines[i]
        .split(',')
        .map((value) => value.trim());

      if (!studentGroups[field]) {
        studentGroups[field] = [];
      }

      studentGroups[field].push(firstname);
      totalStudents++;
    }

    console.log(`Number of students: ${totalStudents}`);
    for (const [field, students] of Object.entries(studentGroups)) {
      console.log(
        `Number of students in ${field}: ${
          students.length
        }. List: ${students.join(', ')}`
      );
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
