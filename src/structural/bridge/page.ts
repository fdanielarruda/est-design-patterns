import { Renderer } from "./renderer";

export abstract class Page {
    protected renderer: Renderer;

    constructor(renderer: Renderer) {
        this.renderer = renderer;
    }

    changeRenderer(renderer: Renderer) {
        this.renderer = renderer;
    }

    abstract view(): string;
}