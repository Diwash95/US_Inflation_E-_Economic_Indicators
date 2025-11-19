// waits for the page to fully load
document.addEventListener('DOMContentLoaded', function() {

    // gets the chart title from the html
    const chartTitleElement = document.getElementById('chart-title');
    if (!chartTitleElement) return; // exits if there is no title element
    
    const chartTitle = chartTitleElement.innerText;

    // determines which chart to create based on the title
    if (chartTitle.includes('States and Metropolitan areas')) {
        createInflationChart();
    } else if (chartTitle.includes('Unemployment Rate')) {
        createUnemploymentChart();
    } else if (chartTitle.includes('GDP Growth')) {
        createGdpChart();
    } else if (chartTitle.includes('Interest Rates')) {
        createInterestRateChart();
    } else if (chartTitle.includes('Housing Starts')) {
        createHousingStartsChart();
    } else if (chartTitle.includes('Correlation of Indicators')) { // checks for page 7
        createRetailSalesChart();
    }

});

// gets the chart element from the html
const chartCanvas = document.getElementById('myChart');
if (chartCanvas) {
    const ctx = chartCanvas.getContext('2d');

    // creates the inflation rate chart
    function createInflationChart() {
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
                datasets: [{
                    label: 'States and Metropolitan areas in Percent',
                    data: [0.1, 1.3, 2.1, 2.4, 1.8, 1.2, 4.7, 8.0, 4.1, 2.9],
                    borderColor: 'red',
                    fill: false
                }]
            }
        });
    }

    // creates the unemployment rate chart
    function createUnemploymentChart() {
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
                datasets: [{
                    label: 'Unemployment Rate in Percent',
                    data: [5.3, 4.9, 4.4, 3.9, 3.7, 8.1, 5.3, 3.6, 3.6, 4.0],
                    backgroundColor: 'blue'
                }]
            }
        });
    }

    // creates the gdp growth chart
    function createGdpChart() {
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
                datasets: [{
                    label: 'GDP Growth Rate in Percent',
                    data: [2.9, 1.6, 2.2, 3.0, 2.3, -2.8, 5.9, 2.1, 2.5, 2.7],
                    borderColor: 'green',
                    fill: false
                }]
            }
        });
    }

    // creates the interest rate chart
    function createInterestRateChart() {
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
                datasets: [{
                    label: 'Federal Funds Rate in Percent',
                    data: [0.25, 0.5, 1.25, 2.25, 1.75, 0.25, 0.25, 2.5, 5.25, 5.25],
                    borderColor: 'purple',
                    fill: false
                }]
            }
        });
    }

    // creates the housing starts chart
    function createHousingStartsChart() {
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
                datasets: [{
                    label: 'New Privately Owned Housing Units Started in Thousands',
                    data: [1111, 1174, 1201, 1247, 1290, 1380, 1601, 1553, 1421, 1370],
                    backgroundColor: 'brown'
                }]
            }
        });
    }

    // creates the retail sales chart
    function createRetailSalesChart() {
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
                datasets: [{
                    label: 'Indicator Correlation',
                    data: [2.1, 3.1, 4.4, 4.9, 3.4, -0.4, 19.3, 9.2, 2.1, 2.5],
                    borderColor: 'teal',
                    fill: false
                }]
            }
        });
    }
}