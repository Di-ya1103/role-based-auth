module.exports = {
  secret: process.env.JWT_SECRET || 'supersecret_jwt_key_change_me',
  expiresIn: '2h'
};
