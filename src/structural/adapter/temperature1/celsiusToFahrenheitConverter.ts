export class CelsiusToFahrenheitConverter {
    public convert(celsius: number): number {
        return (celsius * 9 / 5) + 32;
    }
}