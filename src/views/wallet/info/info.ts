export function createInfo(walletContainer: HTMLElement){
    const conversionInfoContainer = document.createElement('div');
    conversionInfoContainer.classList.add('conversion-info-container');
    walletContainer.appendChild(conversionInfoContainer);

    const conversionInfoLink = document.createElement('a');
    conversionInfoLink.classList.add('conversion-info-link');
    conversionInfoLink.innerHTML = "i: conversions are done via live exchange rates";
    conversionInfoLink.href = "https://www.msn.com/en-xl/money/portfolio?tab=Related&id=avsaec&ocid=ansMSNMoney11&duration=1D&src=b_rscrsl&relatedQuoteId=avsaec&relatedSource=MlAl";
    conversionInfoContainer.appendChild(conversionInfoLink);
}