// Source of data: World Happiness Reports

//const { default: Config } = require("chart.js/dist/core/core.config");

const labelCategories = [
    ['GDP', 'per capita'], 
    ['Social','support'], 
    ["Healthy", "life expectancy"],
    ["Freedom to", "make life choices"],
    ["Generosity"],
    ["Freedom","from corruption"],
]   
const labelYears= ["2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"]

// CHARTS FOR SWEDEN
const dataObj = {
    labels: labelCategories,
    datasets: [
        {
            label: "Sweden",//country name in quotes
            data:  [1.920, 1.204, 0.803, 0.724, 0.218, 0.512],// data of the country as an array
            borderWidth: 3,
            fill: false,
            backgroundColor: "rgba(253, 181, 27, 0.6)",
            borderColor: "rgba(253, 181, 27, 0.6)",
        }
    ]
};
new Chart("happiness-chart-swe",
{
    type: "bar",
    data: dataObj,
    options: { 
        maintainAspectRatio: false,
        legend: {
            display: false,
        },
        title: {
            display: true,
            text: ['Happiness explained by six factors'],
            fontFamily: "Helvetica",
            fontSize: 14,
            fontColor: 'rgb(150,150,150)',
            fontStyle: "normal",
            },
            scales: {
                yAxes: [{
                    display: true,
                    ticks: {
                        suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
                    }
                }]
            }
        
    }
});


    
    const dataObj1 = {
        labels: labelYears,
        datasets: [
            {
                label: "Sweden",//country name in quotes
                data:  [74.3, 72.4, 72.9, 73.7, 72.9, 73.8, 74, 73.1, 74.4, 74],// data of the country as an array
                borderWidth: 3,
                fill: true,
                backgroundColor: "rgba(253, 181, 27, 0.6)",
                borderColor: "rgba(253, 181, 27, 0.8)",
            }
        ]
    }
    new Chart("happiness-score-sweden",
        {
            type: "line",
            data: dataObj1,
            options: { 
                maintainAspectRatio: false,
                legend: {
                    display: false,
                },
                title: {
                    display: true,
                    text: ["Sweden's Happiness Score during the last decade"],
                    fontFamily: "helvetica",
                    fontSize: 14,
                    fontColor: 'rgb(150,150,150)',
                    fontStyle: "normal",
                },
                scales: {
                    yAxes: [{
                        display: true,
                        ticks: {
                             suggestedMin: 70,    // minimum will be 0, unless there is a lower value.
                             suggestedMax: 80,
                        }
                    }]
                }
            },
        });

    
    //CHARTS FOR NORWAY
    const dataObj2 = {
        labels: labelCategories,
        datasets: [
            {
                label: "Norway",//country name in quotes
                data:  [1.997, 1.239, 0.786, 0.728, 0.217, 0.474],// data of the country as an array
                borderWidth: 2,
                fill: true,
                backgroundColor: "rgba(253, 134, 0, 0.6)",
                borderColor: "rgba(253, 134, 0, 0.6)",
            }
        ]
    }
    new Chart("factors-norway",
    {
        type: "bar",
        data: dataObj2,
        options: { 
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            title: {
                display: true,
                text: ['Happiness explained by six factors'],
                fontFamily: "helvetica",
                fontSize: 14,
                fontColor: 'rgb(150,150,150)',
                fontStyle: "normal",
                },
                scales: {
                    yAxes: [{
                        display: true,
                        ticks: {
                            suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
                        }
                    }]
                }
            
        }
    });

    const dataObj3 = {
        labels: labelYears,
        datasets: [
            {
                label: "Happiness score Norway",//country name in quotes
                 data:  [ ,74.4, 76, 76, 75.8, 74.4, 74.4, 72.9, 73.6, 73.2],// data of the country as an array
                borderWidth: 3,
                fill: true,
                backgroundColor: "rgba(253, 134, 0, 0.6)",
                borderColor: "rgba(253, 134, 0, 0.8)",
            }
        ]
    }

    new Chart("score-norway",
    {
        type: "line",
        data: dataObj3,
        options: { 
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            title: {
                display: true,
                text: [" Norway's Happiness Score during the last decade"],
                fontFamily: "Helvetica",
                fontSize: 14,
                fontColor: 'rgb(150,150,150)',
                fontStyle: "normal",
                },
                scales: {
                    yAxes: [{
                        display: true,
                        ticks: {
                            suggestedMin: 70,    // minimum will be 0, unless there is a lower value.
                            suggestedMax: 80,
                        }
                    }]
                }
        }
    });

    // CHARTS FOR DENMARK
    const dataObj4 = {
        labels: labelCategories,
        datasets: [
            {
                label: "Denmark",//country name in quotes
                data:  [1.953, 1.243, 0.777, 0.719, 0.188, 0.532],// data of the country as an array
                borderWidth: 2,
                fill: true,
                backgroundColor: "rgba(194, 47, 142, 0.6)",
                borderColor: "rgba(194, 47, 142, 0.6)",
            }
        ]
    }
    new Chart("factors-denmark",
    {
        type: "bar",
        data: dataObj4,
        options: { 
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            title: {
                display: true,
                text: ['Happiness explained by six factors'],
                fontFamily: "Helvetica",
                fontSize: 14,
                fontColor: 'rgb(150,150,150)',
                fontStyle: "normal",
                },
                scales: {
                    yAxes: [{
                        display: true,
                        ticks: {
                            suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
                        }
                    }]
                }
            
        }
    });

    const dataObj5 = {
        labels: labelYears,
        datasets: [
            {
                label: "Happiness score Denmark",//country name in quotes
                data:  [75.9, 75.1, 75.1, 75.6, 75.9, 76.5, 76.9, 75.2, 77, 75.9],// data of the country as an array
                borderWidth: 3,
                fill: true,
                backgroundColor: "rgba(194, 47, 142, 0.6)",
                borderColor: "rgba(194, 47, 142, 0.8)",
            }
        ]
    }

    new Chart("score-denmark",
    {
        type: "line",
        data: dataObj5,
        options: { 
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            title: {
                display: true,
                text: [" Denmark's Happiness Score during the last decade"],
                fontFamily: "Helvetica",
                fontSize: 14,
                fontColor: 'rgb(150,150,150)',
                fontStyle: "normal",
                },
                scales: {
                    yAxes: [{
                        display: true,
                        ticks: {
                            suggestedMin: 70,    // minimum will be 0, unless there is a lower value.
                            suggestedMax: 80,
                        }
                    }]
                }
        }
    });

    // CHARTS FOR FINLAND
    const dataObj6 = {
        labels: labelCategories,
        datasets: [
            {
                label: "Finland",//country name in quotes
                data:  [1.892, 1.258, 0.775, 0.736, 0.109, 0.534],// data of the country as an array
                borderWidth: 2,
                fill: true,
                backgroundColor: "rgba(225, 71, 98, 0.6)",
                borderColor: "rgba(225, 71, 98, 0.6)",
            }
        ]
    }

    new Chart("factors-finland",
    {
        type: "bar",
        data: dataObj6,
        options: { 
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            title: {
                display: true,
                text: ['Happiness explained by six factors'],
                fontFamily: "Helvetica",
                fontSize: 14,
                fontColor: 'rgb(150,150,150)',
                fontStyle: "normal",
                },
                scales: {
                    yAxes: [{
                        display: true,
                        ticks: {
                            suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
                        }
                    }]
                }
            
        }
    });

    const dataObj7 = {
        labels: labelYears,
        datasets: [
            {
                label: "Finland",//country name in quotes
                data:  [74.5, 73.8, 74.5, 76.6, 77.9, 78.6, 77.8, 78.9, 77.9, 78],// data of the country as an array
                borderWidth: 3,
                fill: true,
                backgroundColor: "rgba(225, 71, 98, 0.6)",
                borderColor: "rgba(225, 71, 98, 0.8)",
            }
        ]
    }

    new Chart("score-finland",
    {
        type: "line",
        data: dataObj7,
        options: { 
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            title: {
                display: true,
                text: ["Finland's Happiness Score during the last decade"],
                fontFamily: "Helvetica",
                fontSize: 14,
                fontColor: 'rgb(150,150,150)',
                fontStyle: "normal",
                },
                scales: {
                    yAxes: [{
                        display: true,
                        ticks: {
                            suggestedMin: 70,    // minimum will be 0, unless there is a lower value.
                            suggestedMax: 80,
                        }
                    }]
                }
        }
    });

    // CHARTS FOR ICELAND
    const dataObj8 = {
        labels: labelCategories,
        datasets: [
            {
                label: "Iceland",//country name in quotes
                data:  [1.936, 1.320, 0.803, 0.718, 0.270, 0.191],// data of the country as an array
                borderWidth: 2,
                fill: true,
                backgroundColor: "rgba(129, 46, 124, 0.6)",
                borderColor: "rgba(129, 46, 124, 0.6)",
            }
        ]
    }

    new Chart("factors-iceland",
    {
        type: "bar",
        data: dataObj8,
        options: { 
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            title: {
                display: true,
                text: ['Happiness explained by six factors'],
                fontFamily: "Helvetica",
                fontSize: 14,
                fontColor: 'rgb(150,150,150)',
                fontStyle: "normal",
                },
                scales: {
                    yAxes: [{
                        display: true,
                        ticks: {
                            suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
                        }
                    }]
                }
            
        }
    });

    const dataObj9 = {
        labels: labelYears,
        datasets: [
            {
                label: "Iceland",//country name in quotes
                data:  [75, 75, ,75.1, 74.8, ,75.3, 75.8, 75.7, 75.3],// data of the country as an array
                borderWidth: 3,
                fill: true,
                backgroundColor: "rgba(129, 46, 124, 0.6)",
                borderColor: "rgba(129, 46, 124, 0.8)",
            }
        ]
    }

    new Chart("score-iceland",
    {
        type: "line",
        data: dataObj9,
        options: { 
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            title: {
                display: true,
                text: [" Iceland's Happiness Score during the last decade"],
                fontFamily: "Helvetica",
                fontSize: 14,
                fontColor: 'rgb(150,150,150)',
                fontStyle: "normal",
                },
                scales: {
                    yAxes: [{
                        display: true,
                        ticks: {
                            suggestedMin: 70,    // minimum will be 0, unless there is a lower value.
                            suggestedMax: 80,
                        }
                    }]
                }
        }
    });

 // CONCLUSION BAR CHART
