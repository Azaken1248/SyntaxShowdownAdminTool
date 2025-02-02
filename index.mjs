import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

import gamesRouter from './Routes/gamesRouter.mjs';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use("/gamesApi",gamesRouter);

app.get('/', (_req, res) => {
    res.sendFile(join(__dirname, 'root.html'));
});

app.listen(3000, () => {
    console.log(`Server is running on port ${3000}`);
});

export default app;