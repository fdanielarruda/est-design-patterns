import { Report } from "../products/report"

export interface Builder {
    reset(): void
    setGraph(): void
    setTable(): void
    setAnalysis(): void
    getReport(): Report
}