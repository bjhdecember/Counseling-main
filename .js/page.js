// Charts
let myChart = document.getElementById('myChart').getContext('2d');
let cancerChart = new Chart(myChart, {
type: 'bar', //bar, horizontalBar, pie, line, doughnut radar
data:{
    labels:['Stage 1', 'Stage 2', 'Stage 3'],
    datasets:[{
        label:['Survival Rates'],
        data:[98,
              90, 
              66
            ]
    }]
},
options:{}
});
