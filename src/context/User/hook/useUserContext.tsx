import { useContext } from "react";
import { ContextUser } from "../User.context";
const useUserContext = () => {
  const { user, dispatch } = useContext(ContextUser);
  return {
    user, dispatch
  }
}

export default useUserContext
