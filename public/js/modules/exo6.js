export const changeExo6 = () => {
  // variable calculatrice 1
  const input1Calc1 = document.querySelector(".calculatrice-1-input-1");
  const input2Calc1 = document.querySelector(".calculatrice-1-input-2");
  const resultCalc1 = document.querySelector(".calculatrice-1-resultat");
  const equalCalc1 = document.querySelector(".btn-egalite-1");
  // code pour la calculatrice niveau 1
  equalCalc1.addEventListener("click", () => {
    let finalValue = +input1Calc1.value + +input2Calc1.value;
    resultCalc1.innerText = finalValue;
  });

  // //////////////////////////// //
  // Code calculatrice niveau 2  //
  // /////////////////////////// //
  const gridCalculatrice = document.querySelector(".calculatrice-2-grid");
  const btnCalculatrice = document.querySelector(".btn-calculatrice");
  const btnResultat = document.querySelector(".calculatrice-2-preresultat");
  const inputCalc2 = document.querySelector(".calculatrice-2-input");
  const calcul2Preresultat = document.querySelector(".calculatrice-2-preresultat");
  const resultatFinal = document.querySelector(".calculatrice-2-resultat-final");
  const btnResultatFinal = document.querySelector('.btn-calculatrice-egalite');
  let nombre1;
  let nombre2;

  gridCalculatrice.addEventListener("click", (e) => {
    const clicked = e.target.closest(".btn-calculatrice");

    if (!clicked) return;


    switch (clicked.dataset.tab) {
      case "1":
        calcul2Preresultat.innerText += 1;
        nombre1 +=1;
        break;
      case "2":
        calcul2Preresultat.innerText += 2;
        break;
      case "3":
        calcul2Preresultat.innerText += 3;
        break;
      case "4":
        calcul2Preresultat.innerText += 4;
        break;
      case "5":
        calcul2Preresultat.innerText += 5;
        break;
      case "6":
        calcul2Preresultat.innerText += 6;
        break;
      case "7":
        calcul2Preresultat.innerText += 7;
        break;
      case "8":
        calcul2Preresultat.innerText += 8;
        break;
      case "9":
        calcul2Preresultat.innerText += 9;
        break;
        case "0":
          calcul2Preresultat.innerText += 0;
          break;
      case "/":
        btnResultat.innerText += "/";
        break;
      case "*":
        btnResultat.innerText += "*";
        break;
      case "-":
        btnResultat.innerText += "-";
        break;
      case "+":
        btnResultat.innerText += "+";
        break;
      case "c":
        btnResultat.innerText = "";
        break;
    }
  });

  btnResultatFinal.addEventListener('click', ()=>{
    const preresultat = eval(calcul2Preresultat.innerText);
    resultatFinal.innerText = preresultat;
  })

};
