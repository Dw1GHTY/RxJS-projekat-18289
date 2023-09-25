import { createBalance } from "./balance/balance";
import { createConvert } from "./convert/convert";
import { createDeposit } from "./deposit/deposit";

export function createWalletSection(workspaceContainer: HTMLElement): HTMLElement {

    const walletContainer = document.createElement('div');
    walletContainer.classList.add('wallet-container');
    workspaceContainer.appendChild(walletContainer);

    const walletTitleContainer = document.createElement('div');
    walletTitleContainer.classList.add('wallet-title-container');
    walletContainer.appendChild(walletTitleContainer);

    const walletTitle = document.createElement('h2');
    walletTitle.classList.add('wallet-title');
    walletTitle.innerHTML = "WALLET";
    walletTitleContainer.appendChild(walletTitle);


    createBalance(walletContainer);

    createDeposit(walletContainer);

    createConvert(walletContainer);


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