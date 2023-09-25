import { getComponents } from "../../../functions/getComponents";

export function fillTable(shopTableBody: HTMLElement) {

    getComponents('').subscribe((data) => {

        const firstFifteen = data.slice(0, 15);
        firstFifteen.forEach(components => {

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
}