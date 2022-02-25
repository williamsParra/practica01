import { crearGrafica } from "./graficos.js";
import { dibujarTabla, agregarDato } from "./tablas.js";

const TABLA = "cuerpoTabla";

let info = [
  { item: "", valor:  ""},

];

window.onload = () => {
  const btnIngreso = document.getElementById("agregar");
  btnIngreso.addEventListener("click", () => {
    let clave = document.getElementById("clave");
    let valor = document.getElementById("valor");
    console.log(clave.value)
    if (!isNaN(valor.value)) {
      agregarDato(TABLA, clave.value, parseInt(valor.value));
    }
  });
  const ctx = document.getElementById("grafica").getContext("2d");
  let etiquetas = info.map((info) => info.item);
  let datosGrafico = info.map((info) => info.valor);
  console.log(etiquetas);
  crearGrafica(ctx, etiquetas, datosGrafico);
  dibujarTabla("cuerpoTabla", info);
};
