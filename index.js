import express from 'express';
import tasks from './tasks.js';
import cors from 'cors';

const app = express();

app.use(cors())

app.get('/', (req, res) => {
    res.send(tasks);
});

app.listen(5000, () => console.log('server is running'));
