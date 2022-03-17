// Charts
let myChart = document.getElementById('myChart').getContext('2d');
let breastCancerChart = new Chart(myChart, {
type: 'bar', //bar, horizontalBar, pie, line, doughnut radar
data:{
    labels:['Stage 1', 'Stage 2', 'Stage 3'],
    datasets:[{
        label:['Survival Rates'],
        data:[98,
              90, 
              66
            ],
            backgroundColor:'Pink',
            borderwidth:6,
            borderColor:'red',
            hoverBorderWidth:'red',
            hoverBorderColor:'red'
    }]
},
options:{
    title:{
        display:true,
        text:'Breast Cancer 5 Year Survival Rates',
        fontSize:25
    },
    legend:{
        position:'center'
    }
}
});

let myChart2 = document.getElementById('myChart2').getContext('2d');
let OvarianCancerChart = new Chart(myChart2, {
type: 'bar', //bar, horizontalBar, pie, line, doughnut radar
data:{
    labels:['Stage 1', 'Stage 2', 'Stage 3'],
    datasets:[{
        label:['Survival Rates'],
        data:[98,
              70, 
              39
            ],
            backgroundColor:'teal',
            borderwidth:6,
            borderColor:'red',
            hoverBorderWidth:'red',
            hoverBorderColor:'red'
    }]
},
options:{
    title:{
        display:true,
        text:'Breast Cancer 5 Year Survival Rates',
        fontSize:25
    },
    legend:{
        position:'center'
    }
}
});

let myChart3 = document.getElementById('myChart3').getContext('2d');
let colonCancerChart = new Chart(myChart3, {
type: 'bar', //bar, horizontalBar, pie, line, doughnut radar
data:{
    labels:['Stage 1', 'Stage 2', 'Stage 3'],
    datasets:[{
        label:['Survival Rates'],
        data:[95,
              80, 
              40
            ],
            backgroundColor:'darkblue',
            borderwidth:6,
            borderColor:'red',
            hoverBorderWidth:'red',
            hoverBorderColor:'red'
    }]
},
options:{
    title:{
        display:true,
        text:'Breast Cancer 5 Year Survival Rates',
        fontSize:25
    },
    legend:{
        position:'center'
    }
}
});

