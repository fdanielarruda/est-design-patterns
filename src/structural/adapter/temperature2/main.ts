
import { KelvinToCelciusAdapter } from './kelvinToCelciusAdapter';
import { CelciusToFahrenheitAdapter } from './celciusToFahrenheitAdapter';
import { KelvinToFahrenheitAdapter } from './kelvinToFahrenheitAdapter';
import { UseCase } from './useCase';

const kelvinToCelcius = new KelvinToCelciusAdapter();
const celciusToFahrenheit = new CelciusToFahrenheitAdapter();
const kelvinToFahrenheit = new KelvinToFahrenheitAdapter();

const ucKelvinToCelcius = new UseCase(kelvinToCelcius);
console.log('300k->c', ucKelvinToCelcius.convert(300));

const ucCelciusToFahrenheit = new UseCase(celciusToFahrenheit);
console.log('32c->f', ucCelciusToFahrenheit.convert(32));

const ucKelvinToFahrenheit = new UseCase(kelvinToFahrenheit);
console.log('300k->f', ucKelvinToFahrenheit.convert(300));