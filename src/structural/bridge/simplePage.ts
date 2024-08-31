import { Page } from "./page"
import { Renderer } from "./renderer";

export class SimplePage extends Page {
    private title: string;
    private content: string;

    constructor(renderer: Renderer, title: string, content: string) {
        super(renderer);
        this.title = title;
        this.content = content;
    }

    view() {
        return this.renderer.renderParts([
            this.renderer.renderTitle(this.title),
            this.renderer.renderContent(this.content)
        ]);
    }
}