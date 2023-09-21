import { from, Observable } from "rxjs";
import { Component } from "../Interface/Component";
import { enviroments } from "../enviroments";



//components Observable
export function getComponents(): Observable<Component[]> {
    const promise = fetch(enviroments.DB_URL)
        .then(response => {
            if (!response.ok) {
                throw new Error("Components not found");
            } else {
                return response.json();
            }
        })
        .catch(err => console.log(err))
    return from(promise);
}