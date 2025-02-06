document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');


    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const tabsTarget = botao.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id="${tabsTarget}"]`);
            hidenTabs();
            tab.classList.add('shows__list--is-active');
        })
    }
})

function hidenTabs() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i=0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}