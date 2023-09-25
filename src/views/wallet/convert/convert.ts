

export function createConvert(walletContainer: HTMLElement) {
    const convertContainer = document.createElement('div');
    convertContainer.classList.add('convert-container');
    walletContainer.appendChild(convertContainer);

    const convertTitle = document.createElement('h3');
    convertTitle.classList.add('convert-title');
    convertTitle.innerHTML = "Convert: ";
    convertContainer.appendChild(convertTitle);

    const toEuroContainer = document.createElement('div');
    toEuroContainer.classList.add('to-euro-container');
    convertContainer.appendChild(toEuroContainer);

    const toEuroAmount = document.createElement('input');
    toEuroAmount.classList.add('to-euro-amount');
    toEuroAmount.placeholder = "Amount (RSD)";
    toEuroContainer.appendChild(toEuroAmount);

    const toEuroButton = document.createElement('button');
    toEuroButton.classList.add('wallet-button');
    toEuroButton.innerHTML = "Convert to EUR";
    toEuroContainer.appendChild(toEuroButton);

    const toDollarContainer = document.createElement('div');
    toDollarContainer.classList.add('to-dollar-container');
    convertContainer.appendChild(toDollarContainer);

    const toDollarAmount = document.createElement('input');
    toDollarAmount.classList.add('to-dollar-amount');
    toDollarAmount.placeholder = "Amount (RSD)";
    toDollarContainer.appendChild(toDollarAmount);

    const toDollarButton = document.createElement('button');
    toDollarButton.classList.add('wallet-button');
    toDollarButton.innerHTML = "Convert to USD";
    toDollarContainer.appendChild(toDollarButton);
}