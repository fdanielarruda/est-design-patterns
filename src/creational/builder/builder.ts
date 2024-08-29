import { Report } from "./report"

export interface Builder {
    reset(): void
    setGraph(): void
    setTable(): void
    setAnalysis(): void
    getReport(): Report
}