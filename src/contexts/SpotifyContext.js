import useUrlHash from 'hooks/useUrlHash';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { getCurrentUser } from 'services/auth';
import { useNavigate } from 'react-router-dom';
import { getFriendsActivity } from 'services/friends';
const SpotifyContext = createContext({});

const LOCAL_TOKEN_KEY = 'sp_token';

export const useSpotify = () => useContext(SpotifyContext);

export const SpotifyProvider = ({ children }) => {
  const [user, setUser] = useState({ id: 'guest' });
  const [accessToken, setAccessToken] = useState(null);
  const urlHash = useUrlHash();
  const navigate = useNavigate();
  const getUser = async (token) => {
    const user = await getCurrentUser(token);
    if (user.status === 401) {
      return;
    }
    // const friends = await getFriendsActivity(token);
    // console.log(friends);
    setUser(user);
  };

  const logOut = () => {
    setUser({ id: 'guest' });
    localStorage.removeItem(LOCAL_TOKEN_KEY);
    navigate('/');
  };

  useEffect(() => {
    const localToken = localStorage.getItem(LOCAL_TOKEN_KEY);
    const token = urlHash.access_token;
    if (token) {
      localStorage.setItem(LOCAL_TOKEN_KEY, token);
    }
    console.log(localToken);
    if (localToken || token) {
      getUser(localToken || token);
      setAccessToken(localToken || token);
      return;
    }
  }, [urlHash.access_token]);

  return (
    <SpotifyContext.Provider value={{ accessToken, user, setUser, logOut }}>
      {children}
    </SpotifyContext.Provider>
  );
};
