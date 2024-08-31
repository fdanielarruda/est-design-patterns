import { Email } from "./email";

export class EmailNexmo implements Email {
  send(): void {
    console.log('Sending email via Nexmo');
  }
}