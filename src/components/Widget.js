// Widget.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import './Widget.css';

const Widget = ({ title, content, chartData }) => {
    return (
        <div className="widget">
            <h3>{title}</h3>
            <div className="widget-content">
                <p>{content}</p>
                {chartData && (
                    <div className="mini-chart">
                        <Line
                            data={chartData}
                            options={{
                                responsive: true,
                                maintainAspectRatio: false,
                                plugins: {
                                    legend: {
                                        display: false,
                                    },
                                },
                                scales: {
                                    x: {
                                        display: false,
                                    },
                                    y: {
                                        display: false,
                                    },
                                },
                            }}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Widget;
