import { Sms } from "./sms";

export class SmsNexmo implements Sms {
  send(): void {
    console.log('Sending sms via Nexmo');
  }
}