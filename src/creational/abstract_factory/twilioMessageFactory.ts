import { Email } from "./email";
import { EmailTwilio } from "./emailTwilio";
import { MessageFactory } from "./messageFactory";
import { Sms } from "./sms";
import { SmsTwilio } from "./smsTwilio";

export class TwilioMessageFactory implements MessageFactory {
    createEmail(): Email {
        return new EmailTwilio();
    }

    createSms(): Sms {
        return new SmsTwilio();
    }   
}