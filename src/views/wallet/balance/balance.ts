export const currentBalance = 0;

export function createBalance(walletContainer: HTMLElement) {

    const balanceContainer = document.createElement('div');
    balanceContainer.classList.add('balance-container');
    walletContainer.appendChild(balanceContainer);

    const balanceLabel = document.createElement('h3');
    balanceLabel.classList.add('balance-title');
    balanceLabel.innerHTML = 'Balance: ';
    balanceContainer.appendChild(balanceLabel);

    const balance = document.createElement('div');
    balance.classList.add('balance');
    balance.innerHTML = `${currentBalance} rsd`;
    balanceContainer.appendChild(balance);
}