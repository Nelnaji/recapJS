export const changeExo3 = () => {
const mainContainerExo3 = document.querySelector('.contenu__ex-3')

// creation des elements
const title = document.createElement('h2')
const userName = document.createElement('span')
const paragraphe = document.createElement('p');
const userInput = document.createElement('input');
const btnInput = document.createElement('button');
const inputContainer = document.createElement('div');

// ajout des texts styling
inputContainer.classList.add('contenu__ex-3-input')
title.innerText = "Welcome ";
userName.innerText = "Inconnu "

paragraphe.innerText = "écrivez dans l'input ci-dessous le nom de la personne que vous voulez accueillir lorsque vous cliquez sur le bouton GO le nom que vous avez ajouté dans l'input serra mis dans le span du h2 et l'input field serra vidé. Attention Interdiction de toucher a l'HTML"

btnInput.innerText = "GO";
// append les éléments
mainContainerExo3.append(title);
title.append(userName);
mainContainerExo3.append(paragraphe);
mainContainerExo3.append(inputContainer);
inputContainer.append(userInput);
inputContainer.append(btnInput);

btnInput.classList.add('contenu__ex-3-btn')

btnInput.addEventListener('click', ()=>{
    userName.innerText = userInput.value;
    userInput.value = ""
})


}