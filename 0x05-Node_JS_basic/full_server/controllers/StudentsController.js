import readDatabase from '../utils.js';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const filePath = process.argv[2];
      const studentGroups = await readDatabase(filePath);

      let totalStudents = 0;
      let responseText = 'This is the list of our students\n';

      const fields = Object.keys(studentGroups).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

      for (const field of fields) {
        const students = studentGroups[field];
        totalStudents += students.length;
        responseText += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
      }
      responseText = `Number of students: ${totalStudents}\n` + responseText;

      res.status(200).send(responseText.trim());
    } catch (error) {
      res.status(500).send(`This is the list of our students\n${error.message}`);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    try {
      const { major } = req.params;
      if (major !== 'CS' && major !== 'SWE') {
        res.status(500).send('Major parameter must be CS or SWE');
        return;
      }

      const filePath = process.argv[2];
      const studentGroups = await readDatabase(filePath);
      const students = studentGroups[major];

      if (!students) {
        res.status(200).send(`List:`);
        return;
      }

      res.status(200).send(`List: ${students.join(', ')}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
