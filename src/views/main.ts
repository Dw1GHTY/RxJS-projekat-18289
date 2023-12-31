import { createShopSection } from "./shop/shop";
import { createWalletSection } from "./wallet/wallet";
import { createHeaderSection } from "./header/header";

export function render() {

    const appContainer = document.createElement('div');
    appContainer.classList.add('app-container');
    document.body.appendChild(appContainer);

    createHeaderSection(appContainer);

    const workspaceContainer = document.createElement('div');
    workspaceContainer.classList.add('workspace-container');
    appContainer.appendChild(workspaceContainer);

    const wallet = createWalletSection(workspaceContainer);
    workspaceContainer.appendChild(wallet);

    const shop = createShopSection(workspaceContainer);
    workspaceContainer.appendChild(shop);


}