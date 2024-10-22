import React from 'react';
import { jsPDF } from 'jspdf';
//import { saveAs } from 'file-saver';
import './ReportGenerator.css';

const ReportGenerator = () => {
    const generatePDF = () => {
        const doc = new jsPDF();
        doc.text('EzyMetrics Report', 10, 10);
        doc.text('Total Leads: 150', 10, 20);
        doc.text('Monthly Revenue: $5,000', 10, 30);
        doc.text('Conversion Rate: 25%', 10, 40);
        doc.save('EzyMetrics_Report.pdf');
    };

    const generateCSV = () => {
        const csvContent = 'data:text/csv;charset=utf-8,'
            + 'Metric,Value\n'
            + 'Total Leads,150\n'
            + 'Monthly Revenue,$5,000\n'
            + 'Conversion Rate,25%\n';

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement('a');
        link.setAttribute('href', encodedUri);
        link.setAttribute('download', 'EzyMetrics_Report.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="report-generator">
            <h2>Generate Reports</h2>
            <button onClick={generatePDF}>Download PDF</button>
            <button onClick={generateCSV}>Download CSV</button>
        </div>
    );
};

export default ReportGenerator;
