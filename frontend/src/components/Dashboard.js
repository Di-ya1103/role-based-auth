import React, { useEffect, useState } from 'react';
import { getAuth, clearAuth } from '../utils/auth';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const { user, token } = getAuth();
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchDashboard() {
      try {
        const res = await fetch('http://localhost:4000/api/dashboard', {
          headers: { Authorization: `Bearer ${token}` }
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || 'Failed');
        setMessage(data.message + ' (role: ' + data.yourRole + ')');
      } catch (err) {
        setMessage(err.message);
      }
    }

    fetchDashboard();
  }, [token]);

  function logout() {
    clearAuth();
    navigate('/');
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {user?.name} (role: {user?.role})</p>
      <p>{message}</p>

      <div style={{ marginTop: 20 }}>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}
