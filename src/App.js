import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Leads from './components/Leads';
import Analytics from './components/Analytics';
import Reports from './components/Reports';

function App() {
    return (
        <Router>
            <div className="App">
                <Sidebar />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/leads" element={<Leads />} />
                        <Route path="/analytics" element={<Analytics />} />
                        <Route path="/reports" element={<Reports />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
