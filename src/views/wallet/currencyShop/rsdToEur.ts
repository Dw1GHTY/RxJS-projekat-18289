
export function createRsdToEur(currencyShopContainer: HTMLElement) {

    const rsdToEurContainer = document.createElement('div');
    rsdToEurContainer.classList.add('rsd-to-eur-container');
    currencyShopContainer.appendChild(rsdToEurContainer);

    rsdToEurRate(rsdToEurContainer);

    buyEur(rsdToEurContainer);
}

export function rsdToEurRate(rsdToEurContainer: HTMLElement) {

    const rsdToEurRateContainer = document.createElement('div');
    rsdToEurRateContainer.classList.add('rsd-to-eur-rate-container');
    rsdToEurContainer.appendChild(rsdToEurRateContainer);


    //live RSDEUR rate
    const rsdToEurRateTitle = document.createElement('div');
    rsdToEurRateTitle.classList.add('rsd-to-eur-rate-title');
    rsdToEurRateTitle.innerText = "RSD to EUR rate:";
    rsdToEurRateContainer.appendChild(rsdToEurRateTitle);

    const rsdToEurRateValue = document.createElement('div');
    rsdToEurRateValue.classList.add('rsd-to-eur-rate-value');
    rsdToEurRateValue.innerText = "test 0.009";                     //ovo treba porediti sa jucerasnjim kursom (rate-om)
    rsdToEurRateContainer.appendChild(rsdToEurRateValue);           //i treba uvesti live kurs


}
export function buyEur(rsdToEurContainer: HTMLElement) {

    const buyEurContainer = document.createElement('div');
    buyEurContainer.classList.add('buy-eur-container');
    rsdToEurContainer.appendChild(buyEurContainer);


    const buyEurInput = document.createElement('input');
    buyEurInput.classList.add('buy-eur-input');
    buyEurInput.placeholder = "Amount (RSD)";
    buyEurContainer.appendChild(buyEurInput);

    const buyEurPreview = document.createElement('div');
    buyEurPreview.classList.add('buy-eur-preview');
    buyEurPreview.innerText = "+250€";
    buyEurContainer.appendChild(buyEurPreview);

    const buyEurButton = document.createElement('button');
    buyEurButton.classList.add('wallet-button');
    buyEurButton.setAttribute('id', 'buyEurButton');
    buyEurButton.innerHTML = "Buy EUR";
    buyEurContainer.appendChild(buyEurButton);

}