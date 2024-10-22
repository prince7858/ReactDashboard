// Analytics.js
import React from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import './Analytics.css';

const Analytics = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Monthly Sales',
                data: [65, 59, 80, 81, 56, 55],
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                fill: true,
            },
        ],
    };

    const barData = {
        labels: ['Product A', 'Product B', 'Product C', 'Product D'],
        datasets: [
            {
                label: 'Sales',
                data: [100, 200, 150, 80],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50'],
                borderWidth: 1,
            },
        ],
    };

    const pieData = {
        labels: ['Electronics', 'Fashion', 'Groceries', 'Furniture'],
        datasets: [
            {
                data: [300, 50, 100, 80],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50'],
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
            tooltip: {
                enabled: true,
            },
        },
        scales: {
            x: {
                beginAtZero: true,
                ticks: {
                    font: {
                        size: 14, // Adjust font size for readability
                    },
                },
            },
            y: {
                beginAtZero: true,
                ticks: {
                    font: {
                        size: 14, // Adjust font size for readability
                    },
                },
            },
        },
    };
    
    // Click event handlers for the charts
    const handleLineClick = (elements) => {
        if (elements.length > 0) {
            const { index } = elements[0];
            alert(`Clicked on ${data.labels[index]} with sales of ${data.datasets[0].data[index]}`);
        }
    };

    const handleBarClick = (elements) => {
        if (elements.length > 0) {
            const { index } = elements[0];
            alert(`Clicked on ${barData.labels[index]} with sales of ${barData.datasets[0].data[index]}`);
        }
    };

    const handlePieClick = (elements) => {
        if (elements.length > 0) {
            const { index } = elements[0];
            alert(`Clicked on ${pieData.labels[index]} with market share of ${pieData.datasets[0].data[index]}`);
        }
    };

    return (
        <div className="analytics-dashboard">
            <h2>Analytics Dashboard</h2>
            <div className="chart-container">
                <h3>Monthly Sales (Line Chart)</h3>
                <Line data={data} options={options} getElementAtEvent={(elements) => handleLineClick(elements)} />
            </div>
            <div className="chart-container">
                <h3>Product Sales (Bar Chart)</h3>
                <Bar data={barData} options={options} getElementAtEvent={(elements) => handleBarClick(elements)} />
            </div>
            <div className="chart-container">
                <h3>Market Share (Pie Chart)</h3>
                <Pie data={pieData} options={options} getElementAtEvent={(elements) => handlePieClick(elements)} />
            </div>
        </div>
    );
};

export default Analytics;
