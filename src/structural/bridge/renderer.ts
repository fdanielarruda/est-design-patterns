export interface Renderer {
    renderTitle(title: string): string;
    renderContent(content: string): string;
    renderBackground(backgroud: string): string;
    renderParts(parts: string[]): string;
}