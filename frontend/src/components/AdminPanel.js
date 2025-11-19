import React, { useEffect, useState } from 'react';
import { getAuth } from '../utils/auth';

export default function AdminPanel() {
  const { token, user } = getAuth();
  const [msg, setMsg] = useState('');

  useEffect(() => {
    async function fetchAdmin() {
      try {
        const res = await fetch('http://localhost:4000/api/admin', {
          headers: { Authorization: `Bearer ${token}` }
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || 'Failed');
        setMsg(data.message);
      } catch (err) {
        setMsg(err.message);
      }
    }
    fetchAdmin();
  }, [token]);

  return (
    <div>
      <h2>Admin Panel</h2>
      <p>Welcome {user?.name}. This page is admin-only.</p>
      <p>{msg}</p>
    </div>
  );
}
