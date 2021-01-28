export const MailConfig = {
	host: process.env.MAIL_HOST || 'smtp.mailtrap.io',
	port: 2525,
	user: process.env.MAIL_USER || 'da075a825e386a',
	pass: process.env.MAIL_PASS || '0771dbeadeb927',
};

const Values = {
	MailConfig,
};

export default Values;
