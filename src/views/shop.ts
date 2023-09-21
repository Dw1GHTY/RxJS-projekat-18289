import { getComponent } from "../controllers/fetchDb";
import { Component } from "../Interfaces/Component";


export function createShopSection(workspaceContainer: HTMLElement): HTMLElement{

    const shopContainer = document.createElement('div');
    shopContainer.classList.add('shop-container');
    workspaceContainer.appendChild(shopContainer);

    //#region title
    const shopTitleContainer = document.createElement('div');
    shopTitleContainer.classList.add('shop-title-container');
    shopContainer.appendChild(shopTitleContainer);

    const shopTitle = document.createElement('h2');
    shopTitle.classList.add('shop-title');
    shopTitle.innerHTML = "SHOP";
    shopTitleContainer.appendChild(shopTitle);
    //#endregion

    //#region search
    const searchContainer = document.createElement('div');
    searchContainer.classList.add('search-container');
    shopContainer.appendChild(searchContainer);

    const searchBar = document.createElement('input');
    searchBar.classList.add('search-bar');
    searchBar.placeholder = "Search items...";
    searchContainer.appendChild(searchBar);
    //#endregion

    //#region filter
    const filterContainer = document.createElement('div');
    filterContainer.classList.add('filet-container');
    shopContainer.appendChild(filterContainer);

    
    //#endregion

    
    


    return shopContainer;
}
