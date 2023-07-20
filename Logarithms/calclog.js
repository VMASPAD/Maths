function calculate() {
    var base = document.getElementById("base").value;
    var number1 = parseFloat(document.getElementById("number1").value);
    var number2 = parseFloat(document.getElementById("number2").value);
    var result = document.getElementById("result");
    
    var log1 = Math.log(number1) / Math.log(base);
    var log2 = Math.log(number2) / Math.log(base);
    
    result.innerHTML = "Suma: " + (log1 + log2) + "<br>" +
                       "Resta: " + (log1 - log2) + "<br>" +
                       "Multiplicación: " + (log1 * log2) + "<br>" +
                       "División: " + (log1 / log2) + "<br>" +
                       "Exponente: "+ (number2 * (log1));
  }
  