/*
  Ejericio 1
  Crear un programa que basado en la edad de una persona
  imprima los siguientes mensajes:
  0 - 5: "Eres un bebe"
  6 - 11: "Eres un niño"
  12 - 18: "Eres un adolescente"
  19 - 30: "Eres un joven"
  31 - 64: "Eres un adulto"
  65 - 120: "Eres un adulto mayor"
  Si la edad es menor a 0 o mayor a 120 imprimir:
  "La edad no es valida (Eres una imposibilidad en este mundo)"

  Ejercicio 2
  Crear un programa que basado en el dia de la semana
  imprima los siguientes mensajes:
  Lunes - Viernes: "Es un dia de la semana"
  Sabado - Domingo: "Es un fin de semana"
  Si no es ninguno de los dias anteriores imprimir:
  "Por favor ingrese un dia de la semana valido"
*/

//EJERCICIO 1

var edad = prompt("Dime tu edad: ");
if (edad >= 0 && edad <= 5) {
  alert("Eres un bebe");
} else if (edad >= 6 && edad <= 11) {
  alert("Eres un nino");
} else if (edad >= 12 && edad <= 18) {
  alert("Eres un adolescente");
} else if (edad >= 19 && edad <= 30) {
  alert("Eres un joven");
} else if (edad >= 31 && edad <= 64) {
  alert("Eres un adulto");
} else if (edad >= 65 && edad <= 120) {
  alert("Eres un adulto mayor");
} else {
  alert("La edad no es valida (Eres una imposibilidad en este mundo)");
}

//EJERCICIO 2

var dia = prompt("Escribe un dia: ");

if (
  dia == "lunes" ||
  dia == "martes" ||
  dia == "miercoles" ||
  dia == "jueves" ||
  dia == "viernes"
) {
  alert("Es un dia de la semana");
} else if (dia == "sabado" || dia == "domingo") {
  alert("Es un fin de semana");
} else {
  alert("Por favor ingrese un dia de la semana valido");
}
