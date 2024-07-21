import express from 'express';
import router from './routes/index.js';

const app = express();
const port = 1245;

app.get('/', router);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

export default app;