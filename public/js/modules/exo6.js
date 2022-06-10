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
  const btnResultat = document.querySelector(".calculatrice-2-resultat");
  const inputCalc2 = document.querySelector(".calculatrice-2-input");
  const calculResultat = document.querySelector(".calcul-resultat");
  const resultatFinal = document.querySelector(".resultat-final");
  let nombre1;
  let nombre2;

  gridCalculatrice.addEventListener("click", (e) => {
    const clicked = e.target.closest(".btn-calculatrice");
    console.log(clicked);
    if (!clicked) return;

    console.log(clicked.dataset.tab);
    switch (clicked.dataset.tab) {
      case "1":
        inputCalc2.value += 1;
        btnResultat.innerText += 1;
        break;
      case "2":
        inputCalc2.value += 2;
        btnResultat.innerText += 2;
        break;
      case "3":
        inputCalc2.value += 3;
        btnResultat.innerText += 3;
        break;
      case "4":
        inputCalc2.value += 4;
        btnResultat.innerText += 4;
        break;
      case "5":
        inputCalc2.value += 5;
        btnResultat.innerText += 5;
        break;
      case "0":
        inputCalc2.value += 0;
        btnResultat.innerText += 0;
        break;
      case "6":
        inputCalc2.value += 6;
        btnResultat.innerText += 6;
        break;
      case "7":
        inputCalc2.value += 7;
        btnResultat.innerText += 7;
        break;
      case "8":
        inputCalc2.value += 8;
        btnResultat.innerText += 8;
        break;
      case "9":
        inputCalc2.value += 9;
        btnResultat.innerText += 9;
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
};
