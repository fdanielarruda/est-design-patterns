import { Email } from "./email";
import { Sms } from "./sms";

export interface MessageFactory {
    createEmail(): Email;
    createSms(): Sms;
}