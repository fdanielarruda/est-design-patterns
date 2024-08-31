import { ConvertTemperature } from "./convertTemperature";

export class CelciusToFahrenheitAdapter implements ConvertTemperature {
    public convert(temperature: number): number {
        return temperature * 9 / 5 + 32;
    }
}