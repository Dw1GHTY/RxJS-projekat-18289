export function createHeaderSection(appContainer: HTMLElement): HTMLElement{
    
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
    appTitle.innerHTML = "TITLE";
    appTitleContainer.appendChild(appTitle);

    return appContainer;
}