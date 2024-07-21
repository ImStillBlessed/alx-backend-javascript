const http = require('http');
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
      result += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
    }
    resolve(result.trim());
  });
});

const app = http.createServer((req, res) => {
  const { url } = req;
  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    countStudents(process.argv[2])
      .then((data) => {
        res.end(`This is the list of our students\n${data}`);
      })
      .catch((err) => {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(`This is the list of our students\n${err.message}`);
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

app.listen(1245);

module.exports = app;
