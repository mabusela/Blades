// chart.js

document.addEventListener("DOMContentLoaded", function () {
    // Sample data for illustration purposes
    const performanceData = {
        labels: ["Game 1", "Game 2", "Game 3", "Game 4", "Game 5", "Game 6", "Game 7","Game 8","Game 9","Game 10","Game 11"
        ,"Game 12","Game 13","Game 14","Game 15","Game 16","Game 17","Game 18","Game 19","Game 20","Game 21","Game 22","Game 23","Game 24","Game 25","Game 26","Game 27","Game 28"],
        wins: [1, 0, 1, 0, 0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0],  // Replace with actual data
        draws: [0, 0, 0, 1, 0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0], // Replace with actual data
        losses: [0, 1, 0, 0, 1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1], // Replace with actual data
    };

    const cumulativeWins = calculateCumulative(performanceData.wins);
    const cumulativeDraws = calculateCumulative(performanceData.draws);
    const cumulativeLosses = calculateCumulative(performanceData.losses);

    const ctx = document.getElementById("teamPerformanceChart").getContext("2d");

    const performanceChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: performanceData.labels,
            datasets: [
                {
                    label: "Cumulative Wins",
                    data: cumulativeWins,
                    borderColor: "rgba(75, 192, 192, 1)",
                    fill: false,
                },
                {
                    label: "Cumulative Draws",
                    data: cumulativeDraws,
                    borderColor: "rgba(255, 206, 86, 1)",
                    fill: false,
                },
                {
                    label: "Cumulative Losses",
                    data: cumulativeLosses,
                    borderColor: "rgba(255, 99, 132, 1)",
                    fill: false,
                },
            ],
        },
        options: {
            scales: {
                x: {
                    beginAtZero: true,
                },
                y: {
                    beginAtZero: true,
                },
            },
        },
    });
});

function calculateCumulative(data) {
    return data.reduce((cumulative, value) => {
        const prevTotal = cumulative.length > 0 ? cumulative[cumulative.length - 1] : 0;
        cumulative.push(prevTotal + value);
        return cumulative;
    }, []);
}
