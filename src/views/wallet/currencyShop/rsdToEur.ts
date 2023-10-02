import { getRsdToEurRate, getRsdToEurRateYesterday } from "../../../controllers/currencyFunctions";

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
    getRsdToEurRate().subscribe(data => {

        rsdToEurRateValue.innerText = data.rate.toString();
        //ovde provera sa jucerasnjim kursom za zeleno ili crveno, mozda moze i razlika da se prikaze
    })
    rsdToEurRateContainer.appendChild(rsdToEurRateValue);
}



export function buyEur(rsdToEurContainer: HTMLElement) {

    const buyEurContainer = document.createElement('div');
    buyEurContainer.classList.add('buy-eur-container');
    rsdToEurContainer.appendChild(buyEurContainer);


    const buyEurInput = document.createElement('input');
    buyEurInput.classList.add('buy-eur-input');
    buyEurInput.placeholder = "Amount (RSD)";
    buyEurContainer.appendChild(buyEurInput);

    //za preview treba da se pretplatim na kurs i 
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