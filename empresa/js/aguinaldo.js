document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('aguinaldoForm');
  var resultado = document.getElementById('resultado');
  var resultadoContenido = document.getElementById('resultadoContenido');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var nombre = document.getElementById('nombre').value;
    var sueldo = parseFloat(document.getElementById('sueldo').value);
    var meses = parseInt(document.getElementById('meses').value);
    var años = Math.floor(meses / 12);
    var sobrantes = meses % 12;

    var bonoAños = años * 2000;
    if (bonoAños > 10000) {
      bonoAños = 10000;
    }
    var bonoMeses = sobrantes * 100;
    var aguinaldo = bonoAños + bonoMeses;
    var total = sueldo + aguinaldo;
    resultado.classList.remove('d-none');
    resultadoContenido.innerHTML = 
      "<p><strong>Empleado:</strong> " + nombre + "</p>" +
      "<p><strong>Aguinaldo:</strong> $" + aguinaldo + "</p>" +
      "<p><strong>Total a pagar:</strong> $" + total + "</p>";
    console.log("Empleado:", nombre);
    console.log("Sueldo base:", sueldo);
    console.log("Meses trabajados:", meses);
    console.log("Aguinaldo:", aguinaldo);
    console.log("Total a pagar:", total);
  });
});

