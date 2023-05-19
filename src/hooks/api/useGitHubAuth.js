import { signInGitHub } from '../../services/authApi';

export default function useGitHubAuth() {
  return { gitHubAuthURL: getAuthURL(), code: getUrlCode(), signInGitHub };
}

function getOAuthParams() {
  const { REACT_APP_GH_OAUTH_REDIRECT_URL, REACT_APP_GH_OAUTH_CLIENT_ID } = process.env;

  return new URLSearchParams({
    response_type: 'code',
    scope: 'user',
    client_id: REACT_APP_GH_OAUTH_CLIENT_ID,
    redirect_uri: REACT_APP_GH_OAUTH_REDIRECT_URL,
  });
}

function getAuthURL() {
  const REACT_APP_GH_OAUTH_AUTHORIZE_URL = 'https://github.com/login/oauth/authorize';

  const options = getOAuthParams().toString();

  return `${REACT_APP_GH_OAUTH_AUTHORIZE_URL}?${options}`;
}

function getUrlCode() {
  return getQueryString().get('code');
}

function getQueryString() {
  return new URLSearchParams(window.location.search);
}
