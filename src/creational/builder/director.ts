import { Builder } from "./builder";

export class Director {
    private builder: Builder

    public setBuilder(builder: Builder): void {
        this.builder = builder
    }

    public buildMinimalViableReport(): void {
        this.builder.setGraph()
    }

    public buildFullFeaturedReport(): void {
        this.builder.setGraph()
        this.builder.setTable()
        this.builder.setAnalysis()
    }
}