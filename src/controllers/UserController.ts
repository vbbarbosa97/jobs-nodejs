import { Request, Response } from 'express';
import Queue from '../lib/Queue';
import Mail from '../lib/Mail';
import nodemailer from 'nodemailer';

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
