import fs from 'fs';

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
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

      let result = `Number of students: ${totalStudents}\n`;
      for (const [field, students] of Object.entries(studentGroups)) {
        result += `Number of students in ${field}: ${
          students.length
        }. List: ${students.join(', ')}\n`;
      }
      resolve(result.trim());
    });
  });
}
