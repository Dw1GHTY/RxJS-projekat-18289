import { render } from "./views/main";
import { getRsdToEurRate, getRsdToUsdRate } from "./functions/currencyFunctions";


//tok podataka -> draw funkcija -> filter na search


/* getCurrencyList();
getCurrencyConvert();
 */
render();

getRsdToEurRate().subscribe((data) => console.log("RSDEUR rate: ", data.rate));
getRsdToUsdRate().subscribe((data) => console.log("RSDUSD rate:", data.rate));