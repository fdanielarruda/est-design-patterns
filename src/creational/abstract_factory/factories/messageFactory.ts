import { Email } from "../products/email/email";
import { Sms } from "../products/sms/sms";

export interface MessageFactory {
    createEmail(): Email;
    createSms(): Sms;
}