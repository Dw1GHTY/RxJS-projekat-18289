

export function createForeignBalance(currencyShopContainer: HTMLElement) {

    const foreignCurrencyContainer = document.createElement('div');
    foreignCurrencyContainer.classList.add('foreign-currency-container');
    currencyShopContainer.appendChild(foreignCurrencyContainer);

    const foreignCurrencyTitle = document.createElement('h2');
    foreignCurrencyTitle.innerText = "Foreign currency balance:"
    foreignCurrencyContainer.appendChild(foreignCurrencyTitle);


    const foreignCurrenciesBalance = document.createElement('div');
    foreignCurrenciesBalance.classList.add('foreign-currencies-balance');
    foreignCurrencyContainer.appendChild(foreignCurrenciesBalance);



    const eurBalanceContainer = document.createElement('div');
    eurBalanceContainer.classList.add('eur-balance-container')
    foreignCurrenciesBalance.appendChild(eurBalanceContainer);

    const eurLabel = document.createElement('div');
    eurLabel.innerText = "EUR:";
    eurLabel.classList.add('foreign-currency-label');
    eurBalanceContainer.appendChild(eurLabel);

    const eurValue = document.createElement('div');
    eurValue.classList.add('foreign-currency-value');
    eurValue.innerText = "120";
    eurBalanceContainer.appendChild(eurValue);




    const usdBalanceContainer = document.createElement('div');
    usdBalanceContainer.classList.add('usd-balance-container')
    foreignCurrenciesBalance.appendChild(usdBalanceContainer);

    const usdLabel = document.createElement('div');
    usdLabel.innerText = "USD:";
    usdLabel.classList.add('foreign-currency-label');
    usdBalanceContainer.appendChild(usdLabel);

    const usdValue = document.createElement('div');
    usdValue.classList.add('foreign-currency-value');
    usdValue.innerText = "300";
    usdBalanceContainer.appendChild(usdValue);



}