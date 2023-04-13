// Source of data: World Happiness Reports 2022 and http://gapm.io/dhapiscore_whr

// Define categories for the six factors that contribute to happiness according to the WHR
// Im using const so that I'don't accidently assign different values to the Labels 
const labelCategories = [
    ['GDP', 'per capita'], // Array of strings
    ['Social','support'], 
    ["Healthy", "life expectancy"],
    ["Freedom to", "make life choices"],
    ["Generosity"],
    ["Freedom","from corruption"],
]   
// Define years for the happiness scores for the last decade (2013-2022)
const labelYears= ["2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"]

// CHARTS FOR SWEDEN
// Define an object containing data for the first chart for sweden, which shows the data of the six factors to Sweden's happiness score
const dataObj = {  // This creates a variable called dataObj that will hold an object containing the data for the chart
    labels: labelCategories, // Sets the labels property of the dataObj object to the labelCategories array
    datasets: [  // Sets the datasets property of the dataObj object to an array that will contain dataset. 
        {
            label: "Sweden", // The country name which will be the name of the bar on the chart.
            data:  [1.920, 1.204, 0.803, 0.724, 0.218, 0.512], // data of the country as an array
            borderWidth: 3,  // Define the size of the border around the bars
            fill: true,  // fills the bar with color
            backgroundColor: "rgba(253, 181, 27, 0.6)", // The background color of the bars with an opacity
            borderColor: "rgba(253, 181, 27, 0.6)",     // The color of teh border of the bars with an opacity
        }
    ]
};
new Chart("happiness-chart-swe", // creates a new Chart and passes in the ID of the HTML canvas element to which the chart will be rendered
{
    type: "bar", // set the type of the chart
    data: dataObj, // set the data for the chart to the dataObj object defined earlier, which contains the labels and datasets
    options: {  // sets the different options for the chart.
        maintainAspectRatio: false, // sets the aspect ratio of the chart to be fixed, so that it does not change when the size of the canvas element changes
        legend: {
            display: false, // hide the legend of the chart
        },
        title: { // Add a title for the chart
            display: true,  // Display teh title
            text: ['Happiness explained by six factors'], // the text content of the title
            fontFamily: "Helvetica", // sets the font to Helvetica
            fontSize: 14, // set the fontsize to 14
            fontColor: 'rgb(150,150,150)', // set the color of the font to dark gray
            fontStyle: "normal", // The weight of the font
            },
            scales: { //sets the scales for the chart.
                yAxes: [{
                    display: true, //shows the y-axis scale.
                    ticks: {
                        suggestedMin: 0,    // sets the minimum value of the y-axis to 0, unless a lower value is specified.
                    }
                }]
            }
        
    }
});


    // Define an object containing data for the second chart for Sweden, which shows the data of the six factors to Sweden's happiness score
    // The exact same code structure as for the first chart
    const dataObj1 = {
        labels: labelYears,
        datasets: [
            {
                label: "Sweden",
                data:  [74.3, 72.4, 72.9, 73.7, 72.9, 73.8, 74, 73.1, 74.4, 74],
                borderWidth: 3,
                fill: true, // The area below the line will be filled with my choosen background color
                backgroundColor: "rgba(253, 181, 27, 0.6)",
                borderColor: "rgba(253, 181, 27, 0.8)",
            }
        ]
    }
    new Chart("happiness-score-sweden",
        {
            type: "line", // the type of the chart is set to line
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
                             suggestedMin: 70,    // minimum value of the y axes will be 70
                             suggestedMax: 80,    // maximum value of the y axes will be 70
                        }
                    }]
                }
            },
        });


    // The following charts for NOrway, Denmark, Finland and Iceland have the exact same code with different data, therefore I have not commented all the lines
    
    //CHARTS FOR NORWAY
    const dataObj2 = {
        labels: labelCategories,
        datasets: [
            {
                label: "Norway",
                data:  [1.997, 1.239, 0.786, 0.728, 0.217, 0.474],
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
                            suggestedMin: 0,    
                        }
                    }]
                }
            
        }
    });

    const dataObj3 = {
        labels: labelYears,
        datasets: [
            {
                label: "Happiness score Norway",
                 data:  [ ,74.4, 76, 76, 75.8, 74.4, 74.4, 72.9, 73.6, 73.2],
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
                            suggestedMin: 70,    
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
                label: "Denmark",
                data:  [1.953, 1.243, 0.777, 0.719, 0.188, 0.532],
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
                            suggestedMin: 0,    
                        }
                    }]
                }
            
        }
    });

    const dataObj5 = {
        labels: labelYears,
        datasets: [
            {
                label: "Happiness score Denmark",
                data:  [75.9, 75.1, 75.1, 75.6, 75.9, 76.5, 76.9, 75.2, 77, 75.9],
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
                            suggestedMin: 70,    
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
                label: "Finland",
                data:  [1.892, 1.258, 0.775, 0.736, 0.109, 0.534],
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
                            suggestedMin: 0,    
                        }
                    }]
                }
            
        }
    });

    const dataObj7 = {
        labels: labelYears,
        datasets: [
            {
                label: "Finland",
                data:  [74.5, 73.8, 74.5, 76.6, 77.9, 78.6, 77.8, 78.9, 77.9, 78],
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
                            suggestedMin: 70,   
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
                label: "Iceland",
                data:  [1.936, 1.320, 0.803, 0.718, 0.270, 0.191],
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
                            suggestedMin: 0,   
                        }
                    }]
                }
            
        }
    });

    const dataObj9 = {
        labels: labelYears,
        datasets: [
            {
                label: "Iceland",
                data:  [75, 75, ,75.1, 74.8, ,75.3, 75.8, 75.7, 75.3],
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
                            suggestedMin: 70,    
                            suggestedMax: 80,
                        }
                    }]
                }
        }
    });

 // CONCLUSION BAR CHART

 // For this part fo teh code I tpook inspiration from the classwork we did in week 8

