import { ConcreteLogisticsCar } from "./concreteLogisticsCar"
import { ConcreteLogisticsTrain } from "./concreteLogisticsTrain"
import { Logistics } from "./logistics"

function clientCode(creator: Logistics) {
    console.log(creator.planDelivery())
}

console.log('Factory Method Pattern\n')

clientCode(new ConcreteLogisticsCar())
clientCode(new ConcreteLogisticsTrain())