import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    const location = useLocation();
    const [collapsed, setCollapsed] = useState(false); // Initially expanded
    const [mobileView, setMobileView] = useState(window.innerWidth <= 768); // Detect mobile view

    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    };

    // Handle window resize events to toggle between mobile and desktop views
    useEffect(() => {
        const handleResize = () => {
            const isMobile = window.innerWidth <= 768;
            setMobileView(isMobile);
            if (isMobile) {
                setCollapsed(true); // Automatically collapse in mobile view
            } else {
                setCollapsed(false); // Expand in desktop view
            }
        };
        window.addEventListener('resize', handleResize);
        // Set initial state based on current window size
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={`sidebar ${collapsed ? 'collapsed' : ''} ${mobileView ? 'mobile' : ''}`}>
            <div className="toggle-button" onClick={toggleSidebar}>
                <span className="hamburger-icon">&#9776;</span>
            </div>
            {!collapsed && <h2>EzyMetrics</h2>}
            <ul>
                <li className={location.pathname === '/' ? 'active' : ''}>
                    <Link to="/" onClick={() => setCollapsed(mobileView)}>Dashboard</Link>
                </li>
                <li className={location.pathname === '/leads' ? 'active' : ''}>
                    <Link to="/leads" onClick={() => setCollapsed(mobileView)}>Leads</Link>
                </li>
                <li className={location.pathname === '/analytics' ? 'active' : ''}>
                    <Link to="/analytics" onClick={() => setCollapsed(mobileView)}>Analytics</Link>
                </li>
                <li className={location.pathname === '/reports' ? 'active' : ''}>
                    <Link to="/reports" onClick={() => setCollapsed(mobileView)}>Reports</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
