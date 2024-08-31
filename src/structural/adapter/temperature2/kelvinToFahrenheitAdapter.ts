import { ConvertTemperature } from "./convertTemperature";

export class KelvinToFahrenheitAdapter implements ConvertTemperature {
    public convert(temperature: number): number {
        const celsius = temperature - 273.15;
        return celsius * 9 / 5 + 32;
    }
}