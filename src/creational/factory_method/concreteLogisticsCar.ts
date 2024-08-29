import { ConcreteTransportCar } from "./concreteTransportCar";
import { Logistics } from "./logistics";
import { Transport } from "./transport";

export class ConcreteLogisticsCar extends Logistics {
    public factoryMethod(): Transport {
        return new ConcreteTransportCar()
    }
}