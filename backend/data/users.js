// Simple in-memory users. DO NOT use this in production.
// Passwords are plain-text here for simplicity. In real apps store hashed passwords.
module.exports = [
  { id: 1, username: 'alice', password: 'password123', name: 'Alice', role: 'admin' },
  { id: 2, username: 'bob', password: 'password123', name: 'Bob', role: 'manager' },
  { id: 3, username: 'carl', password: 'password123', name: 'Carl', role: 'user' }
];
