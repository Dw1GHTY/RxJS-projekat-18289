import { getComponents } from "../controllers/getComponents";
import { Component } from "../Interface/Component";


export function createShopSection(workspaceContainer: HTMLElement): HTMLElement {

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
    filterContainer.classList.add('filter-container');
    shopContainer.appendChild(filterContainer);


    //#endregion


    //#region table

    //<table>
    const shopTable = document.createElement('table');
    shopTable.classList.add('shop-table');
    shopContainer.appendChild(shopTable);
    //<thead>
    const shopTableHead = document.createElement('thead');
    shopTable.appendChild(shopTableHead);
    //<tr>
    const shopTableHeadRow = document.createElement('tr');
    shopTableHead.appendChild(shopTableHeadRow);
    //<th>
    const tableItem = document.createElement('th');
    tableItem.classList.add('.table-item');
    tableItem.innerHTML = 'Item';
    shopTableHeadRow.appendChild(tableItem);
    //<th>
    const tablePrice = document.createElement('th');
    tablePrice.classList.add('table-price');
    tablePrice.innerHTML = 'Price RSD';
    shopTableHeadRow.appendChild(tablePrice);
    //<th>
    const tableManufacturer = document.createElement('th');
    tableManufacturer.classList.add('table-manufacturer');
    tableManufacturer.innerHTML = 'Manufacturer';
    shopTableHeadRow.appendChild(tableManufacturer);

    //<tbody>
    const shopTableBody = document.createElement('tbody');
    shopTableBody.classList.add('shop-table-body');
    shopTable.appendChild(shopTableBody);

    getComponents().subscribe((data) => {
        console.log(data);

        data.forEach(components => {

            const row = document.createElement('tr');

            const item = document.createElement('td');
            item.textContent = components.item;
            row.appendChild(item);

            const priceRSD = document.createElement('td');
            priceRSD.textContent = components.priceRSD.toPrecision();
            row.appendChild(priceRSD);

            const manufacturer = document.createElement('td');
            manufacturer.textContent = components.manufacturer;
            row.appendChild(manufacturer);

            shopTableBody.appendChild(row);
        });
    })

    //#endregion


    return shopContainer;
}
