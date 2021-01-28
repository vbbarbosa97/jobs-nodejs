import { MailConfig } from '../shared/Values';

export default {
	host: MailConfig.host,
	port: MailConfig.port,
	auth: {
		user: MailConfig.user,
		pass: MailConfig.pass,
	},
};
