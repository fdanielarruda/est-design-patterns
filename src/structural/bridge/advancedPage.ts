import { Page } from "./page"
import { Renderer } from "./renderer";

export class AdvancedPage extends Page {
    private background: string;
    private title: string;
    private content: string;

    constructor(renderer: Renderer, background: string, title: string, content: string) {
        super(renderer);
        this.background = background;
        this.title = title;
        this.content = content;
    }

    view() {
        return this.renderer.renderParts([
            this.renderer.renderBackground(this.background),
            this.renderer.renderTitle(this.title),
            this.renderer.renderContent(this.content)
        ]);
    }
}