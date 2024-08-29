import { Transport } from "./transport"

export abstract class Logistics
{
    public abstract factoryMethod(): Transport

    public planDelivery(): string
    {
        const transport = this.factoryMethod()
        return transport.deliver()
    }
}