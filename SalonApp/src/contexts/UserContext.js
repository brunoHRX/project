import React, {createContext, useReducer} from 'react';
import {initialSTate, UserReducer} from '../reducers/UserReducer';

export const UserContext = createContext();

export default ({children}) => {
  const [state, dispatch] = useReducer(UserReducer, initialSTate);

  return (
    <UserContext.Provider value={{state, dispatch}}>
      {children}
    </UserContext.Provider>
  );
};
