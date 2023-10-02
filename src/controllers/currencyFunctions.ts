//ako prebacim u enviroment odbija zahtev
import { Observable, from, map, mergeMap } from "rxjs";
import { enviroments } from "../enviroments";
import { getYesterdayObservable } from "./observables";

var key = "9ebc9b0fcdf393a8952f4c7dc03c0a0509785232";

const currencyListUrl =
    `https://api.getgeoapi.com/v2/currency/list
?api_key=${key}
&format=json`;

const rsdToEurUrl =
    `https://api.getgeoapi.com/v2/currency/convert
?api_key=${key}
&from=RSD
&to=EUR
&amount=1000
&format=json`;

const rsdToEurYesterdayUrl =
    `https://api.getgeoapi.com/v2/currency/historical/2023-10-02
?api_key=${key}
&from=RSD
&to=EUR
&amount=1000
&format=json`;


//ovde pravim url za uzimanje jucerasnjeg kursa

export function getRsdToEurRate(): Observable<any> {      //samo se uzima rate sa API-ja 
    const promise = fetch(rsdToEurUrl)                      //a na njega se subscribeuje za racunanje
        .then(response => {
            if (!response.ok) {
                throw new Error("Error during api data fetch")
            }
            else {
                return response.json();
            }
        });
    return from(promise).pipe(
        map((response: any) => {
            const rateValue = parseFloat(response.rates.EUR.rate);
            return {
                rate: rateValue
            } as any;
        })
    );
}
export function getRsdToEurRateYesterday(): Observable<any> {                             //samo se uzima rate sa API-ja 
    const promise = fetch(rsdToEurYesterdayUrl)                                           //a na njega se subscribeuje za racunanje
        .then(response => {
            if (!response.ok) {
                throw new Error("Error during api data fetch")
            }
            else {
                return response.json();
            }
        });
    return from(promise).pipe(
        map((response: any) => {
            const rateValue = parseFloat(response.rates.EUR.rate);
            return {
                rate: rateValue
            } as any;
        })
    );
}

const rsdToUsdUrl =
    `https://api.getgeoapi.com/v2/currency/convert
?api_key=${key}
&from=RSD
&to=USD
&amount=1000
&format=json`;

const rsdToUsdYesterdayUrl =
    `https://api.getgeoapi.com/v2/currency/historical/2023-10-02
?api_key=${key}
&from=RSD
&to=USD
&amount=1000
&format=json`;

export function getRsdToUsdRate(): Observable<any> {
    const promise = fetch(rsdToUsdUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Error during api data fetch")
            }
            else {
                return response.json();
            }
        });
    return from(promise).pipe(
        map((response: any) => {
            const rateValue = parseFloat(response.rates.USD.rate);
            return {
                rate: rateValue
            } as any;
        })
    );
}

export function getRsdToUsdRateYesterday(): Observable<any> {
    const promise = fetch(rsdToUsdYesterdayUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Error during api data fetch")
            }
            else {
                return response.json();
            }
        });
    return from(promise).pipe(
        map((response: any) => {
            const rateValue = parseFloat(response.rates.EUR.rate);
            return {
                rate: rateValue
            } as any;
        })
    );
}

//jucerasnji kursevi
