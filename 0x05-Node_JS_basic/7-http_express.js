const express = require('express');
const fs = require('fs');

const countStudents = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const studentGroups = {};
    let totalStudents = 0;

    for (let i = 1; i < lines.length; i += 1) {
      const [firstname, , , field] = lines[i]
        .split(',')
        .map((value) => value.trim());
      if (!studentGroups[field]) {
        studentGroups[field] = [];
      }
      studentGroups[field].push(firstname);
      totalStudents += 1;
    }

    let result = `Number of students: ${totalStudents}\n`;
    for (const [field, students] of Object.entries(studentGroups)) {
      result += `Number of students in ${field}: ${students.length
        }. List: ${students.join(', ')}\n`;
    }
    resolve(result.trim());
  });
});

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const databasePath = process.argv[2];
  countStudents(databasePath)
    .then((data) => {
      res.set('Content-Type', 'text/plain');
      res.send(`This is the list of our students\n${data}`);
    })
    .catch((err) => {
      res.status(500).set('Content-Type', 'text/plain');
      res.send(`This is the list of our students\n${err.message}`);
    });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

module.exports = app;
