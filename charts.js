// chart.js

document.addEventListener("DOMContentLoaded", function () {
    // Sample data for illustration purposes
    const performanceData = {
        wins: 3,
        draws: 1,
        losses: 2,
    };

    const ctx = document.getElementById("teamPerformanceChart").getContext("2d");

    const performanceChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["Wins", "Draws", "Losses"],
            datasets: [{
                label: "Team Performance",
                data: [performanceData.wins, performanceData.draws, performanceData.losses],
                backgroundColor: [
                    "rgba(75, 192, 192, 0.7)", // Wins
                    "rgba(255, 206, 86, 0.7)", // Draws
                    "rgba(255, 99, 132, 0.7)", // Losses
                ],
                borderColor: [
                    "rgba(75, 192, 192, 1)", // Wins
                    "rgba(255, 206, 86, 1)", // Draws
                    "rgba(255, 99, 132, 1)", // Losses
                ],
                borderWidth: 1,
            }],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    });
});
