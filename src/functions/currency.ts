//ako prebacim u enviroment odbija zahtev
import { enviroments } from "../enviroments";

var key = "9ebc9b0fcdf393a8952f4c7dc03c0a0509785232";

const apiURL = `https://api.getgeoapi.com/v2/currency/list?api_key=${key}&format=json`

export async function getData() {
    fetch(apiURL)
        .then(response => response.json())
        .then(data => console.log(data));
}

export async function convert() { }