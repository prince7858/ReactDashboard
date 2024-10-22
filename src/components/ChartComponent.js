import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const ChartComponent = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Monthly Sales',
                data: [65, 59, 80, 81, 56, 55],
                fill: false,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(75,192,192,1)',
            },
        ],
    };

    const options = {
        maintainAspectRatio: false,
        responsive: true,
    };

    return (
        <div className="chart-container">
            <Line data={data} options={options} />
        </div>
    );
};

export default ChartComponent;
