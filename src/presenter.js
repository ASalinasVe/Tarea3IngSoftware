import sumar from "./sumador.js";
import multiplicar from "./multiplicador.js";

//sumar
const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");


form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);
  console.log("Sumando:", firstNumber, secondNumber);

  div.innerHTML = `<p> Resultado: ${sumar(firstNumber, secondNumber)}</p>`;
});

//multiplicar
const primero = document.querySelector("#prim-num");
const segundo = document.querySelector("#seg-num");
const form2 = document.querySelector("#mult-form");
const div2 = document.querySelector("#resultado-mult");


form2.addEventListener("submit", (event)=> {
  event.preventDefault();

  const primNumber = Number.parseInt(primero.value);
  const segNumber = Number.parseInt(segundo.value);

  div2.innerHTML = `<p> Resultado: ${multiplicar(primNumber,segNumber)} </p>`;
  

});