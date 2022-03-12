// Charts
let ctx = document.getElementById('breastcancer').getContext('2d');
let pieCtx = document.getElementById('ovariancancer').getContext('2d');
let canceryearlyLabel = document.getElementById('cancersurvivalrate');

let breastcancer = Array.of(98,90,66);
let breastCancerLabels = Array.of('1','2','3');

let ovariancancer = Array.of(98,70,39);
let ovarianCancerLabels = Array.of('1','2','3');

let breastCancer = 0;

function addbreastcancer(x){
	breastcancer = x + breastcancer;
}

ovariancancer.forEach(addYearlyTotal);

breastcancer.innerHTML = "rate" + breastcancer;

let stage1Nums = Array.of(98,98,95);
let stage2Nums = Array.of(90,70,80);
let stage3Nums = Array.of(95,80,40);

// let total = Array.of(addYearlyTotal(...stage1Nums), addbreastCancer(...stage2Nums), addbreastCancer(...stage3Nums));

function findOverninety(){
	let firstninety = ovarianCancer.findIndex(element => element > 90);
	alert(firstninety);
}

function resetNum(){
	ovarianCancer.fill(0);
	ovarianCancerChart.update();
}

// Bar
var ovarianCancerChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Stage 1', 'Stage 2', 'Stage 3'],
        datasets: [{
            label: 'stagesOfCancer',
            data: [98, 70, 39],
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
var deptSalesChart = new Chart(pieCtx, {
    type: 'pie',
    data: {
        labels: deptLabels,
        datasets: [{
            label: '# of Sales',
            data: deptSales,
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