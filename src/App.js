// src/App.js

import { cattleActivityHistory } from './mockData'; // 
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'; 
import React, { useState } from 'react';
import './App.css';
import { environmentData, cattleData } from './mockData'; // Introduce our simulation data
import logo from './assets/cow_logo.png';


function App() {
  // Use useState to remember which cow is currently selected
  const [selectedCow, setSelectedCow] = useState(cattleData[0]);

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <img src={logo} alt="Cow Logo" className="header-logo" />
        <h1>Cattle Farm Monitoring and Management System</h1>
      </header>

      <aside className="sidebar">
        <h2>List of cattle herds</h2>
        {cattleData.map(cow => (
          <div
            key={cow.id}
            className={`cow-item ${selectedCow.id === cow.id ? 'active' : ''}`}
            onClick={() => setSelectedCow(cow)}
          >
            ear tag: {cow.id}
          </div>
        ))}
      </aside>

      <main className="main-content">
        <div className="main-overview">
          <h2>Environmental Overview</h2>
          <div className="env-card">temperature: {environmentData.temperature}°C</div>
          <div className="env-card">humidity: {environmentData.humidity}%</div>
          <div className="env-card">air quality: {environmentData.airQuality}</div>
        </div>

        <div className="cow-details">
          <h2>Individual Details (ear tag: {selectedCow.id})</h2>
          {/* Here, detailed information and alerts of the selected cow will be displayed */}
          <div className="detail-grid">
          
            <div className="detail-card">
              <h4>body temperature</h4>
              <p>{selectedCow.bodyTemperature}°C</p>
            </div>
            <div className="detail-card">
              <h4>Activity volume</h4>
              <p>{selectedCow.activityLevel}</p>
            </div>
            <div className="detail-card">
              <h4>Feeding duration</h4>
              <p>{selectedCow.feedingTime} hour</p>
            </div>
          </div>

          <div className="chart-container">
            <h4>Activity Trend Chart</h4>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={cattleActivityHistory[selectedCow.id]}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="activity" stroke="#8884d8" activeDot={{ r: 8 }} name="Activity index" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="alerts">
            <h3>Smart Early Warning</h3>
            {/* Warning logic */}
            {selectedCow.bodyTemperature > 39.5 && (
              <div className="alert warning">High body temperature warning: There may be a risk of disease!</div>
            )}
            {selectedCow.activityLevel > 85 && (
              <div className="alert info">High activity warning: may be in estrus period.</div>
            )}
            {environmentData.temperature > 30 && (
               <div className="alert danger">Heat stress warning: The temperature in the cowshed is too high! Suggest activating the cooling device.</div>
            )}
            {/* 如果没有警报，显示正常 */}
            {selectedCow.bodyTemperature <= 39.5 && selectedCow.activityLevel <= 85 && (
               <div className="alert success">Normal status</div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;