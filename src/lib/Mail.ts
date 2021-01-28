import Nodemailer from 'nodemailer';
import MailConfig from '../config/MailConfig';

export default Nodemailer.createTransport(MailConfig);
