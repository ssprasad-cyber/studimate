// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import DashboardPage from './components/DashboardPage';
import StudyToolsPage from './components/StudyToolsPage';
import ChatbotPage from './components/ChatbotPage';
import ResourceLibraryPage from './components/ResourceLibraryPage';
import ProfileSettingsPage from './components/ProfileSettingsPage';
import NotFoundPage from './components/NotFoundPage';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/study-tools" element={<StudyToolsPage />} />
          <Route path="/chatbot" element={<ChatbotPage />} />
          <Route path="/resource-library" element={<ResourceLibraryPage />} />
          <Route path="/profile-settings" element={<ProfileSettingsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
