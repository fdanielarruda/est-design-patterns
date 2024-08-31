import { ConcreteTransportTrain } from "../products/concreteTransportTrain";
import { Logistics } from "./logistics";
import { Transport } from "../products/transport";

export class ConcreteLogisticsTrain extends Logistics {
    public factoryMethod(): Transport {
        return new ConcreteTransportTrain()
    }
}