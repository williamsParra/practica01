//constante con colores para graficos.
const COLORES = [
  "#d35400",
  "#9b59b6",
  "#2980b9",
  "#e67e22",
  "#e74c3c",
  "#3498db",
  "#2ecc71",
  "#f39c12",
  "#c0392b",
  "#27ae60",
  "#16a085",
  "#1abc9c",
];

const TIPO_GRAFICOS = [
  { nombre: "Barras", tipo: "bar" },
  { nombre: "Dona", tipo: "doughnut" },
  { nombre: "Pie", tipo: "pie" },
  { nombre: "Lineas", tipo: "line" },
  { nombre: "Burbujas", tipo: "bubble" },
];

const crearGrafica = (canvas2D, etiquetas, datos, tipoGrafico) => {
  const Grafica = new Chart(canvas2D, {
    type: tipoGrafico,
    data: {
      labels: etiquetas,
      datasets: [
        {
          label: "Grafico",
          data: datos,
          backgroundColor: COLORES,
          borderColor: "#000",
          borderWidth: 1.5,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      plugins: {
        legend: {
          display: true,
          labels: {
            color: "#000",
          },
        },
      },
    },
  });

  return Grafica;
};

const agregarDatosGrafico = (grafica, etiqueta, dato) => {
  grafica.data.labels.push(etiqueta);
  //grafica.data.datasets.data.push(dato);
  grafica.data.datasets.forEach((dataset) => {
    dataset.data.push(dato);
  });
  grafica.update();
};

const cambiarGrafico = (grafica,tipoGrafico)=>{
  grafica.config.type=tipoGrafico;  
  grafica.update();

};




export { TIPO_GRAFICOS, crearGrafica, agregarDatosGrafico , cambiarGrafico };
