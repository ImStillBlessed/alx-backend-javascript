const express = require('express');
const fs = require('fs');

const countStudents = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
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
};

const app = express();
const port = 1245;
const host = 'localhost';

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents('database.csv')
    .then((data) => {
      res.send(`This is the list of our students\n${data}`);
    })
    .catch((err) => {
      res.send(`This is the list of our students\n${err.message}`);
    });
});

app.listen(port, host);

module.exports = app;
