# EzyMetrics Dashboard

This responsive and interactive dashboard interface for EzyMetrics, built using React.js. It features an overview of key metrics, customizable widgets, lead management, analytics visualization, and report generation.

## Features

1. **Dashboard Overview**:
   - Displays key metrics like Total Leads, Monthly Revenue, and Conversion Rate.
   - Includes mini charts showing trends related to leads and revenue.

2. **Improved Widget Customization**:
   - Drag-and-drop functionality to rearrange dashboard widgets.

3. **Lead Management**:
   - Add, edit, delete, and search leads.
   - Simple modal-based interface for editing lead details.

4. **Analytics Dashboard**:
   - Multiple interactive charts (line, bar, pie) with tooltips and click events.
   - Visual representation of data trends.

5. **Responsive Design**:
   - Fully responsive across devices (desktop, tablet, mobile).
   - Collapsible sidebar for mobile view.

## Prerequisites

- **Node.js** (version 14 or later)
- **npm** (version 6 or later) or **yarn**

## Getting Started

Follow these steps to get the project up and running on your local machine:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/prince7858/ReactDashboard.git

 ## Project Structure
 
src/components: Contains all the React components used in the project, including the Sidebar, Widget, LeadManagement, and Analytics.
src/App.js: Main entry point for the application.
src/Widget.js, Sidebar.js, Analytics.js, etc.: Specific components implementing individual features.
public/: Contains the index.html file, which serves as the entry point for the React app.

## Scripts

npm start: Runs the app in development mode.
npm run build: Builds the app for production.
npm test: Runs the test cases.

## Customization

Adding New Widgets: You can customize the dashboard by adding more widgets in the Dashboard.js file.
Chart Data: Update or fetch data from APIs for real-time analytics in the Analytics.js component.

## Known Issues

Ensure that you have a stable internet connection while installing dependencies.
If you encounter layout issues on smaller devices, try adjusting the media queries in the CSS files.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Contributing

If you find any bugs or want to contribute to the project, feel free to submit a pull request or open an issue.

