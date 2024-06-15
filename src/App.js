// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import DashboardPage from './components/DashboardPage';
import StudyToolsPage from './components/StudyToolsPage';
import ChatbotPage from './components/ChatbotPage';
import ResourceLibraryPage from './components/ResourceLibraryPage';
import ProfileSettingsPage from './components/ProfileSettingsPage';
import NotFoundPage from './components/NotFoundPage';
import Main from './mainpage/main';
import LoginPage from './components/logins/LoginPage';
import SignupPage from './components/logins/SignupPage';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/homepage" element={<HomePage loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          <Route path="/" element={<Main />} />
          <Route path="/dashboard" element={<PrivateRoute element={<DashboardPage />} loggedIn={loggedIn} />} />
          <Route path="/study-tools" element={<PrivateRoute element={<StudyToolsPage />} loggedIn={loggedIn} />} />
          <Route path="/chatbot" element={<PrivateRoute element={<ChatbotPage />} loggedIn={loggedIn} />} />
          <Route path="/resource-library" element={<PrivateRoute element={<ResourceLibraryPage />} loggedIn={loggedIn} />} />
          <Route path="/profile-settings" element={<PrivateRoute element={<ProfileSettingsPage />} loggedIn={loggedIn} />} />
          <Route path="/login" element={<LoginPage setLoggedIn={setLoggedIn} />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
