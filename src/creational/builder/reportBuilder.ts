import { Builder } from "./builder";
import { Report } from "./report";

export class ReportBuilder implements Builder {
    private report: Report

    constructor() {
        this.reset()
    }

    public reset(): void {
        this.report = new Report()
    }

    public setGraph(): void {
        this.report.parts.push('graph')
    }

    public setTable(): void {
        this.report.parts.push('table')
    }

    public setAnalysis(): void {
        this.report.parts.push('analysis')
    }

    public getReport(): Report {
        const result = this.report
        this.reset()
        return result
    }
}