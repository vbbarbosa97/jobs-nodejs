import { Request, Response } from 'express';
import Mail from '../lib/Mail';

class UserController {
	async store(req: Request, res: Response) {
		const { name, email, password } = req.body;

		const user = {
			name,
			email,
			password,
		};

		await Mail.sendMail({
			from: 'Teste de email <jobs@jobsNodejs.com.br>',
			to: `${name} <${email}>`,
			subject: 'Cadastro de usuário',
			html: `Olá, ${name}, bem-vindo ao sistema de filas da JobsNodejs`,
		});

		return res.json(user);
	}
}

export default new UserController();
