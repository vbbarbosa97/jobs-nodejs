export const MailConfig = {
	host: process.env.MAIL_HOST,
	port: 2525,
	user: process.env.MAIL_USER,
	pass: process.env.MAIL_PASS,
};

export const RedisConfig = {
	host: process.env.REDIS_HOST,
	port: 6379,
};

const Values = {
	MailConfig,
	RedisConfig,
};

export default Values;
