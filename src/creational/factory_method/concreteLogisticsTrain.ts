import { ConcreteTransportTrain } from "./concreteTransportTrain";
import { Logistics } from "./logistics";
import { Transport } from "./transport";

export class ConcreteLogisticsTrain extends Logistics {
    public factoryMethod(): Transport {
        return new ConcreteTransportTrain()
    }
}