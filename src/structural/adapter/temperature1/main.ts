import { CelsiusToFahrenheitConverter } from "./celsiusToFahrenheitConverter";
import { KelvinToCelsiusConverter } from "./kelvinToCelsiusConverter";
import { KelvinToFahrenheitAdapter } from "./kelvinToFahrenheitAdapter";

const kelvinToFahrenheitAdapter = new KelvinToFahrenheitAdapter(
    new KelvinToCelsiusConverter,
    new CelsiusToFahrenheitConverter
)

console.log(kelvinToFahrenheitAdapter.convert(300))