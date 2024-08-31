import { ConcreteLogisticsCar } from "./creators/concreteLogisticsCar"
import { ConcreteLogisticsTrain } from "./creators/concreteLogisticsTrain"
import { Logistics } from "./creators/logistics"

function clientCode(creator: Logistics) {
    console.log(creator.planDelivery())
}

console.log('Factory Method Pattern\n')

clientCode(new ConcreteLogisticsCar())
clientCode(new ConcreteLogisticsTrain())