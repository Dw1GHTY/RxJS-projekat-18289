import { createRsdToEur } from "./rsdToEur";
import { createRsdToUsd } from "./rsdToUsd";
import { createForeignBalance } from "./foreignBalance";

export function createCurrencyShop(walletContainer: HTMLElement) {

    const currencyShopContainer = document.createElement('div');
    currencyShopContainer.classList.add('currency-shop-container');
    walletContainer.appendChild(currencyShopContainer);

    const currencyShopTitle = document.createElement('h2');
    currencyShopTitle.innerText = "Buy foreign currency:"
    currencyShopContainer.appendChild(currencyShopTitle);

    createRsdToEur(currencyShopContainer);

    createRsdToUsd(currencyShopContainer);

    createForeignBalance(currencyShopContainer);

}