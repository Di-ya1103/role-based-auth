export function setAuth(user, token) {
  localStorage.setItem('rba_user', JSON.stringify(user));
  localStorage.setItem('rba_token', token);
}

export function getAuth() {
  const user = localStorage.getItem('rba_user');
  const token = localStorage.getItem('rba_token');
  return { user: user ? JSON.parse(user) : null, token };
}

export function clearAuth() {
  localStorage.removeItem('rba_user');
  localStorage.removeItem('rba_token');
}
