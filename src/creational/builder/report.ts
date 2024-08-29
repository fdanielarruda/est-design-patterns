export class Report {
    public parts: string[] = []
    
    public listParts(): void {
        console.log(`Report parts: ${this.parts.join(', ')}\n`)
    }
}