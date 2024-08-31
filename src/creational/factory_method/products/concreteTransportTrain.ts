import { Transport } from "./transport";

export class ConcreteTransportTrain implements Transport {
    public deliver(): string {
        return 'Deliver by rail in a container';
    }
}