var swedenBar = [1.920, 1.204, 0.803, 0.724, 0.218, 0.512];
var norwayBar = [1.997, 1.239, 0.786, 0.728, 0.217, 0.474];
var denmarkBar = [1.953, 1.243, 0.777, 0.719, 0.188, 0.532];
var finlandBar = [1.892, 1.258, 0.775, 0.736, 0.109, 0.534];
var icelandBar = [1.936, 1.320, 0.803, 0.718, 0.270, 0.191];

// Get the chart canvas and create the chart
var conclusionChartBar = new Chart(document.getElementById("conclusionChartBar"), {
    type: 'bar',
    data: {
        labels: labelCategories,
        datasets: [
            {
                data: swedenBar,
                label: "SWEDEN",
                borderWidth: 2,
                fill: true,
                backgroundColor: "rgba(253, 181, 27, 0.6)",
                borderColor: "rgba(253, 181, 27, 0.8)",
            },
            {
                data: norwayBar,
                label: "NORWAY",
                borderWidth: 2,
                fill: true,
                backgroundColor: "rgba(253, 134, 0, 0.6)",
                borderColor: "rgba(253, 134, 0, 0.8)",
            },
            {
                data: denmarkBar,
                label: "DENMARK",
                borderWidth: 2,
                fill: true,
                backgroundColor: "rgba(194, 47, 142, 0.6)",
                borderColor: "rgba(194, 47, 142, 0.8)",
            },
            {
                data: finlandBar,
                label: "FINLAND",
                borderWidth: 2,
                fill: true,
                backgroundColor: "rgba(225, 71, 98, 0.6)",
                borderColor: "rgba(225, 71, 98, 0.8)",
            },
            {
                data: icelandBar,
                label: "ICELAND",
                borderWidth: 2,
                fill: true,
                backgroundColor: "rgba(129, 46, 124, 0.6)",
                borderColor: "rgba(129, 46, 124, 0.8)",
            }
        ]
    },
    options: {
        legend: {
            display: false,
        },
        title: {
            display: false,
        },
        scales: {
            yAxes: [{
                display: true,
                ticks: {
                    suggestedMin: 0,
                }
            }]
        }
    }
});

