import { getRsdToUsdRate } from "../../../controllers/currencyFunctions";

export function createRsdToUsd(currencyShopContainer: HTMLElement) {

    const rsdToUsdContainer = document.createElement('div');
    rsdToUsdContainer.classList.add('rsd-to-usd-container');
    currencyShopContainer.appendChild(rsdToUsdContainer);

    rsdToUsdRate(rsdToUsdContainer);

    buyUsd(rsdToUsdContainer);
}

export function rsdToUsdRate(rsdToUsdContainer: HTMLElement) {

    const rsdToUsdRateContainer = document.createElement('div');
    rsdToUsdRateContainer.classList.add('rsd-to-usd-rate-container');
    rsdToUsdContainer.appendChild(rsdToUsdRateContainer);

    // Live RSDUSD rate
    const rsdToUsdRateTitle = document.createElement('div');
    rsdToUsdRateTitle.classList.add('rsd-to-usd-rate-title');
    rsdToUsdRateTitle.innerText = "RSD to USD rate:";
    rsdToUsdRateContainer.appendChild(rsdToUsdRateTitle);

    const rsdToUsdRateValue = document.createElement('div');
    rsdToUsdRateValue.classList.add('rsd-to-usd-rate-value');
    getRsdToUsdRate().subscribe(data => {
        rsdToUsdRateValue.innerText = data.rate.toString();
        //ovde provera sa jucerasnjim kursom za zeleno ili crveno, mozda moze i razlika da se prikaze
    })
    rsdToUsdRateContainer.appendChild(rsdToUsdRateValue);
}

export function buyUsd(rsdToUsdContainer: HTMLElement) {

    const buyUsdContainer = document.createElement('div');
    buyUsdContainer.classList.add('buy-usd-container');
    rsdToUsdContainer.appendChild(buyUsdContainer);

    const buyUsdInput = document.createElement('input');
    buyUsdInput.classList.add('buy-usd-input');
    buyUsdInput.placeholder = "Amount (RSD)";
    buyUsdContainer.appendChild(buyUsdInput);

    const buyUsdPreview = document.createElement('div');
    buyUsdPreview.classList.add('buy-usd-preview');
    buyUsdPreview.innerText = "+250$"; // Promenio sam valutu u dolarima
    buyUsdContainer.appendChild(buyUsdPreview);

    const buyUsdButton = document.createElement('button');
    buyUsdButton.classList.add('wallet-button');
    buyUsdButton.setAttribute('id', 'buyUsdButton');
    buyUsdButton.innerHTML = "Buy USD"; // Promenio sam tekst na dugmetu
    buyUsdContainer.appendChild(buyUsdButton);

}
