import { fillTable } from "./tableFunctions";

export function createTable(shopContainer: HTMLElement) {
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


    fillTable(shopTableBody);
}


