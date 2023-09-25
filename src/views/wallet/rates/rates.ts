
export function createRates(walletContainer: HTMLElement){

    const ratesContainer = document.createElement('div');
    ratesContainer.classList.add('rates-container');
    walletContainer.appendChild(ratesContainer);

    const balanceEur = document.createElement('div');
    balanceEur.classList.add('balance-eur');
    ratesContainer.appendChild(balanceEur);
    balanceEur.innerText = `Balance in EUR: `;

    const balanceUsd = document.createElement('div');
    balanceUsd.classList.add('balance-usd');
    ratesContainer.appendChild(balanceUsd);
    balanceUsd.innerText = `Balance in USD: `;

}