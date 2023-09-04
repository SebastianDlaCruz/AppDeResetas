import { FirebaseAuth } from "@utilities/firebase/index.firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { ResponseAuth } from "../model/auth.model";

/**
 * registra un usuario 
 * @param name 
 * @param email 
 * @param password 
 * @returns 
 */


export const createUser = async (name: string, email: string, password: string): Promise<ResponseAuth> => {

  try {

    const userCredential = await createUserWithEmailAndPassword(FirebaseAuth, email, password);

    if (!userCredential) throw new Error("Erro al registra el usuario");

    await updateProfile(userCredential.user, { displayName: name, photoURL: '' });

    return {
      status: true,
      message: "registro de usuario exitoso"
    }

  } catch (error) {
    console.error(error);
    return {
      status: false,
      message: 'Error al registrar al usuario. Verifique las credenciales.',
    }

  }


};

/**
 * login usuario
 * @param email 
 * @param password 
*/

export const singUser = async (email: string, password: string): Promise<ResponseAuth> => {

  try {
    const userCredential = await signInWithEmailAndPassword(FirebaseAuth, email, password);
    if (!userCredential) throw new Error("Erro al iniciar session");

    return {
      status: true,
      message: 'éxito'
    }

  } catch (error) {
    console.error(error);

    return {
      status: false,
      message: 'no se puedo iniciar session. Asegúrese que estar registrado o ingrese bien las credenciales'
    }
  }

}


/**
 * vivifica que el estado de autenticación
 * @param email 
 * @param password 
*/



/**
 * Cerrar session del usuario
 */


export const singOutUser = async () => {
  try {
    await signOut(FirebaseAuth);
    console.log('Éxito al cerrar la session');
  } catch (error) {
    console.error(error);
  }
}

