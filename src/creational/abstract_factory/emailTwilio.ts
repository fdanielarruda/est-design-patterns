import { Email } from "./email";

export class EmailTwilio implements Email {
  send(): void {
    console.log('Sending email via Twilio');
  }
}