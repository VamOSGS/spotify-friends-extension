import axios from 'axios';

function getLoginURL(scopes, redirect_uri) {
  return (
    'https://accounts.spotify.com/authorize?client_id=' +
    process.env.REACT_APP_SPOTIFY_CLIENT_ID +
    '&redirect_uri=' +
    redirect_uri +
    '&scope=' +
    encodeURIComponent(scopes.join(' ')) +
    '&response_type=token'
  );
}

export const login = () => {
  const authURL = getLoginURL(
    [
      'user-read-private',
      'playlist-read-private',
      'playlist-modify-public',
      'playlist-modify-private',
      'user-library-read',
      'user-library-modify',
      'user-follow-read',
      'user-follow-modify',
    ],
    window.location.href
  );

  window.location.replace(authURL)
};

export const getCurrentUser = async (token) => {
  try {
    const response = await axios({
      method: 'GET',
      url: `https://api.spotify.com/v1/me`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (err) {
    return err.response.data.error;
  }
};
