const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const studentGroups = {};
      let totalStudents = 0;

      for (let i = 1; i < lines.length; i++) {
        const [firstname, , , field] = lines[i].split(',');

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

      resolve();
    });
  });
}

module.exports = countStudents;
