import { Director } from "./core/director";
import { ReportBuilder } from "./builders/reportBuilder";

function clientCode(director: Director) {
    const builder = new ReportBuilder()
    director.setBuilder(builder)

    console.log('Minimal viable report:')
    director.buildMinimalViableReport()
    builder.getReport().listParts()

    console.log('Full featured report:')
    director.buildFullFeaturedReport()
    builder.getReport().listParts()

    console.log('Custom report:')
    builder.setGraph()
    builder.setAnalysis()
    builder.getReport().listParts()
}

clientCode(new Director())