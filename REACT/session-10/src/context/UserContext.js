import React, { createContext, useState } from 'react';

export const UserContext = createContext({
  username: 'Aarav Sharma',
  loggedIn: true,
  toggleLogin: () => {},
  setUsername: () => {}
});

export function UserProvider({ children }) {
  const [userState, setUserState] = useState({
    username: 'Aarav Sharma',
    loggedIn: true
  });

  const toggleLogin = () => {
    setUserState(prev => ({
      ...prev,
      loggedIn: !prev.loggedIn
    }));
  };

  const setUsername = (newUsername) => {
    setUserState(prev => ({
      ...prev,
      username: newUsername
    }));
  };

  return (
    <UserContext.Provider
      value={{
        username: userState.username,
        loggedIn: userState.loggedIn,
        toggleLogin,
        setUsername
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