// Add event listeners to the buttons to toggle visibility of datasets
document.getElementById("buttonSwe").addEventListener("click", function() {
    toggleDatasetVisibility(0);
});

document.getElementById("buttonNor").addEventListener("click", function() {
    toggleDatasetVisibility(1);
});

document.getElementById("buttonDen").addEventListener("click", function() {
    toggleDatasetVisibility(2);
});

document.getElementById("buttonFin").addEventListener("click", function() {
    toggleDatasetVisibility(3);
});

document.getElementById("buttonIce").addEventListener("click", function() {
    toggleDatasetVisibility(4);
});

// Function to toggle the visibility of a dataset
function toggleDatasetVisibility(index) {
    var meta = conclusionChartBar.getDatasetMeta(index);

    // Toggle the visibility of the dataset
    meta.hidden = !meta.hidden;

    // Redraw the chart
    conclusionChartBar.update();
}

// This code adds an event listener to each button that calls the toggleDatasetVisibility function with the index of the corresponding dataset (0 for Sweden, 1 for Norway, and so on). The toggleDatasetVisibility function then uses the getDatasetMeta method to get the metadata for the dataset with the given index, toggles the hidden property to hide or show the dataset, and then calls the update method on the chart to redraw it with the updated visibility settings.

// CONCLUSION LINE CHART
var swedenLine = [74.3, 72.4, 72.9, 73.7, 72.9, 73.8, 74, 73.1, 74.4, 74];
var norwayLine = [ ,74.4, 76, 76, 75.8, 74.4, 74.4, 72.9, 73.6, 73.2];
var denmarkLine = [75.9, 75.1, 75.1, 75.6, 75.9, 76.5, 76.9, 75.2, 77, 75.9];
var finlandLine = [74.5, 73.8, 74.5, 76.6, 77.9, 78.6, 77.8, 78.9, 77.9, 78];
var icelandLine= [75, 75, ,75.1, 74.8, ,75.3, 75.8, 75.7, 75.3];

