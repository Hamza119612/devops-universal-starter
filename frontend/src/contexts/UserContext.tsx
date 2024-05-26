import React, { createContext, useReducer, ReactNode, Dispatch } from 'react';

// Define User interface
interface User {
  id: string;
  name: string;
  email: string;
}

// Define state and action types
interface UserState {
  users: User[];
}

interface SetUsersAction {
  type: 'SET_USERS';
  payload: User[];
}

type UserAction = SetUsersAction;

// Initial state
const initialState: UserState = {
  users: [],
};

// Create the context
const UserContext = createContext<{ state: UserState; dispatch: Dispatch<UserAction> }>({
  state: initialState,
  dispatch: () => null,
});

// User reducer function
const userReducer = (state: UserState, action: UserAction): UserState => {
  switch (action.type) {
    case 'SET_USERS':
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

// Define UserProvider props type
interface UserProviderProps {
  children: ReactNode;
}

// UserProvider component
const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
