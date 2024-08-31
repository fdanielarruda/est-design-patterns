import { Renderer } from "./renderer";

export class HtmlRenderer implements Renderer {
    renderTitle(title: string): string {
        return `<h1>${title}</h1>`;
    }

    renderContent(content: string): string {
        return `<p>${content}</p>`;
    }

    renderBackground(backgroud: string): string {
        return `<body style="background-color: ${backgroud}">`;
    }

    renderParts(parts: string[]): string {
        return parts.join('\n');
    }
}