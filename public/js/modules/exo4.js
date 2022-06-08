export const changeExo4 = () => {
let clickCounter = 0;
const btnChange = document.querySelector('.change-place');
const counter = document.querySelector('.counter');
const leftBox = document.querySelector('.left-box');
const rightBox = document.querySelector('.right-box');

btnChange.addEventListener('click', ()=> {
    clickCounter++;
    counter.innerText = clickCounter;
    

})
}