var conclusionChartLine = new Chart(document.getElementById("conclusionChartLine"), {
    type: 'line',
    data: {
      labels: labelYears,
      datasets: [
        { 
          data: swedenLine,
          label: "Sweden",
          borderWidth: 3,
          fill: false,
          backgroundColor: "rgba(253, 181, 27, 0.5)",
          borderColor: "rgba(253, 181, 27, 0.6)",
        },
        { 
          data: norwayLine,
          label: "Norway",
          borderWidth: 3,
          fill: false,
          backgroundColor: "rgba(253, 134, 0, 0.5)",
          borderColor: "rgba(253, 134, 0, 0.6)",
        },
        { 
          data: denmarkLine,
          label: "Denmark",
          borderWidth: 3,
          fill: false,
          backgroundColor: "rgba(194, 47, 142, 0.5)",
          borderColor: "rgba(194, 47, 142, 0.6)",
        },
        { 
          data: finlandLine,
          label: "Finland",
          borderWidth: 3,
          fill: false,
          backgroundColor: "rgba(225, 71, 98, 0.5)",
          borderColor: "rgba(225, 71, 98, 0.6)",
        },
        { 
          data: icelandLine,
          label: "Iceland",
          borderWidth: 3,
          fill: false,
          backgroundColor: "rgba(129, 46, 124, 0.5)",
          borderColor: "rgba(129, 46, 124, 0.6)",
        }
      ]
    },
    options: {
        legend: {
            display: false,
        },
        title: {
            display: false,
            },
        scales: {
            yAxes: [{
                display: true,
                ticks: {
                    suggestedMin: 70,    // minimum will be 0, unless there is a lower value.
                    suggestedMax: 80,
                }
            }]
        }
    }
});

// Add event listeners to the buttons to toggle visibility of datasets
document.getElementById("buttonSweLine").addEventListener("click", function() {
    toggleDatasetVisibilityLine(0);
});

document.getElementById("buttonNorLine").addEventListener("click", function() {
    toggleDatasetVisibilityLine(1);
});

document.getElementById("buttonDenLine").addEventListener("click", function() {
    toggleDatasetVisibilityLine(2);
});

document.getElementById("buttonFinLine").addEventListener("click", function() {
    toggleDatasetVisibilityLine(3);
});

document.getElementById("buttonIceLine").addEventListener("click", function() {
    toggleDatasetVisibilityLine(4);
});

// Function to toggle the visibility of a dataset
function toggleDatasetVisibilityLine(index) {
    var meta1 = conclusionChartLine.getDatasetMeta(index);

    // Toggle the visibility of the dataset
    meta1.hidden = !meta1.hidden;

    // Redraw the chart
    conclusionChartLine.update();
}