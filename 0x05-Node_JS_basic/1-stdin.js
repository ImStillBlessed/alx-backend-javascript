const displayMessage = require('./0-console');

displayMessage('Welcome to Holberton School, what is your name?\n');
process.stdin.on('readable', () => {
  const name = process.stdin.read();
  if (name !== null) {
    displayMessage(`Your name is: ${name}`);
  }
});

process.stdin.on('end', () => {
  displayMessage('This important software is now closing\n');
});
