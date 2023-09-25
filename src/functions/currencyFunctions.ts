//ako prebacim u enviroment odbija zahtev
import { enviroments } from "../enviroments";

var key = "9ebc9b0fcdf393a8952f4c7dc03c0a0509785232";

const currencyListUrl = `https://api.getgeoapi.com/v2/currency/list?api_key=${key}&format=json`;

const currencyConvertUrl = 
`https://api.getgeoapi.com/v2/currency/convert
?api_key=${key}
&from=EUR
&to=USD
&amount=10
&format=json`;

export async function getCurrencyList() {
    fetch(currencyListUrl)
        .then(response => response.json())
        .then(data => console.log(data));
}
export async function getCurrencyConvert() {
    fetch(currencyConvertUrl)
    .then(response => response.json())
    .then(data => console.log(data));
}

//prenosenje vrednosti u url za poziv API