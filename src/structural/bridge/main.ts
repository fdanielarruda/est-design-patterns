import { AdvancedPage } from "./advancedPage";
import { HtmlRenderer } from "./htmlRenderer";
import { JsonRenderer } from "./jsonRenderer";
import { SimplePage } from "./simplePage";

const htmlRenderer = new HtmlRenderer();
const jsonRenderer = new JsonRenderer();

const simplePage = new SimplePage(htmlRenderer, 'Minha primeira ponte', 'Testando o html com a ponte');
const advancedPage = new AdvancedPage(htmlRenderer, 'red', 'Minha primeira ponte', 'Testando o html com a ponte');

console.log('simple page')
console.log(simplePage.view());

console.log('advanced page')
console.log(advancedPage.view());

const simplePageJson = new SimplePage(jsonRenderer, 'Minha primeira ponte', 'Testando o json com a ponte');
const advancedPageJson = new AdvancedPage(jsonRenderer, 'red', 'Minha primeira ponte', 'Testando o json com a ponte');

console.log('simple page json')
console.log(simplePageJson.view());

console.log('advanced page json')
console.log(advancedPageJson.view());