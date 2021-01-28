import 'dotenv/config';
import express from 'express';
import BullBoard from 'bull-board';
import Queue from './lib/Queue';

//Rotas
import UserRouter from './routes/UserRouter';

const app = express();

BullBoard.setQueues(Queue.queues.map((queue) => queue.bull));

app.use(express.json());

app.use('/api/user', UserRouter);
app.use('/admin/queues', BullBoard.UI);

app.listen(3333, () => {
	console.log('Server running');
});
