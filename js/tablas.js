const dibujarTabla = (etiqueta, datos) => {
  const cuerpoTabla = document.getElementById(etiqueta);
  datos.forEach((elemento) => {
    let fila = document.createElement("tr");
    let nombre = document.createElement("td");
    nombre.innerText = elemento.item;
    let valor = document.createElement("td");
    valor.innerText = elemento.valor;
    fila.appendChild(nombre);
    fila.appendChild(valor);
    cuerpoTabla.appendChild(fila);
  });
};

const agregarDato = (etiqueta, nombre, valor) => {
  const cuerpoTabla = document.getElementById(etiqueta);
  let dato = [{ item: nombre, valor: valor }];
  dibujarTabla(etiqueta, dato);
};

export { dibujarTabla, agregarDato };
