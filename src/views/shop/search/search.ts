import { searchComponents } from "./searchFunctions";


export function createSearch(shopContainer: HTMLElement): HTMLElement {

    const searchContainer = document.createElement('div');
    searchContainer.classList.add('search-container');
    shopContainer.appendChild(searchContainer);

    const searchBar = document.createElement('input');
    searchBar.classList.add('search-bar');
    searchBar.placeholder = "Search items...";
    searchContainer.appendChild(searchBar);

    searchComponents(searchBar);

    return searchContainer;
}