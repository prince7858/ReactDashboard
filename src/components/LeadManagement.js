import React, { useState } from 'react';
import './LeadManagement.css';

const LeadManagement = () => {
    const [leads] = useState([
        { id: 1, name: 'John Doe', status: 'New' },
        { id: 2, name: 'Jane Smith', status: 'Contacted' },
        { id: 3, name: 'Michael Brown', status: 'Converted' },
        { id: 4, name: 'Emily Davis', status: 'New' },
        { id: 5, name: 'James Wilson', status: 'Contacted' },
        { id: 6, name: 'Linda Johnson', status: 'Converted' },
        { id: 7, name: 'Robert Garcia', status: 'New' },
        { id: 8, name: 'David Martinez', status: 'Contacted' },
        { id: 9, name: 'Maria Rodriguez', status: 'Converted' },
        { id: 10, name: 'William Hernandez', status: 'New' },
        { id: 11, name: 'Jessica Clark', status: 'Contacted' },
        { id: 12, name: 'Charles Lewis', status: 'Converted' },
    ]);

    return (
        <div className="lead-management">
            <h2>Leads</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {leads.map((lead) => (
                        <tr key={lead.id}>
                            <td>{lead.id}</td>
                            <td>{lead.name}</td>
                            <td>{lead.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default LeadManagement;
