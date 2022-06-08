export const changeExo1 = () => {
const title = document.querySelector('.contenu__ex-1-titre');

title.innerText = "le titre modifié";
title.style.color = "white";
title.classList.add('bg-primary');

title.style.padding = '1rem 2rem';
title.style.borderRadius = ".3rem"
title.style.marginBottom = "2rem"
}