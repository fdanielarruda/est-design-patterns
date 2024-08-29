import { Sms } from "./sms";

export class SmsTwilio implements Sms {
  send(): void {
    console.log('Sending sms via Twilio');
  }
}