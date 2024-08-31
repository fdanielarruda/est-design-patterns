import { MessageFactory } from "./factories/messageFactory";

export class UseCase {
    constructor(protected factory: MessageFactory) {}

    public sendAll(): void {
        const email = this.factory.createEmail();
        email.send();

        const sms = this.factory.createSms();
        sms.send();
    }
}