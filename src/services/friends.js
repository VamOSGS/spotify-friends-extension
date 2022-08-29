import axios from 'axios';

export const getFriendsActivity = (token) =>
  axios({
    method: 'GET',
    url: `https://guc-spclient.spotify.com/presence-view/v1/buddylist`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
