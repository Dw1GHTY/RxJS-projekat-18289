import { from, Observable } from "rxjs";
import { Component } from "../Interfaces/Component";

const dbURL = "http://localhost:3000/components/";


export function getComponent(id: number): Observable<Component> {
    const promise = fetch(dbURL + id)
        .then(response => {
            if (!response.ok) {
                throw new Error("Component not found");
            } else {
                return response.json();
            }
        })
        .catch(err => console.log(err))
        return from(promise);
}