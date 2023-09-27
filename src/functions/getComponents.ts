import { filter, from, Observable, of, switchMap } from "rxjs";
import { Component } from "../Interface/Component";
import { enviroments } from "../enviroments";
import { fillTable } from "../views/shop/table/tableFunctions";

//components Observable
export function getComponents(componentName?: string): Observable<Component[]> {
    const searchName = componentName;
    searchName.toLowerCase();
    /* console.log("Preneto ime iz searchboxa: ", componentName) */
    const promise = fetch(enviroments.DB_URL)
        .then(response => {
            if (!response.ok) {
                throw new Error("Components not found");
            }
            else {
                return response.json();
            }
        })
        .then((data: Component[]) => {
            const filteredComponents = data.filter((component) =>       //mozda ovde problem
                component.item
                    .toLowerCase()
                    .includes(searchName)
            );
            return filteredComponents;
        })
        .catch(err => {
            console.log(err);
            return [];
        })
    return from(promise)
}
