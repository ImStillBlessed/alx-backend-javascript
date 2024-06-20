const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const studentGroups = {};
    let totalStudents = 0;

    for (let i = 1; i < lines.length; i += 1) {
      const [firstname, , , field] = lines[i].split(',');

      if (!studentGroups[field]) {
        studentGroups[field] = [];
      }

      studentGroups[field].push(firstname);
      totalStudents += 1;
    }

    console.log(`Number of students: ${totalStudents}`);
    for (const [field, students] of Object.entries(studentGroups)) {
      console.log(
        `Number of students in ${field}: ${students.length
        }. List: ${students.join(', ')}`,
      );
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
