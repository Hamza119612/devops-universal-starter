// src/App.tsx
import React, { useState, useEffect } from 'react';
import { UserProvider } from './contexts/UserContext';
import UserList from './components/UserList';
import useFetch from './hooks/useFetch';
import UserForm from './components/UseForm';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const { data } = useFetch('http://localhost:4000/users');

  useEffect(() => {
    if (data) {
      setLoading(false);
    }
  }, [data]);

  const handleUserAdded = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <UserProvider>
      <div className="App">
        <h1>User List</h1>
        <UserList loading={loading} />
        <h2>Add Users</h2>
        <UserForm onUserAdded={handleUserAdded} />

      </div>
    </UserProvider>
  );
};

export default App;
