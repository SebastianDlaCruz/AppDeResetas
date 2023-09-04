import { Dispatch, createContext, useReducer } from 'react';
import { ModelUser } from './model/user.model';
import { initialUser } from './utilities/initialUser/initialUser.util';
import { Action, reducerUser } from './utilities/reducerUser/reducerUser.util';

export const ContextUser = createContext<{
  user: ModelUser
  dispatch: Dispatch<Action>
}>({
  user: initialUser,
  dispatch: () => null
});

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const ProviderUser = ({ children }: Props) => {
  const [user, dispatch] = useReducer(reducerUser, initialUser);
  return (
    <ContextUser.Provider value={{ user, dispatch }}>
      {children}
    </ContextUser.Provider>
  )
}