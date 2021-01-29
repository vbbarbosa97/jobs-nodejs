import Queue from 'bull';
import redisConfig from '../config/RedisConfig';
import * as jobs from '../jobs';

const queues = Object.values(jobs).map((job) => ({
	bull: new Queue(job.key, { redis: redisConfig }),
	name: job.key,
	handle: job.handle,
	options: job.options,
}));

export default {
	queues,
	add(name: string, data: any) {
		const queue = this.queues.find((queue) => queue.name === name);

		return queue?.bull.add(data, queue.options);
	},
	process() {
		return this.queues.forEach((queue) => {
			queue.bull.process(queue.handle);

			queue.bull.on('failed', (job, err) => {
				console.log('job failed', queue.name, job.data);
				console.log(err);
			});
		});
	},
};
