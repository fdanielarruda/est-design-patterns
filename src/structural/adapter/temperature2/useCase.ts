import { ConvertTemperature } from "./convertTemperature";

export class UseCase {
    constructor(protected convertTemperature: ConvertTemperature) {}

    public convert(temperature: number): number {
        return this.convertTemperature.convert(temperature);
    }
}