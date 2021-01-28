import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

//Rotas
import UserRouter from './routes/UserRouter';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use('/api/user', UserRouter);

app.listen(3333, () => {
	console.log('Server running');
});
