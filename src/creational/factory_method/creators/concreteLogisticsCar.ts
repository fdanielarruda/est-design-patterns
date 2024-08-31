import { ConcreteTransportCar } from "../products/concreteTransportCar";
import { Logistics } from "./logistics";
import { Transport } from "../products/transport";

export class ConcreteLogisticsCar extends Logistics {
    public factoryMethod(): Transport {
        return new ConcreteTransportCar()
    }
}