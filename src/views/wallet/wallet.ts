import { createBalance } from "./balance/balance";
/* import { createConvert } from "./convert/convert"; */
import { createDeposit } from "./deposit/deposit";
import { createInfo } from "./info/info";

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

    /* createConvert(walletContainer); */

    createInfo(walletContainer);
    

    return walletContainer;
}