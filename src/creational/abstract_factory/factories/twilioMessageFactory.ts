import { MessageFactory } from "./messageFactory";
import { Email } from "../products/email/email";
import { EmailTwilio } from "../products/email/emailTwilio";
import { Sms } from "../products/sms/sms";
import { SmsTwilio } from "../products/sms/smsTwilio";

export class TwilioMessageFactory implements MessageFactory {
    createEmail(): Email {
        return new EmailTwilio();
    }

    createSms(): Sms {
        return new SmsTwilio();
    }   
}