// This code declares five arrays, one for each country, each containing six numerical values. 
var swedenBar = [1.920, 1.204, 0.803, 0.724, 0.218, 0.512];
var norwayBar = [1.997, 1.239, 0.786, 0.728, 0.217, 0.474];
var denmarkBar = [1.953, 1.243, 0.777, 0.719, 0.188, 0.532];
var finlandBar = [1.892, 1.258, 0.775, 0.736, 0.109, 0.534];
var icelandBar = [1.936, 1.320, 0.803, 0.718, 0.270, 0.191];

// initializes a new chart object and specifies where the chart will be displayed on the web page
var conclusionChartBar = new Chart(document.getElementById("conclusionChartBar"), {
    type: 'bar', // define the type of the chart 
    data: {
        labels: labelCategories,
        datasets: [ // five different datasets, one for each country
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
            display: false, // don't display the legend
        },
        title: {
            display: false, // don't display any title
        },
        scales: {
            yAxes: [{
                display: true,  
                ticks: {
                    suggestedMin: 0, // The minimum value of the chart
                }
            }]
        }
    }
});

// DISCLAIMER
// for this part of the code I took inspiration from this tutorial on youtube: https://www.youtube.com/watch?v=0OIZnoZ8GUU 
// I also used Chat.GPT to help me to understand what changes I had to make to the code used in the tutorial in order to get it to work 

// This code adds an event listener to each button that calls the toggleDatasetVisibility function with the index of the corresponding dataset (0 for Sweden, 1 for Norway, and so on). 
// The toggleDatasetVisibility function then uses the getDatasetMeta method to get the metadata for the dataset with the given index, toggles the hidden property to hide or show the dataset, 
// and then calls the update method on the chart to redraw it with the updated visibility settings.

// Add event listeners to the each button to toggle the visibility of the datasets, Sweden has index number 0. Norway 1 and so on
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

// For the combined Line Chart, I used the exact same structure and code as abowe (except different data for each country)


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