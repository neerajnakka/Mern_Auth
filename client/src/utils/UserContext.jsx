/* eslint-disable react/prop-types */
import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!user) {
      axios.get('/profile').then(({ data }) => setUser(data)); // Added parentheses around data
    }
  }, []); // Added user as a dependency

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {/* Wrapped value in curly braces */}
      {children}
    </UserContext.Provider>
  );
}
