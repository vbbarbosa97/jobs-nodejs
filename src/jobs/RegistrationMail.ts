import Mail from '../lib/Mail';
import { QueueOptions } from 'bull';

type RegistrationMailProps = {
	name: string;
	email: string;
};

type RegistartionData = {
	data: RegistrationMailProps;
};

export default {
	key: 'RegistrationMail',
	async handle({ data }: RegistartionData) {
		const { name, email } = data;

		await Mail.sendMail({
			from: 'Teste de email <jobs@jobsNodejs.com.br>',
			to: `${name} <${email}>`,
			subject: 'Cadastro de usuário',
			html: `Olá, ${name}, bem-vindo ao sistema de filas da JobsNodejs`,
		});
	},
	options: {
		delay: 5000,
	},
};
