import { Transport } from "./transport";

export class ConcreteTransportCar implements Transport {
    public deliver(): string {
        return 'Deliver by land in a box';
    }
}