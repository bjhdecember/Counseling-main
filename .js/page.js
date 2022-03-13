// Charts
const Chart = require('chart.js');
const myChart = new Chart(ctx, {...});


let ctx = document.getElementById('myChart').getContext('2d');
let pieCtx = document.getElementById('cancerSurvivalRates').getContext('2d');
let canceryearlyLabel = document.getElementById('cancersurvivalrate');
let breastCancerLabel = document.getElementById('breastCanter');

let stage1Radio = document.getElementById('stage1');
let stage2unningRadio = document.getElementById('stage2');
let stage3Radio = document.getElementById('stage3');

let breastcancer = Array.of(98,90,66);
let breastCancerLabels = Array.of('1','2','3');

let ovariancancer = Array.of(98,70,39);
let ovarianCancerLabels = Array.of('1','2','3');

let coloncancer = Array.of(98,70,39);
let colonCancerLabels = Array.of('1','2','3');

let Cancer = 0;

function addYearlyTotal(x){
	yearlyTotal.innerHTML = x + yearlyTotal;
}

function addbreastcancer(a,b,c){
    return a+b+c;
}

let breastCancer = addbreastcancer(...breastCancer);
breastCancer.innerHTML = "Stages" + breastCancer;

ovariancancer.forEach(addcancer);

breastcancer.innerHTML = "stage" + breastcancer;

let stage1Nums = Array.of(98,98,95);
let stage2Nums = Array.of(90,70,80);
let stage3Nums = Array.of(95,80,40);

let total = Array.of(addbreastcancer(...stage1Nums), addbreastcancer(...stage2Nums), addbreastcancer(...stage3Nums));
alert(total);

function findOverninety(){
	let firstninety = ovarianCancer.findIndex(element => element > 90);
	alert(firstninety);
}

function resetNum(){
	ovarianCancer.fill(0);
	ovarianCancerChart.update();
}

// Bar
var cancerChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['stage1Nums', 'stage2Nums', 'stage3Nums'],
        datasets: [{
            label: 'stagesOfCancer',
            data: ovariancancer, coloncancer,
            backgroundColor: [
                'rgba(238, 184, 104, 1)',
                'rgba(75, 166, 223, 1)',
                'rgba(239, 118, 122, 1)',
            ],
            borderWidth: 0
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

// Pie
var cancerChart = new Chart(pieCtx, {
    type: 'pie',
    data: {
        labels: ['stage1Nums', 'stage2Nums', 'stage3Nums'],
        datasets: [{
            label: 'survival rates',
            data: ovariancancer, colonCancer,
            backgroundColor: [
                'rgba(238, 184, 104, 1)',
                'rgba(75, 166, 223, 1)',
                'rgba(239, 118, 122, 1)',
            ],
            borderWidth: 0
        }]
    },
    options: {
        
    }
})