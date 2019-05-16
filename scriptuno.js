function operaciones(op) {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;

  //validamos los numeros 1 y 2
  if (isNaN(parseFloat(num1))) {
    alert("Ingrese el numero 1");
    document.getElementById("num1").innerText = "0";
    document.getElementById("num1").focus();
  } else if (isNaN(parseFloat(num2))) {
    alert("Ingrese el numero 2");
    document.getElementById("num2").innerText = "0";
    document.getElementById("num2").focus();
  } else {
    //se realiza la operacion segun sea el caso
    switch (op) {
      case "sumar":
        alert(parseInt(num1) + parseInt(num2));
        break;
      case "restar":
        alert(parseInt(num1) - parseInt(num2));
        break;
      case "multiplicar":
        alert(parseInt(num1) * parseInt(num2));
        break;
      case "dividir":
        alert(parseInt(num1) / parseInt(num2));
        break;
      case "square":
        alert(Math.pow(parseFloat(num1), 1 / parseFloat(num2)));
        break;
      case "power":
        alert(parseFloat(num1) ** parseFloat(num2));
        break;
    }
  }
}
