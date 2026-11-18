export function login(_req, res) {
  // As per compliance guidelines and security rules, production authentication is not configured with fake credentials.
  return res.status(501).json({
    error: 'Production authentication is not configured.',
    message: 'Client portal authentication requires active client credentials issued by the firm.'
  });
}

export function forgotPassword(_req, res) {
  return res.status(501).json({
    error: 'Production authentication is not configured.',
    message: 'Please contact the R J R & Company office directly for credential verification.'
  });
}
