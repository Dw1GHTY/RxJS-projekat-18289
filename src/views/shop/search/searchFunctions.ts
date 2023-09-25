import { debounce, debounceTime, filter, fromEvent, map, switchMap } from "rxjs";
import { getComponents } from "../../../functions/getComponents";

export function searchComponents(input: HTMLInputElement) {

    const inputElement: HTMLInputElement = input;
    fromEvent(inputElement, "input").pipe(
        debounceTime(1000),
        map((ev: InputEvent) => (<HTMLInputElement>ev.target).value),   //preuzimanje search vrednosti
        filter((txt: string) => txt.length >= 2),
        switchMap(componentName => getComponents(componentName))        //sadrzaj search se salje za pretragu komponenti
    ).subscribe(components => console.log("search db: ", components));
}