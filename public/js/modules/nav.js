// navigation des boutons du menu
export const changeTabs = function (){

    const navBarContainer = document.querySelector('.nav__bar');
    const navTabs = document.querySelector('.nav__bar-tab');
const tabsContent = document.querySelectorAll('.contenu__ex');



navBarContainer.addEventListener('click', function (e) {
    const clicked = e.target.closest('.nav__bar-tab');
    // Guard clause
    if (!clicked) return;
    
    // Remove active classes
    tabsContent.forEach(c => c.classList.remove('contenu__ex-active'));
    // Activate content area
    document.querySelector(`.contenu__ex-${clicked.dataset.tab}`).classList.add('contenu__ex-active');
});


}

