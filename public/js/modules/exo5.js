export const changeExo5 = () => {
    const containerBee = document.querySelector('.bee-container')
    const addEggBtn = document.querySelector('.add-egg');

    addEggBtn.addEventListener('click', ()=>{
        const img = document.createElement('img');
        img.src = "./public/img/bee.png"
        img.style.width = "10%"
        containerBee.append(img)
            })
}