import { NexmoMessageFactory } from "./factories/nexmoMessageFactory";
import { TwilioMessageFactory } from "./factories/twilioMessageFactory";
import { UseCase } from "./useCase";

console.log('Abstract Factory Pattern\n')

const ucNexmo = new UseCase(new NexmoMessageFactory());
ucNexmo.sendAll();

const ucTwilio = new UseCase(new TwilioMessageFactory());
ucTwilio.sendAll();