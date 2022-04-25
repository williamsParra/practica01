import { TIPO_GRAFICOS, crearGrafica ,agregarDatosGrafico ,cambiarGrafico } from "./graficos.js";
import { dibujarTabla, agregarDato } from "./tablas.js";

const TABLA = "cuerpoTabla";

let info = [{ item: "", valor: "" }];

window.onload = () => {

  //inicializar
  const CANVAS = document.getElementById("grafica").getContext("2d");

  //datos parra grafico
  let etiquetas = info.map((info) => info.item);
  let datosGrafico = info.map((info) => info.valor);

  //crear grafica
  const GRAFICA = crearGrafica(CANVAS, [], [], "bar");

  //dibujar menu de tipos de graficos.
  const selectorGrafico = document.getElementById("tipoGrafico");
  TIPO_GRAFICOS.forEach(element => {
    let menu = document.createElement("option");
    menu.text = element.nombre;
    menu.value = element.tipo;
    selectorGrafico.appendChild(menu);
  });

  //evento de cambio de grafico
  selectorGrafico.addEventListener("change", () => {
    //<- agregar evento de cambio de graficos.
    cambiarGrafico(GRAFICA,selectorGrafico.value);
  });

  //boton de agregar datos
  const btnIngreso = document.getElementById("agregar");

  //evento click
  btnIngreso.addEventListener("click", () => {
    let clave = document.getElementById("clave");
    let valor = document.getElementById("valor");
    if (clave.value != "" || valor.value != "") {
      if (!isNaN(valor.value)) {
        agregarDato(TABLA, clave.value, parseInt(valor.value));
        agregarDatosGrafico(GRAFICA,clave.value,parseInt(valor.value));
        clave.value = "";
        valor.value = "";
      }
    }
  });
  
};
