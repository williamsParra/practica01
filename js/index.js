let datos={item:"",valor:2};
const COLORES = ["#2980b9","#3498db","#1abc9c","#16a085","#27ae60","#2ecc71","#f1c40f","#f39c12","#e67e22","#d35400","#c0392b","#e74c3c","#9b59b6","#8e44ad","#ecf0f1","#bdc3c7","#95a5a6","#7f8c8d","#34495e","#2c3c50"];

window.onload = ()=>{
    console.log("test");
    console.log(COLORES.length);
    
const ctx = document.getElementById('grafica').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: COLORES,
            borderColor: "#000",
            borderWidth: 1.5
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins:{
            legend:{
                display:false,
                labels:{
                    color:"#000"
                }
            }
        }
    }
});

}