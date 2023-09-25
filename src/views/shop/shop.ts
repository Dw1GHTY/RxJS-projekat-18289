import { createSearch } from "./search/search";
import { createTable } from "./table/table";


export function createShopSection(workspaceContainer: HTMLElement): HTMLElement {

    const shopContainer = document.createElement('div');
    shopContainer.classList.add('shop-container');
    workspaceContainer.appendChild(shopContainer);

    const shopTitleContainer = document.createElement('div');
    shopTitleContainer.classList.add('shop-title-container');
    shopContainer.appendChild(shopTitleContainer);

    const shopTitle = document.createElement('h2');
    shopTitle.classList.add('shop-title');
    shopTitle.innerHTML = "INTERNATIONAL SHOP";
    shopTitleContainer.appendChild(shopTitle);

    createSearch(shopContainer);

    createTable(shopContainer);

    return shopContainer;
}
