// api/schwab-auth.js
// Step 1 of OAuth 2.0 — redirects user to Schwab login page
// Visit: https://your-options-chain-url.vercel.app/api/schwab-auth

export default function handler(req, res) {
  const clientId    = process.env.SCHWAB_CLIENT_ID;
  const callbackUrl = process.env.SCHWAB_CALLBACK_URL;

  const params = new URLSearchParams({
    client_id:     clientId,
    redirect_uri:  callbackUrl,
    response_type: "code",
    scope:         "readonly",
  });

  res.redirect(`https://api.schwabapi.com/v1/oauth/authorize?${params}`);
}
