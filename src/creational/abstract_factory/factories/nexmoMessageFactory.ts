import { MessageFactory } from "./messageFactory";
import { Email } from "../products/email/email";
import { EmailNexmo } from "../products/email/emailNexmo";
import { Sms } from "../products/sms/sms";
import { SmsNexmo } from "../products/sms/smsNexmo";

export class NexmoMessageFactory implements MessageFactory {
    createEmail(): Email {
        return new EmailNexmo();
    }

    createSms(): Sms {
        return new SmsNexmo();
    }
}