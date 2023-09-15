/* const url = "http://localhost:3000/db/people-db.json"; */


function render(){

    const bodyContainer = document.createElement('div');
    bodyContainer.classList.add('app-container');
    document.body.appendChild(bodyContainer);


    const headerContainer = document.createElement('div');
    headerContainer.classList.add('header-container');
    bodyContainer.appendChild(headerContainer);

    const workspaceContainer = document.createElement('div');
    workspaceContainer.classList.add('workspace-container');
    bodyContainer.appendChild(workspaceContainer);


    const walletContainer = document.createElement('div');
    walletContainer.classList.add('wallet-container');
    workspaceContainer.appendChild(walletContainer);

    const shopContainer = document.createElement('div');
    shopContainer.classList.add('shop-container');
    workspaceContainer.appendChild(shopContainer);

}

render();