export function createWalletSection(workspaceContainer: HTMLElement): HTMLElement {

    const walletContainer = document.createElement('div');
    walletContainer.classList.add('wallet-container');
    workspaceContainer.appendChild(walletContainer);

    //#region title
    const walletTitleContainer = document.createElement('div');
    walletTitleContainer.classList.add('wallet-title-container');
    walletContainer.appendChild(walletTitleContainer);

    const walletTitle = document.createElement('h2');
    walletTitle.classList.add('wallet-title');
    walletTitle.innerHTML = "WALLET";
    walletTitleContainer.appendChild(walletTitle);
    //#endregion

    //#region deposit
    const balanceContainer = document.createElement('div');
    balanceContainer.classList.add('balance-container');
    walletContainer.appendChild(balanceContainer);

    const balanceLabel = document.createElement('h3');
    balanceLabel.classList.add('balance-title');
    balanceLabel.innerHTML = 'Balance: ';
    balanceContainer.appendChild(balanceLabel);

    const balance = document.createElement('div');
    balance.classList.add('balance');
    balance.innerHTML = "60000";
    balanceContainer.appendChild(balance);
    //#endregion

    //#region deposit
    const depositContainer = document.createElement('div');
    depositContainer.classList.add('deposit-container');
    walletContainer.appendChild(depositContainer);

    const depositInput = document.createElement('input');
    depositInput.classList.add('deposit-input');
    depositInput.placeholder = "Enter deposit amount";
    depositContainer.appendChild(depositInput);

    const depositButton = document.createElement('button');
    depositButton.classList.add('wallet-button');
    depositButton.innerHTML = "Deposit"
    depositContainer.appendChild(depositButton);
    //#endregion

    //#region convert
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
    toEuroButton.innerHTML = "Convert";
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
    toDollarButton.innerHTML = "Convert";
    toDollarContainer.appendChild(toDollarButton);
    //#endregion

    const conversionInfoContainer = document.createElement('div');
    conversionInfoContainer.classList.add('conversion-info-container');
    walletContainer.appendChild(conversionInfoContainer);

    const conversionInfoLink = document.createElement('a');
    conversionInfoLink.classList.add('conversion-info-link');
    conversionInfoLink.innerHTML = "i: conversions are done via live exchange rates";
    conversionInfoLink.href = "https://www.msn.com/en-xl/money/portfolio?tab=Related&id=avsaec&ocid=ansMSNMoney11&duration=1D&src=b_rscrsl&relatedQuoteId=avsaec&relatedSource=MlAl";
    conversionInfoContainer.appendChild(conversionInfoLink);

    return walletContainer;
}