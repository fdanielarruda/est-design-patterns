import { MessageFactory } from "./factories/messageFactory";
import { NexmoMessageFactory } from "./factories/nexmoMessageFactory";
import { TwilioMessageFactory } from "./factories/twilioMessageFactory";

function clientCode(factory: MessageFactory) {
    const email = factory.createEmail();
    const sms = factory.createSms();

    email.send();
    sms.send();
}

console.log('Abstract Factory Pattern\n')

clientCode(new NexmoMessageFactory());
clientCode(new TwilioMessageFactory());