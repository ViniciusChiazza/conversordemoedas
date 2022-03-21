// converte real para dolar

function ConverterDolar() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);

  var valorEmReal = valorEmDolarNumerico * 5.06;
  console.log(valorEmReal);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido =
    "O resultado da conversão de dolares em reais é R$ é " +
    valorEmReal.toFixed(2);
  elementoValorConvertido.innerHTML = valorConvertido;
}

// ......................................................

// converte real para euro

function ConverterEuro() {
  var valorElementoEuro = document.getElementById("valor");
  var valor = valorElementoEuro.value;
  var valorEmEuroNumerico = parseFloat(valor);

  var valorEmReal = valorEmEuroNumerico * 5.52;
  console.log(valorEmReal);

  var elementoValorConvertidoEuro = document.getElementById(
    "valorConvertidoEuro"
  );
  var valorConvertidoEuro =
    "O resultado da conversão de euro para reais é R$  " +
    valorEmReal.toFixed(2);
  elementoValorConvertidoEuro.innerHTML = valorConvertidoEuro;
}