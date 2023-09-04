import { useUserContext } from "@context/index";
import { FirebaseAuth } from "@utilities/firebase/index.firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
/**
 * Hook que  retornar el usuario que inicio session 
 * cargador de estado , posible solución pendiente, éxito o error 
 * @returns 
 */


const useAuth = () => {

  const [isLoading, setIsLoading] = useState(false);
  const { user, dispatch } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    /* Borrar funcion */
    /* const userCredential = onAuthState(); */
    onAuthStateChanged(FirebaseAuth, (userCredential) => {
      if (userCredential) {
        if (userCredential.email && userCredential.displayName) {
          dispatch({
            type: 'SET_USER',
            payload: {
              email: userCredential.email,
              name: userCredential.displayName,
              uid: userCredential.uid,
              photo: userCredential.photoURL
            }
          })
          setIsLoading(true);
        }
      } else {
        navigate('/logIn');

      }
    })

  }, [])

  return {
    isLoading,
    user
  }
}

export default useAuth
