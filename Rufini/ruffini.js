function rufini() {
  const selecForm = document.getElementById("selecForm").value;

  function grade2() {
    const term1 = parseFloat(document.getElementById("term1").value);
    const term2 = parseFloat(document.getElementById("term2").value);
    const term3 = parseFloat(document.getElementById("term3").value);
    const rootX = parseFloat(document.getElementById("rootX").value);

    //Proceso de solucion
    const val1 = rootX * term1;
    const val2 = term2 + val1;

    const val3 = rootX * val2;
    const val4 = term3 + val3;
    //---------------------------------------
    var poli = `(x ${
      rootX < 0 ? ` + ${rootX < 0 ? rootX ** 2 : rootX}` : ` - ${-rootX}`
    }) * (${term1}x + ${val2}) ${val4}`;
    document.getElementById("resultado").innerHTML = `${poli}`;
  }

  function grade3() {
    const term1 = parseFloat(document.getElementById("term1").value);
    const term2 = parseFloat(document.getElementById("term2").value);
    const term3 = parseFloat(document.getElementById("term3").value);
    const term4 = parseFloat(document.getElementById("term4").value);
    const rootX = parseFloat(document.getElementById("rootX").value);

    //Proceso de solucion
    const val1 = rootX * term1;
    const val2 = term2 + val1;

    const val3 = rootX * val2;
    const val4 = val3 + term3;

    const val5 = rootX * val4;
    const val6 = val5 + term4;

    var poli =
      `(x ${
        rootX < 0 ? ` + ${rootX < 0 ? rootX ** 2 : rootX}` : ` - ${-rootX}`
      }) * (${term1}x^2 ${val2}x ${val4 > 0 ? `+ ${val4}` : -val4}) +` + val6;
    document.getElementById("resultado").innerHTML = `${poli}`;
  }
  function grade4() {
    const term1 = parseFloat(document.getElementById("term1").value);
    const term2 = parseFloat(document.getElementById("term2").value);
    const term3 = parseFloat(document.getElementById("term3").value);
    const term4 = parseFloat(document.getElementById("term4").value);
    const term5 = parseFloat(document.getElementById("term5").value);
    const rootX = parseFloat(document.getElementById("rootX").value);

    // Proceso de solucion
    const val1 = rootX * term1;
    const val2 = term2 + val1;

    const val3 = rootX * val2;
    const val4 = term3 + val3;

    const val5 = rootX * val4;
    const val6 = term4 + val5;

    const val7 = rootX * val6;
    const val8 = term5 + val7;

    const poli = `(x ${
      rootX < 0 ? ` + ${rootX < 0 ? rootX ** 2 : rootX}` : ` - ${-rootX}`
    }) * (x^3 ${val2 > 0 ? `+ ${val2}x^2` : ` - ${-val2}x^2`} ${
      val4 > 0 ? `+ ${val4}x` : ` - ${-val4}x`
    } + ${val6}) + ${val8}`;
    document.getElementById("resultado").innerHTML = `${poli}`;
  }
  function grade5() {
    const term1 = parseFloat(document.getElementById("term1").value);
    const term2 = parseFloat(document.getElementById("term2").value);
    const term3 = parseFloat(document.getElementById("term3").value);
    const term4 = parseFloat(document.getElementById("term4").value);
    const term5 = parseFloat(document.getElementById("term5").value);
    const term6 = parseFloat(document.getElementById("term6").value);
    const rootX = parseFloat(document.getElementById("rootX").value);

    // Proceso de solución
    const val1 = rootX * term1;
    const val2 = term2 + val1;

    const val3 = rootX * val2;
    const val4 = term3 + val3;

    const val5 = rootX * val4;
    const val6 = term4 + val5;

    const val7 = rootX * val6;
    const val8 = term5 + val7;

    const val9 = rootX * val8;
    const val10 = term6 + val9;

    const poli = `(x ${
      rootX < 0 ? ` + ${rootX < 0 ? rootX ** 2 : rootX}` : ` - ${-rootX}`
    }) * (x^4 ${val2 > 0 ? `+ ${val2}x^3` : ` - ${-val2}x^3`} ${
      val4 > 0 ? `+ ${val4}x^2` : ` - ${-val4}x^2`
    } ${val6 > 0 ? `+ ${val6}x` : ` - ${-val6}x`} + ${val8}) ${
      val10 > 0 ? `+ ${val10}` : ` - ${-val10}`
    }`;
    document.getElementById("resultado").innerHTML = `${poli}`;
  }
  function grade6() {
    const term1 = parseFloat(document.getElementById("term1").value);
    const term2 = parseFloat(document.getElementById("term2").value);
    const term3 = parseFloat(document.getElementById("term3").value);
    const term4 = parseFloat(document.getElementById("term4").value);
    const term5 = parseFloat(document.getElementById("term5").value);
    const term6 = parseFloat(document.getElementById("term6").value);
    const term7 = parseFloat(document.getElementById("term7").value);
    const rootX = parseFloat(document.getElementById("rootX").value);

    // Proceso de solución
    const val1 = rootX * term1;
    const val2 = term2 + val1;

    const val3 = rootX * val2;
    const val4 = term3 + val3;

    const val5 = rootX * val4;
    const val6 = term4 + val5;

    const val7 = rootX * val6;
    const val8 = term5 + val7;

    const val9 = rootX * val8;
    const val10 = term6 + val9;

    const val11 = rootX * val10;
    const val12 = term7 + val11;

    const poli = `(x ${
      rootX < 0 ? ` + ${rootX < 0 ? rootX ** 2 : rootX}` : ` - ${-rootX}`
    }) * (x^5 ${val2 > 0 ? `+ ${val2}x^4` : ` - ${-val2}x^4`} ${
      val4 > 0 ? `+ ${val4}x^3` : ` - ${-val4}x^3`
    } ${val6 > 0 ? `+ ${val6}x^2` : ` - ${-val6}x^2`} ${
      val8 > 0 ? `+ ${val8}x` : ` - ${-val8}x`
    } + ${val10}) ${val12 > 0 ? `+ ${val12}` : ` - ${-val12}`}`;
    document.getElementById("resultado").innerHTML = `${poli}`;
  }

  function grade7() {
    const term1 = parseFloat(document.getElementById("term1").value);
    const term2 = parseFloat(document.getElementById("term2").value);
    const term3 = parseFloat(document.getElementById("term3").value);
    const term4 = parseFloat(document.getElementById("term4").value);
    const term5 = parseFloat(document.getElementById("term5").value);
    const term6 = parseFloat(document.getElementById("term6").value);
    const term7 = parseFloat(document.getElementById("term7").value);
    const term8 = parseFloat(document.getElementById("term8").value);
    const rootX = parseFloat(document.getElementById("rootX").value);

    // Proceso de solución
    const val1 = rootX * term1;
    const val2 = term2 + val1;

    const val3 = rootX * val2;
    const val4 = term3 + val3;

    const val5 = rootX * val4;
    const val6 = term4 + val5;

    const val7 = rootX * val6;
    const val8 = term5 + val7;

    const val9 = rootX * val8;
    const val10 = term6 + val9;

    const val11 = rootX * val10;
    const val12 = term7 + val11;

    const val13 = rootX * val12;
    const val14 = term8 + val13;

    const poli = `(x ${rootX > 0 ? ` + ${rootX}` : ` - ${-rootX}`}) * (x^6 ${
      val2 > 0 ? `+ ${val2}x^5` : ` - ${-val2}x^5`
    } ${val4 > 0 ? `+ ${val4}x^4` : ` - ${-val4}x^4`} ${
      val6 > 0 ? `+ ${val6}x^3` : ` - ${-val6}x^3`
    } ${val8 > 0 ? `+ ${val8}x^2` : ` - ${-val8}x^2`} ${
      val10 > 0 ? `+ ${val10}x` : ` - ${-val10}x`
    } + ${val12}) ${val14 > 0 ? `+ ${val14}` : ` - ${-val14}`}`;
    document.getElementById("resultado").innerHTML = `${poli}`;
  }

  function grade8() {
    const term1 = parseFloat(document.getElementById("term1").value);
    const term2 = parseFloat(document.getElementById("term2").value);
    const term3 = parseFloat(document.getElementById("term3").value);
    const term4 = parseFloat(document.getElementById("term4").value);
    const term5 = parseFloat(document.getElementById("term5").value);
    const term6 = parseFloat(document.getElementById("term6").value);
    const term7 = parseFloat(document.getElementById("term7").value);
    const term8 = parseFloat(document.getElementById("term8").value);
    const term9 = parseFloat(document.getElementById("term9").value);
    const rootX = parseFloat(document.getElementById("rootX").value);

    // Proceso de solución
    const val1 = rootX * term1;
    const val2 = term2 + val1;

    const val3 = rootX * val2;
    const val4 = term3 + val3;

    const val5 = rootX * val4;
    const val6 = term4 + val5;

    const val7 = rootX * val6;
    const val8 = term5 + val7;

    const val9 = rootX * val8;
    const val10 = term6 + val9;

    const val11 = rootX * val10;
    const val12 = term7 + val11;

    const val13 = rootX * val12;
    const val14 = term8 + val13;

    const val15 = rootX * val14;
    const val16 = term9 + val15;

    const poli = `(x ${rootX > 0 ? ` + ${rootX}` : ` - ${-rootX}`}) * (x^7 ${
      val2 > 0 ? `+ ${val2}x^6` : ` - ${-val2}x^6`
    } ${val4 > 0 ? `+ ${val4}x^5` : ` - ${-val4}x^5`} ${
      val6 > 0 ? `+ ${val6}x^4` : ` - ${-val6}x^4`
    } ${val8 > 0 ? `+ ${val8}x^3` : ` - ${-val8}x^3`} ${
      val10 > 0 ? `+ ${val10}x^2` : ` - ${-val10}x^2`
    } ${val12 > 0 ? `+ ${val12}x` : ` - ${-val12}x`} + ${val14}) ${
      val16 > 0 ? `+ ${val16}` : ` - ${-val16}`
    }`;
    document.getElementById("resultado").innerHTML = `${poli}`;
  }
  function grade9() {
    const term1 = parseFloat(document.getElementById("term1").value);
    const term2 = parseFloat(document.getElementById("term2").value);
    const term3 = parseFloat(document.getElementById("term3").value);
    const term4 = parseFloat(document.getElementById("term4").value);
    const term5 = parseFloat(document.getElementById("term5").value);
    const term6 = parseFloat(document.getElementById("term6").value);
    const term7 = parseFloat(document.getElementById("term7").value);
    const term8 = parseFloat(document.getElementById("term8").value);
    const term9 = parseFloat(document.getElementById("term9").value);
    const term10 = parseFloat(document.getElementById("term10").value);
    const rootX = parseFloat(document.getElementById("rootX").value);

    // Proceso de solución
    const val1 = rootX * term1;
    const val2 = term2 + val1;

    const val3 = rootX * val2;
    const val4 = term3 + val3;

    const val5 = rootX * val4;
    const val6 = term4 + val5;

    const val7 = rootX * val6;
    const val8 = term5 + val7;

    const val9 = rootX * val8;
    const val10 = term6 + val9;

    const val11 = rootX * val10;
    const val12 = term7 + val11;

    const val13 = rootX * val12;
    const val14 = term8 + val13;

    const val15 = rootX * val14;
    const val16 = term9 + val15;

    const val17 = rootX * val16;
    const val18 = term10 + val17;

    const poli = `(x ${rootX > 0 ? ` + ${rootX}` : ` - ${-rootX}`}) * (x^8 ${
      val2 > 0 ? `+ ${val2}x^7` : ` - ${-val2}x^7`
    } ${val4 > 0 ? `+ ${val4}x^6` : ` - ${-val4}x^6`} ${
      val6 > 0 ? `+ ${val6}x^5` : ` - ${-val6}x^5`
    } ${val8 > 0 ? `+ ${val8}x^4` : ` - ${-val8}x^4`} ${
      val10 > 0 ? `+ ${val10}x^3` : ` - ${-val10}x^3`
    } ${val12 > 0 ? `+ ${val12}x^2` : ` - ${-val12}x^2`} ${
      val14 > 0 ? `+ ${val14}x` : ` - ${-val14}x`
    } + ${val18})`;
    document.getElementById("resultado").innerHTML = `${poli}`;
  }
  function grade10() {
    const term1 = parseFloat(document.getElementById("term1").value);
    const term2 = parseFloat(document.getElementById("term2").value);
    const term3 = parseFloat(document.getElementById("term3").value);
    const term4 = parseFloat(document.getElementById("term4").value);
    const term5 = parseFloat(document.getElementById("term5").value);
    const term6 = parseFloat(document.getElementById("term6").value);
    const term7 = parseFloat(document.getElementById("term7").value);
    const term8 = parseFloat(document.getElementById("term8").value);
    const term9 = parseFloat(document.getElementById("term9").value);
    const term10 = parseFloat(document.getElementById("term10").value);
    const term11 = parseFloat(document.getElementById("term11").value);
    const rootX = parseFloat(document.getElementById("rootX").value);

    // Proceso de solución
    const val1 = rootX * term1;
    const val2 = term2 + val1;

    const val3 = rootX * val2;
    const val4 = term3 + val3;

    const val5 = rootX * val4;
    const val6 = term4 + val5;

    const val7 = rootX * val6;
    const val8 = term5 + val7;

    const val9 = rootX * val8;
    const val10 = term6 + val9;

    const val11 = rootX * val10;
    const val12 = term7 + val11;

    const val13 = rootX * val12;
    const val14 = term8 + val13;

    const val15 = rootX * val14;
    const val16 = term9 + val15;

    const val17 = rootX * val16;
    const val18 = term10 + val17;

    const val19 = rootX * val18;
    const val20 = term11 + val19;

    // Polinomio
    const poli = `(x ${rootX > 0 ? `+ ${rootX}` : `- ${-rootX}`}) * (x^9 ${
      val2 > 0 ? `+ ${val2}x^8` : `- ${-val2}x^8`
    } ${val4 > 0 ? `+ ${val4}x^7` : `- ${-val4}x^7`} ${
      val6 > 0 ? `+ ${val6}x^6` : `- ${-val6}x^6`
    } ${val8 > 0 ? `+ ${val8}x^5` : `- ${-val8}x^5`} ${
      val10 > 0 ? `+ ${val10}x^4` : `- ${-val10}x^4`
    } ${val12 > 0 ? `+ ${val12}x^3` : `- ${-val12}x^3`} ${
      val14 > 0 ? `+ ${val14}x^2` : `- ${-val14}x^2`
    } ${val16 > 0 ? `+ ${val16}x` : `- ${-val16}x`} + ${val20})`;

    document.getElementById("resultado").innerHTML = `${poli}`;
  }

  switch (selecForm) {
    case "grade2":
      grade2();
      break;
    case "grade3":
      grade3();
      break;
    case "grade4":
      grade4();
      break;
    case "grade5":
      grade5();
      break;
    case "grade6":
      grade6();
      break;
    case "grade7":
      grade7();
      break;
    case "grade8":
      grade8();
      break;
    case "grade9":
      grade9();
      break;
    case "grade10":
      grade10();
      break;
  }
}
function mostrarTexto() {
  const opcionesSelect = document.getElementById("selecForm");
  const textoOcultoDiv = document.getElementById("textoOculto");
  const opcionSeleccionada = opcionesSelect.value;

  // Ocultamos el texto si se selecciona la primera opción
  if (opcionSeleccionada === "grade2") {
    textoOcultoDiv.style.display = "block";
    document.getElementById("textoOculto").innerHTML = `
      <div>
        <br>
        <input type="text" id="term1" class="w-8" style="display: inline-block;">
        <label for="term1" style="display: inline-block;">$$x^{2}$$</label>
        
        <input type="text" id="term2" class="w-8" style="display: inline-block;">
        <label for="term2" style="display: inline-block;">$$x$$</label>
        
        <input type="text" id="term3" class="w-8" style="display: inline-block;">
        <label for="term3" style="display: inline-block;">$$C$$</label>
        <br>
        <label for="coeficientes">Termino evauluativo / Raiz</label>
        <input type="text" id="rootX" class="w-8"><br>
        <button onclick="rufini()">Calcular</button>
        <br>
        <h2>Resultado:</h2>
        <p id="resultado"></p>
      </div>
    `;
    MathJax.typeset();
  } else if (opcionSeleccionada === "grade3") {
    // Mostramos el texto para las demás opciones
    textoOcultoDiv.style.display = "block";
    document.getElementById("textoOculto").innerHTML = `
<div>
<br>
<input type="text" id="term1" class="w-8" style="display: inline-block;">
    <label for="term1" style="display: inline-block;">$$x^3$$</label>
    
<input type="text" id="term2" class="w-8" style="display: inline-block;">
    <label for="term1" style="display: inline-block;">$$x^2$$</label>
    
 <input type="text" id="term3" class="w-8" style="display: inline-block;">
    <label for="term2" style="display: inline-block;">$$x$$</label>
   
<input type="text" id="term4" class="w-8" style="display: inline-block;">
    <label for="term3" style="display: inline-block;">$$C$$</label>
    
    <br>
    <label for="coeficientes">Termino evauluativo / Raiz</label>
    <input type="text" id="rootX" class="w-8"><br>
    <button onclick="rufini()">Calcular</button>
    <br>
    <h2>Resultado:</h2>
    <p id="resultado"></p>
</div>`;MathJax.typeset();
  } else if (opcionSeleccionada === "grade4") {
    // Mostramos el texto para las demás opciones
    textoOcultoDiv.style.display = "block";
    document.getElementById("textoOculto").innerHTML = `
    <div>
    <br>
    <input type="text" id="term1" class="w-8" style="display: inline-block;">
        <label for="term1" style="display: inline-block;">$$x^4$$</label>
        
        <input type="text" id="term2" class="w-8" style="display: inline-block;">
        <label for="term1" style="display: inline-block;">$$x^3$$</label>
        
        <input type="text" id="term3" class="w-8" style="display: inline-block;">
        <label for="term1" style="display: inline-block;">$$x^2$$</label>
        
        <input type="text" id="term4" class="w-8" style="display: inline-block;">
        <label for="term2" style="display: inline-block;">$$x$$</label>
        
        <input type="text" id="term5" class="w-8" style="display: inline-block;">
        <label for="term3" style="display: inline-block;">C</label>
        
        <br>
        <label for="coeficientes">Termino evauluativo / Raiz</label>
        <input type="text" id="rootX" class="w-8"><br>
        <button onclick="rufini()">Calcular</button>
        <br>
        <h2>Resultado:</h2>
        <p id="resultado"></p>
    </div>`;MathJax.typeset();
  } else if (opcionSeleccionada === "grade5") {
    // Mostramos el texto para las demás opciones
    textoOcultoDiv.style.display = "block";
    document.getElementById("textoOculto").innerHTML = `
    <div>
    <br>
    <input type="text" id="term1" class="w-8" style="display: inline-block;">
        <label for="term1" style="display: inline-block;">$$x^5$$</label>
        
        <input type="text" id="term2" class="w-8" style="display: inline-block;">
        <label for="term1" style="display: inline-block;">$$x^4$$</label>
        
        <input type="text" id="term3" class="w-8">
        <label for="term1" style="display: inline-block;">$$x^3$$</label>
        
        <input type="text" id="term4" class="w-8" style="display: inline-block;">
        <label for="term1" style="display: inline-block;">$$x^2$$</label>

        <input type="text" id="term5" class="w-8" style="display: inline-block;">
        <label for="term2" style="display: inline-block;">$$x$$</label>
        
        <input type="text" id="term6" class="w-8" style="display: inline-block;">
        <label for="term3" style="display: inline-block;">C</label>
        
        <br>
        <label for="coeficientes">Termino evauluativo / Raiz</label>
        <input type="text" id="rootX" class="w-8"><br>

        <button onclick="rufini()">Calcular</button>
        <br>
        <h2>Resultado:</h2>
        <p id="resultado"></p>
    </div>`;MathJax.typeset();
  } else if (opcionSeleccionada === "grade6") {
    // Mostramos el texto para las demás opciones
    textoOcultoDiv.style.display = "block";
    document.getElementById("textoOculto").innerHTML = `
    <div>
    <br>
    <input type="text" id="term1" class="w-8" class="w-8" style="display: inline-block;">
        <label for="term1" class="w-8" style="display: inline-block;">$$x^6$$</label>
        
        <input type="text" id="term2" class="w-8" class="w-8" style="display: inline-block;">
        <label for="term1" class="w-8" style="display: inline-block;">$$x^5$$</label>
        
        <input type="text" id="term3" class="w-8" class="w-8" style="display: inline-block;">
        <label for="term1" class="w-8" style="display: inline-block;">$$x^4$$</label>

        <input type="text" id="term4" class="w-8" class="w-8" style="display: inline-block;">
        <label for="term1" class="w-8" style="display: inline-block;">$$x^3$$</label>
        
        <input type="text" id="term5" class="w-8" class="w-8" style="display: inline-block;">
        <label for="term1" class="w-8" style="display: inline-block;">$$x^2$$</label>

        <input type="text" id="term6" class="w-8" class="w-8" style="display: inline-block;">
        <label for="term2" class="w-8" style="display: inline-block;">$$x$$</label>
        
        <input type="text" id="term7" class="w-8" class="w-8" style="display: inline-block;">
        <label for="term3" class="w-8" style="display: inline-block;">$$C$$</label>
        
        <br>
        <label for="coeficientes">Termino evauluativo / Raiz</label>
        <input type="text" id="rootX" class="w-8"><br>
        <button onclick="rufini()">Calcular</button>
        <br>
        <h2>Resultado:</h2>
        <p id="resultado"></p>
    </div>`;MathJax.typeset();
  } else if (opcionSeleccionada === "grade7") {
    // Mostramos el texto para las demás opciones
    textoOcultoDiv.style.display = "block";
    document.getElementById("textoOculto").innerHTML = `
    <div>
    <br>
    <input type="text" id="term1" class="w-8" class="w-8" style="display: inline-block;">
        <label for="term1" class="w-8" style="display: inline-block;">$$x^7$$</label>
        
        <input type="text" id="term2" class="w-8" class="w-8" style="display: inline-block;">
        <label for="term1" class="w-8" style="display: inline-block;">$$x^6$$</label>
        
        <input type="text" id="term3" class="w-8" class="w-8" style="display: inline-block;">
        <label for="term1" class="w-8" style="display: inline-block;">$$x^5$$</label>

        <input type="text" id="term4" class="w-8" class="w-8" style="display: inline-block;">
        <label for="term1" class="w-8" style="display: inline-block;">$$x^4$$</label>
        
        <input type="text" id="term5" class="w-8" class="w-8" style="display: inline-block;">
        <label for="term1" class="w-8" style="display: inline-block;">$$x^3$$</label>

        <input type="text" id="term6" class="w-8" class="w-8" style="display: inline-block;">
        <label for="term1" class="w-8" style="display: inline-block;">$$x^2$$</label>

        <input type="text" id="term7" class="w-8" class="w-8" style="display: inline-block;">
        <label for="term2" class="w-8" style="display: inline-block;">$$x$$</label>
        
        <input type="text" id="term8" class="w-8" class="w-8" style="display: inline-block;">
        <label for="term3">C</label>
        
        <br>
        <label for="coeficientes">Termino evauluativo / Raiz</label>
        <input type="text" id="rootX" class="w-8"><br>
        <button onclick="rufini()">Calcular</button>
        <br>
        <h2>Resultado:</h2>
        <p id="resultado"></p>
    </div>`;MathJax.typeset();
  } else if (opcionSeleccionada === "grade8") {
    // Mostramos el texto para las demás opciones
    textoOcultoDiv.style.display = "block";
    document.getElementById("textoOculto").innerHTML = `
    <div>
    <br>
    <input type="text" id="term1" class="w-8">
        <label for="term1" class="w-8" style="display: inline-block;">$$x^8$$</label>
        
        <input type="text" id="term2" class="w-8" class="w-8" style="display: inline-block;">
        <label for="term1" class="w-8" style="display: inline-block;">$$x^7$$</label>
        
        <input type="text" id="term3" class="w-8" class="w-8" style="display: inline-block;">
        <label for="term1" class="w-8" style="display: inline-block;">$$x^6$$</label>

        <input type="text" id="term4" class="w-8" class="w-8" style="display: inline-block;">
        <label for="term1" class="w-8" style="display: inline-block;">$$x^5$$</label>

        <input type="text" id="term5" class="w-8" class="w-8" style="display: inline-block;">
        <label for="term1" class="w-8" style="display: inline-block;">$$x^4$$</label>
        
        <input type="text" id="term6" class="w-8" class="w-8" style="display: inline-block;">
        <label for="term1" class="w-8" style="display: inline-block;">$$x^3$$</label>

        <input type="text" id="term7" class="w-8" class="w-8" style="display: inline-block;">
        <label for="term1" class="w-8" style="display: inline-block;">$$x^2$$</label>

        <input type="text" id="term8" class="w-8" class="w-8" style="display: inline-block;">
        <label for="term2" class="w-8" style="display: inline-block;">$$x$$</label>
        
        <input type="text" id="term9" class="w-8" class="w-8" style="display: inline-block;">
        <label for="term3">C</label>
        
        <br>
        <label for="coeficientes">Termino evauluativo / Raiz</label>
        <input type="text" id="rootX" class="w-8"><br>
        <button onclick="rufini()">Calcular</button>
        <br>
        <h2>Resultado:</h2>
        <p id="resultado"></p>
    </div>`;MathJax.typeset();
  } else if (opcionSeleccionada === "grade9") {
    // Mostramos el texto para las demás opciones
    textoOcultoDiv.style.display = "block";
    document.getElementById("textoOculto").innerHTML = `
    <div>
    <br>
    <input type="text" id="term1" class="w-8" class="w-8" style="display: inline-block;">
        <label for="term1" class="w-8" style="display: inline-block;">$$x^9$$</label>
        
        <input type="text" id="term2" class="w-8" class="w-8" style="display: inline-block;">
        <label for="term1" class="w-8" style="display: inline-block;">$$x^8$$</label>
        
        <input type="text" id="term3" class="w-8" class="w-8" style="display: inline-block;">
        <label for="term1" class="w-8" style="display: inline-block;">$$x^7$$</label>

        <input type="text" id="term4" class="w-8" class="w-8" style="display: inline-block;">
        <label for="term1" class="w-8" style="display: inline-block;">$$x^6$$</label>

        <input type="text" id="term5" class="w-8" class="w-8" style="display: inline-block;">
        <label for="term1" class="w-8" style="display: inline-block;">$$x^5$$</label>

        <input type="text" id="term6" class="w-8" class="w-8" style="display: inline-block;">
        <label for="term1" class="w-8" style="display: inline-block;">$$x^4$$</label>
        
        <input type="text" id="term7" class="w-8" class="w-8" style="display: inline-block;">
        <label for="term1" class="w-8" style="display: inline-block;">$$x^3$$</label>

        <input type="text" id="term8" class="w-8" class="w-8" style="display: inline-block;">
        <label for="term1" class="w-8" style="display: inline-block;">$$x^2$$</label>

        <input type="text" id="term9" class="w-8" class="w-8" style="display: inline-block;">
        <label for="term2" class="w-8" style="display: inline-block;">$$x$$</label>
        
        <input type="text" id="term10" class="w-8">
        <label for="term3">C</label>
        
        <br>
        <label for="coeficientes">Termino evauluativo / Raiz</label>
        <input type="text" id="rootX" class="w-8"><br>
        <button onclick="rufini()">Calcular</button>
        <br>
        <h2>Resultado:</h2>
        <p id="resultado"></p>
    </div>`;MathJax.typeset();
  } else if (opcionSeleccionada === "grade10") {
    // Mostramos el texto para las demás opciones
    textoOcultoDiv.style.display = "block";
    document.getElementById("textoOculto").innerHTML = `
    <div>
    <br>
    <input type="text" id="term1" class="w-8" class="w-8" style="display: inline-block;">
        <label for="term1" class="w-8" style="display: inline-block;">$$x^{10}$$</label>
        
        <input type="text" id="term2" class="w-8" class="w-8" style="display: inline-block;">
        <label for="term1" class="w-8" style="display: inline-block;">$$x^9$$</label>
        
        <input type="text" id="term3" class="w-8" class="w-8" style="display: inline-block;">
        <label for="term1" class="w-8" style="display: inline-block;">$$x^8$$</label>

        <input type="text" id="term4" class="w-8" class="w-8" style="display: inline-block;">
        <label for="term1" class="w-8" style="display: inline-block;">$$x^7$$</label>

        <input type="text" id="term5" class="w-8" class="w-8" style="display: inline-block;">
        <label for="term1" class="w-8" style="display: inline-block;">$$x^6$$</label>

        <input type="text" id="term6" class="w-8" class="w-8" style="display: inline-block;">
        <label for="term1" class="w-8" style="display: inline-block;">$$x^5$$</label>

        <input type="text" id="term7" class="w-8" class="w-8" style="display: inline-block;">
        <label for="term1" class="w-8" style="display: inline-block;">$$x^4$$</label>
        
        <input type="text" id="term8" class="w-8" class="w-8" style="display: inline-block;">
        <label for="term1" class="w-8" style="display: inline-block;">$$x^3$$</label>

        <input type="text" id="term9" class="w-8" class="w-8" style="display: inline-block;">
        <label for="term1" class="w-8" style="display: inline-block;">$$x^2$$</label>

        <input type="text" id="term10" class="w-8" class="w-8" style="display: inline-block;">
        <label for="term2" class="w-8" style="display: inline-block;">$$x$$</label>
        
        <input type="text" id="term11" class="w-8" class="w-8" style="display: inline-block;">
        <label for="term3" class="w-8" style="display: inline-block;">C</label>
        
        <br>
        <label for="coeficientes">Termino evauluativo / Raiz</label>
        <input type="text" id="rootX" class="w-8"><br>
        <button onclick="rufini()">Calcular</button>
        <br>
        <h2>Resultado:</h2>
        <p id="resultado"></p>
    </div>`;MathJax.typeset();
  } else {
    textoOcultoDiv.style.display = "none";
  }
}