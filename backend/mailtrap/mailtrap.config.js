import { MailtrapClient } from "mailtrap";
import dotenv from 'dotenv'

dotenv.config();
const TOKEN = process.env.MAILTRAP_TOKEN;
const ENDPOINT = process.env.MAILTRAP_ENDPOINT;

 export const mailtrapClient = new MailtrapClient({
  token: TOKEN,
});

 export const sender = {
  email: "mailtrap@demomailtrap.com",
  name: "Mailtrap Test",
};
// const recipients = [
//   {
//     email: "gautam_mc21a11_59@dtu.ac.in",
//   }
// ];

// client
//   .send({
//     from: sender,
//     to: recipients,
//     subject: "You are awesome!",
//     text: "Congrats for sending test email with Mailtrap!",
//     category: "Integration Test",
//   })
//   .then(console.log, console.error);