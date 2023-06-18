import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import Loader from './components/Loader/Loader';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route
            path="/dashboard"
            element={
                <Suspense fallback={<Loader />}>
                  <DashboardPage />
                </Suspense>      
            }
          />
          <Route
            path="/admin/dashboard"
            element={
                <Suspense fallback={<Loader />}>
                  <DashboardPage />
                </Suspense>      
            }
           />
          <Route
            path="/admin/admin"
            element={
                <Suspense fallback={<Loader />}>
                  {/* <LoginPage /> */}
                </Suspense>      
            }
          />
          <Route path="/*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </div>
  );
}

export default App;
