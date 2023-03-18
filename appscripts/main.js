
    // Source of data: World Happiness Reports

    const labelCategories = ["GDP per capita", "social support", "healthy life expectancy", "freedom to make life choices", "generosity", "freedom from corruption"]
    const labelYears= ["2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021"]

    // CHARTS FOR SWEDEN
    const dataObj = {
        labels: labelCategories,
        datasets: [
            {
                label: "Sweden",//country name in quotes
                data:  [1.920, 1.204, 0.803, 0.724, 0.218, 0.512],// data of the country as an array
                borderWidth: 2,
                fill: true,
                backgroundColor: "rgba(253, 181, 27, 0.4)",
                borderColor: "rgba(253, 181, 27, 0.4)",
            }
        ]
    }
    new Chart("happiness-chart-swe",
            {
                type: "bar",
                data: dataObj,
                options: { 
                    maintainAspectRatio: false,
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: ['Happiness factors Sweden 2022'],
                        fontFamily: "Segoi UI",
                        fontSize: 24,
                        fontColor: 'rgb(90,90,90)',
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
                label: "Happiness score Sweden",//country name in quotes
                 data:  [75.6, 74.3, 72.4, 72.9, 73.7, 72.9, 73.8, 74, 73.1, 73.8],// data of the country as an array
                borderWidth: 1,
                fill: true,
                backgroundColor: "rgba(253, 181, 27, 0.4)",
                borderColor: "rgba(253, 181, 27, 0.4)",
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
                    display: false
                },
                title: {
                    display: true,
                    text: ['Happiness score in Sweden over the last decade'],
                    fontFamily: "Segoi UI",
                    fontSize: 24,
                    fontColor: 'rgb(90,90,90)',
                    },
                    scales: {
                        yAxes: [{
                            display: true,
                            ticks: {
                                suggestedMin: 65,    // minimum will be 0, unless there is a lower value.
                                suggestedMax: 80,
                            }
                        }]
                    }
            }
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
                backgroundColor: "rgba(253, 134, 0, 0.4)",
                borderColor: "rgba(253, 134, 0, 0.4)",
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
                text: ['Happiness factors Norway 2022'],
                fontFamily: "Segoi UI",
                fontSize: 24,
                fontColor: 'rgb(90,90,90)',
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
                 data:  [76.8, ,74.4, 76, 76, 75.8, 74.4, 74.4, 72.9, 73.7],// data of the country as an array
                borderWidth: 1,
                fill: true,
                backgroundColor: "rgba(253, 134, 0, 0.4)",
                borderColor: "rgba(253, 134, 0, 0.4)",
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
                text: ['Happiness score in Norway over the last decade'],
                fontFamily: "Segoi UI",
                fontSize: 24,
                fontColor: 'rgb(90,90,90)',
                },
                scales: {
                    yAxes: [{
                        display: true,
                        ticks: {
                            suggestedMin: 65,    // minimum will be 0, unless there is a lower value.
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
                backgroundColor: "rgba(194, 47, 142, 0.4)",
                borderColor: "rgba(194, 47, 142, 0.4)",
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
                text: ['Happiness factors Denmark 2022'],
                fontFamily: "Segoi UI",
                fontSize: 24,
                fontColor: 'rgb(90,90,90)',
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
                data:  [75.2, 75.9, 75.1, 75.1, 75.6, 75.9, 76.5, 76.9, 75.2, 76.4],// data of the country as an array
                borderWidth: 2,
                fill: true,
                backgroundColor: "rgba(194, 47, 142, 0.4)",
                borderColor: "rgba(194, 47, 142, 0.4)",
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
                text: ['Happiness score in Denmark over the last decade'],
                fontFamily: "Segoi UI",
                fontSize: 24,
                fontColor: 'rgb(90,90,90)',
                },
                scales: {
                    yAxes: [{
                        display: true,
                        ticks: {
                            suggestedMin: 65,    // minimum will be 0, unless there is a lower value.
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
                backgroundColor: "rgba(225, 71, 98, 0.4)",
                borderColor: "rgba(225, 71, 98, 0.4)",
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
                text: ['Happiness factors Finland 2022'],
                fontFamily: "Segoi UI",
                fontSize: 24,
                fontColor: 'rgb(90,90,90)',
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
                data:  [74.2, 74.5, 73.8, 74.5, 76.6, 77.9, 78.6, 77.8, 78.9, 78.2],// data of the country as an array
                borderWidth: 2,
                fill: true,
                backgroundColor: "rgba(225, 71, 98, 0.4)",
                borderColor: "rgba(225, 71, 98, 0.4)",
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
                text: ['Happiness score in Finland over the last decade'],
                fontFamily: "Segoi UI",
                fontSize: 24,
                fontColor: 'rgb(90,90,90)',
                },
                scales: {
                    yAxes: [{
                        display: true,
                        ticks: {
                            suggestedMin: 65,    // minimum will be 0, unless there is a lower value.
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
                backgroundColor: "rgba(129, 46, 124, 0.4)",
                borderColor: "rgba(129, 46, 124, 0.4)",
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
                text: ['Happiness factors Iceland 2022'],
                fontFamily: "Segoi UI",
                fontSize: 24,
                fontColor: 'rgb(90,90,90)',
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
                data:  [69.7, 67.6, 70.2, 68.3, 70.4, 70.6, 69.6, 72.5, 70.3, 70,4],// data of the country as an array
                borderWidth: 2,
                fill: true,
                backgroundColor: "rgba(129, 46, 124, 0.4)",
                borderColor: "rgba(129, 46, 124, 0.4)",
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
                text: ['Happiness score in Iceland over the last decade'],
                fontFamily: "Segoi UI",
                fontSize: 24,
                fontColor: 'rgb(90,90,90)',
                },
                scales: {
                    yAxes: [{
                        display: true,
                        ticks: {
                            suggestedMin: 65,    // minimum will be 0, unless there is a lower value.
                            suggestedMax: 80,
                        }
                    }]
                }
        }
    });



