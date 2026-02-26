import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import initDatabase from './config/database.js'
import authRoutes from './routes/authRoutes.js'

dotenv.config();
const app = express();
const db = initDatabase();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes(db));

app.get('/', (req, res) => {
  res.send('Server backend is running!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server backend is running http://localhost:${PORT}`);
});