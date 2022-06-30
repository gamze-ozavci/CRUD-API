import express from 'express';
import bodyParser from 'body-parser';
import itemsRoutes from './routes/items.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/', itemsRoutes);

app.get('/', (request, response) => {
    console.log('[TEST]!');

    response.send('Hello From Homepage!');
})

app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT} `));