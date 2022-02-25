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
];

const crearGrafica = (canvas2D, etiquetas, datos) => {
  const myChart = new Chart(canvas2D, {
    type: "doughnut",
    data: {
      labels: etiquetas,
      datasets: [
        {
          label: "# of Votes",
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
};

export { crearGrafica };
