import { FirebaseAuth } from "@utilities/index";
import { updateEmail, updateProfile } from "firebase/auth";

export const updateProfileName = async (name: string | null) => {
  try {
    const auth = FirebaseAuth.currentUser

    if (auth && name !== null) {
      await updateProfile(auth, { displayName: name });
      console.log('exito');
    }

  } catch (error) {
    console.log(error);
  }
}


export const updateProfileImg = async (img: string | null) => {
  try {
    const auth = FirebaseAuth.currentUser

    if (auth && img !== null) {
      await updateProfile(auth, { displayName: img });
      console.log('exito');
    }

  } catch (error) {
    console.log(error);
  }
}


export const updateProfileUser = async (name: string, photo: string | undefined, email: string) => {
  try {

    if (FirebaseAuth.currentUser) {
      await updateProfile(FirebaseAuth.currentUser, { displayName: name, photoURL: photo });
      const res = await updateEmail(FirebaseAuth.currentUser, email);
      console.log(res);
      return {
        ok: true
      }
    }
  } catch (error) {
    console.log(error);
    return {
      ok: false
    }
  }
}
