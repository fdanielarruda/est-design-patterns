import { MessageFactory } from "./messageFactory";
import { NexmoMessageFactory } from "./nexmoMessageFactory";
import { TwilioMessageFactory } from "./twilioMessageFactory";

function clientCode(factory: MessageFactory) {
    const email = factory.createEmail();
    const sms = factory.createSms();

    email.send();
    sms.send();
}

console.log('Abstract Factory Pattern\n')

clientCode(new NexmoMessageFactory());
clientCode(new TwilioMessageFactory());