/* const url = "http://localhost:3000/db/people-db.json"; */


const appContainer = document.createElement('div');
appContainer.classList.add('app-container');
document.body.appendChild(appContainer);



//header
const headerContainer = document.createElement('div');
headerContainer.classList.add('header-container');
appContainer.appendChild(headerContainer);

const logoContainer = document.createElement('div');
logoContainer.classList.add('logo-container');
headerContainer.appendChild(logoContainer);

const appLogo = document.createElement('h1');
appLogo.classList.add('app-logo')
appLogo.textContent = "LOGO";
logoContainer.appendChild(appLogo);

const appTitleContainer = document.createElement('div');
appTitleContainer.classList.add('app-title-container')
headerContainer.appendChild(appTitleContainer);

const appTitle = document.createElement('h1');
appTitle.classList.add('app-title')
appTitle.innerHTML = "APPLICATION TITLE";
appTitleContainer.appendChild(appTitle);



//main
const workspaceContainer = document.createElement('div');
workspaceContainer.classList.add('workspace-container');
appContainer.appendChild(workspaceContainer);

const walletContainer = document.createElement('div');
walletContainer.classList.add('wallet-container');
workspaceContainer.appendChild(walletContainer);

const shopContainer = document.createElement('div');
shopContainer.classList.add('shop-container');
workspaceContainer.appendChild(shopContainer);



//WALLET
const walletTitleContainer = document.createElement('div');
walletTitleContainer.classList.add('wallet-title-container');
walletContainer.appendChild(walletTitleContainer);

const walletTitle = document.createElement('h2');
walletTitle.classList.add('wallet-title');
walletTitle.innerHTML = "WALLET";
walletTitleContainer.appendChild(walletTitle);


//SHOP
const shopTitleContainer = document.createElement('div');
shopTitleContainer.classList.add('shop-title-container');
shopContainer.appendChild(shopTitleContainer);

const shopTitle = document.createElement('h2');
shopTitle.classList.add('shop-title');
shopTitle.innerHTML = "SHOP";
shopTitleContainer.appendChild(shopTitle);