/* const url = "http://localhost:3000/db/people-db.json"; */

import { render } from "./views/main";
import { getData } from "./controllers/currencyApi";
import { getComponents } from "./controllers/getComponents";


//tok podataka -> draw funkcija -> filter na search

/* getComponent(); */
getData();

render();