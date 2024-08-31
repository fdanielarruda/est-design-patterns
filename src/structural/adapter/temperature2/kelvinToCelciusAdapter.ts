import { ConvertTemperature } from "./convertTemperature";

export class KelvinToCelciusAdapter implements ConvertTemperature {
    public convert(temperature: number): number {
        return temperature - 273.15;
    }
}