import React from 'react';
import { Link } from 'react-router-dom';

export default function Unauthorized() {
  return (
    <div>
      <h2>403 — Unauthorized</h2>
      <p>You don't have permission to view this page.</p>
      <Link to="/">Go to Login</Link>
    </div>
  );
}
