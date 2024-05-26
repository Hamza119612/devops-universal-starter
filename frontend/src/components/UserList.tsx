// src/components/UserList.tsx
import React, { useContext, useEffect } from 'react';
import { UserContext } from '../contexts/UserContext';
import useFetch from '../hooks/useFetch';
import withLoading from './withLoading';

interface User {
  id: string;
  name: string;
  email: string;
}

interface UserListProps {
  loading: boolean;
}

const UserList: React.FC<UserListProps> = ({ loading }) => {
  const { state, dispatch } = useContext(UserContext);
  const { data } = useFetch<User[]>('http://localhost:4000/users');

  useEffect(() => {
    if (data) {
      dispatch({ type: 'SET_USERS', payload: data });
    }
  }, [data, dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {state.users.map((user,index) => (
        <li key={index}>{user.name}</li>
      ))}
    </ul>
  );
};

export default withLoading(UserList);
