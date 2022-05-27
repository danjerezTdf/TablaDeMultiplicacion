/* Tablas de Multiplicación
• Diseñar un algoritmo que muestre por pantalla la tabla de
multiplicación del número ingresado por el usuario
• Para definir hasta qué número desea que muestre la tabla de
multiplicación, el usuario también deberá ingresar dicho valo */

let numeroIngresado: number = Number(
  prompt(`Ingrese Valor para conocer su tabla:`)
);
let numeroHasta: number = Number(
  prompt(`ingrese valor hasta el que se mostrara la tabla:`)
);
let multi: number = 0;
for (let i: number = 1; i <= numeroHasta; i++) {
  multi = numeroIngresado * i;
  console.log(`${numeroIngresado} x ${i} = ${multi}`);
}
