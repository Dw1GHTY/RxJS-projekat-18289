import { filter, fromEvent, map } from "rxjs";
import { currentBalance } from "../balance/balance";


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

    deposit(depositInput, depositButton, currentBalance);
}

export function deposit(depositInput: HTMLInputElement ,depositButton: HTMLElement,currentBalance: number){

    const click$ = fromEvent(depositButton, 'click');

    const input$ = fromEvent(depositInput, 'input').pipe(
        map((event: Event) => (event.target as HTMLInputElement).value),
        filter(value => /^\d+$/.test(value))
    )
    
    click$.pipe(    
        map(() => parseInt(depositInput.value, 10)),
        filter(depositAmount => !isNaN(depositAmount)),
      ).subscribe((depositAmount) => {

        const newBalance = currentBalance + depositAmount;
        currentBalance = newBalance;
        document.querySelector('.balance').innerHTML = currentBalance.toString();

        depositInput.value = '';
      })
}