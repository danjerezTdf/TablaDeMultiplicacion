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
