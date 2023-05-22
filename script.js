
function calcular() {
  event.preventDefault()
  // Obter os valores dos campos de entrada
  var peso = parseFloat(document.getElementById("input-teste-1").value);
  var altura = parseFloat(document.getElementById("input-teste-2").value);

  // Verificar se os valores são válidos
  if (isNaN(peso) || isNaN(altura)) {
    alert("Por favor, insira valores numéricos válidos.");
    return;
  }
  // Calcular o IMC
  var imc = peso / (altura * altura);
  // Exibir o resultado
  var resultado = document.querySelector(".container2 h3");
  //resultado.textContent = "Seu IMC é: " + imc.toFixed(2);

  //realizar comparação de valores
  if (imc <= 18.5) {
    resultado.textContent = "Resultado: Seu IMC é: " + imc.toFixed(2) + ", você está abaixo do peso!";
  } else if (imc >= 18, 6 && imc <= 24.9) {
    resultado.textContent = "Resultado: Seu IMC é: " + imc.toFixed(2) + ", você está com o peso normal!";
  } else if (imc >= 25 && imc <= 29.9) {
    resultado.textContent = "Resultado: Seu IMC é: " + imc.toFixed(2) + ", você está com sobrepeso!";
  } else if (imc >= 30 && imc <= 34.9) {
    resultado.textContent = "Resultado: Seu IMC é: " + imc.toFixed(2) + ", você está com obesidade grau 1!";
  } else if (imc >= 35 && imc <= 39.9) {
    resultado.textContent = "Resultado: Seu IMC é: " + imc.toFixed(2) + ", você está com obesidade grau 2!";
  } else if (imc >= 40){
    resultado.textContent = "Resultado: Seu IMC é: " + imc.toFixed(2) + ", você está com obesidade grau 3!";
  }

}

