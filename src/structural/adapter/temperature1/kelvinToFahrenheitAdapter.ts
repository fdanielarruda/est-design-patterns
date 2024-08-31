import { KelvinToCelsiusConverter } from "./kelvinToCelsiusConverter";
import { CelsiusToFahrenheitConverter } from "./celsiusToFahrenheitConverter";

export class KelvinToFahrenheitAdapter implements KelvinToCelsiusConverter {
    constructor(
        protected kelvinToCelsiusConverter: KelvinToCelsiusConverter,
        protected celsiusToFahrenheitConverter: CelsiusToFahrenheitConverter
    ) {}

    public convert(kelvin: number): number {
        const celsius = this.kelvinToCelsiusConverter.convert(kelvin);
        return this.celsiusToFahrenheitConverter.convert(celsius);
    }
}