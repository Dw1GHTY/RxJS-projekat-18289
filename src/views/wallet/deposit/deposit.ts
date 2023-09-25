

export function createDeposit(walletContainer: HTMLElement) {

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
}