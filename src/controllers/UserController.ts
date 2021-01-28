import { Request, Response } from 'express';
import Queue from '../lib/Queue';
class UserController {
	async store(req: Request, res: Response) {
		const { name, email, password } = req.body;

		const user = {
			name,
			email,
			password,
		};

		await Queue.add('RegistrationMail', { name, email });

		return res.json(user);
	}
}

export default new UserController();
