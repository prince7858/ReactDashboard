import React, { useState } from 'react';
import './Leads.css';

const Leads = () => {
    const [leads, setLeads] = useState([
        { id: 1, name: 'John Doe', status: 'New' },
        { id: 2, name: 'Jane Smith', status: 'Contacted' },
        { id: 3, name: 'Michael Brown', status: 'Converted' },
        { id: 4, name: 'Alice Johnson', status: 'New' },
    ]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentLead, setCurrentLead] = useState({ id: '', name: '', status: '' });

    // Filter leads based on the search term
    const filteredLeads = leads.filter((lead) =>
        lead.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Open modal for adding a new lead
    const openModal = (lead = { id: '', name: '', status: '' }) => {
        setCurrentLead(lead);
        setIsModalOpen(true);
    };

    // Close the modal
    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentLead({ id: '', name: '', status: '' });
    };

    // Save the lead (add or update)
    const saveLead = () => {
        if (currentLead.id) {
            // Update existing lead
            setLeads(leads.map((lead) => (lead.id === currentLead.id ? currentLead : lead)));
        } else {
            // Add new lead
            setLeads([...leads, { ...currentLead, id: leads.length + 1 }]);
        }
        closeModal();
    };

    // Delete a lead
    const deleteLead = (id) => {
        setLeads(leads.filter((lead) => lead.id !== id));
    };

    return (
        <div className="lead-management">
            <h2>Lead Management</h2>
            <input
                type="text"
                placeholder="Search leads..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />
            <button onClick={() => openModal()} className="add-button">Add Lead</button>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredLeads.map((lead) => (
                        <tr key={lead.id}>
                            <td>{lead.id}</td>
                            <td>{lead.name}</td>
                            <td>{lead.status}</td>
                            <td>
                                <button onClick={() => openModal(lead)} className="edit-button">Edit</button>
                                <button onClick={() => deleteLead(lead.id)} className="delete-button">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h3>{currentLead.id ? 'Edit Lead' : 'Add Lead'}</h3>
                        <input
                            type="text"
                            placeholder="Name"
                            value={currentLead.name}
                            onChange={(e) => setCurrentLead({ ...currentLead, name: e.target.value })}
                        />
                        <input
                            type="text"
                            placeholder="Status"
                            value={currentLead.status}
                            onChange={(e) => setCurrentLead({ ...currentLead, status: e.target.value })}
                        />
                        <button onClick={saveLead} className="save-button">Save</button>
                        <button onClick={closeModal} className="close-button">Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Leads;
