import express from 'express';

const app = express();

app.get('/test', (req, res) => {
    res.send('Hello World!');
    }
);

app.listen(3001, () => console.log('Example app listening on port 3001!'));

export default app;