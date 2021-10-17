let form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  let inputPeso = e.target.querySelector('#peso');
  let inputAltura = e.target.querySelector('#altura');

  let peso = Number(inputPeso.value);
  let altura = Number(inputAltura.value);

  if (!peso) {
    setResultado('Peso inválido', false);
    return;
  }

  if (!altura) {
    setResultado('Altura inválida', false);
    return;
  }

  let imc = getImc(peso, altura);
  let nivelImc = getNivelImc(imc);

  let msg = `Seu IMC é ${imc} (${nivelImc}).`;

  setResultado(msg, true);
});

function getNivelImc (imc) {
  let nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
    'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
}

function getImc (peso, altura) {
  let imc = peso / altura ** 2;
  return imc.toFixed(2);
}

function criaP () {
  let p = document.createElement('p');
  return p;
}

function setResultado (msg, isValid) {
  let resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';

  let p = criaP();

  if (isValid) {
    p.classList.add('paragrafo-resultado');
  } else {
    p.classList.add('bad');
  }

  p.innerHTML = msg;
  resultado.appendChild(p);
}
