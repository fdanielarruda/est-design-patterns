import { Renderer } from "./renderer";

export class JsonRenderer implements Renderer {
    renderTitle(title: string): string {
        return `"title": "${title}"`;
    }

    renderContent(content: string): string {
        return `"content": "${content}"`;
    }

    renderBackground(backgroud: string): string {
        return `"background": "${backgroud}"`;
    }

    renderParts(parts: string[]): string {
        return `{
            ${parts.join(',\n')}
        }`;
    }
}