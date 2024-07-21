import fs from 'fs/promises';

export const readDatabase = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    const studentGroups = {};
    for (let i = 1; i < lines.length; i += 1) {
      const [firstname, , , field] = lines[i].split(',').map((value) => value.trim());
      if (!studentGroups[field]) {
        studentGroups[field] = [];
      }
      studentGroups[field].push(firstname);
    }
    return studentGroups;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};
