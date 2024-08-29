import { Email } from "./email";
import { EmailNexmo } from "./emailNexmo";
import { MessageFactory } from "./messageFactory";
import { Sms } from "./sms";
import { SmsNexmo } from "./smsNexmo";

export class NexmoMessageFactory implements MessageFactory {
    createEmail(): Email {
        return new EmailNexmo();
    }

    createSms(): Sms {
        return new SmsNexmo();
    }
}