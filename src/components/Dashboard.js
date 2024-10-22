// Dashboard.js
import React from 'react';
//import { Line } from 'react-chartjs-2';
import Widget from './Widget';
import './Dashboard.css';

const Dashboard = () => {
    // Sample data for the mini charts
    const leadsChartData = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                data: [30, 45, 35, 60, 70, 55, 65],
                borderColor: '#4CAF50',
                backgroundColor: 'rgba(76, 175, 80, 0.2)',
                fill: true,
            },
        ],
    };

    const revenueChartData = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
            {
                data: [1000, 1500, 1200, 1800],
                borderColor: '#1e90ff',
                backgroundColor: 'rgba(30, 144, 255, 0.2)',
                fill: true,
            },
        ],
    };

    return (
        <div className="dashboard-overview">
            <h2>Dashboard Overview</h2>
            <div className="dashboard-widgets">
                <Widget title="Total Leads" content="150" chartData={leadsChartData} />
                <Widget title="Monthly Revenue" content="$5,000" chartData={revenueChartData} />
                <Widget title="Conversion Rate" content="25%" />
            </div>
        </div>
    );
};

export default Dashboard;
