//ako prebacim u enviroment odbija zahtev
import { Observable, from, map } from "rxjs";
import { enviroments } from "../enviroments";

var key = "9ebc9b0fcdf393a8952f4c7dc03c0a0509785232";

const currencyListUrl = 
`https://api.getgeoapi.com/v2/currency/list
?api_key=${key}
&format=json`;

const rsdToEur = 
`https://api.getgeoapi.com/v2/currency/convert
?api_key=${key}
&from=RSD
&to=EUR
&amount=1000
&format=json`;

const rsdToUsd =
`https://api.getgeoapi.com/v2/currency/convert
?api_key=${key}
&from=RSD
&to=USD
&amount=1000
&format=json`;


export function getRsdToEurRate(): Observable<any>{      //samo se uzima rate sa API-ja 
    const promise = fetch(rsdToEur)                      //a na njega se subscribeuje za racunanje
        .then(response => {
            if(!response.ok){
                throw new Error("Error during api data fetch")
            }
            else{
                return response.json();
            }
        });
    return from(promise).pipe(
        map((response: any) => {
            const rateValue = parseFloat(response.rates.EUR.rate);
            return{
                rate: rateValue
            } as any;
        })
    );    
}

export function getRsdToUsdRate(): Observable<any>{      //samo se uzima rate sa API-ja 
    const promise = fetch(rsdToUsd)                      //a na njega se subscribeuje za racunanje
        .then(response => {
            if(!response.ok){
                throw new Error("Error during api data fetch")
            }
            else{
                return response.json();
            }
        });
    return from(promise).pipe(
        map((response: any) => {
            const rateValue = parseFloat(response.rates.USD.rate);
            return{
                rate: rateValue
            } as any;
        })
    );    
}

