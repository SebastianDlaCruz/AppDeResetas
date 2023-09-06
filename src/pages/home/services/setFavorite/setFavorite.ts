import { ModelPost } from "@pages/home/models/post.model";
import { FirebaseDB } from "@utilities/index";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
/** Eliminar */
export const setFavorite = async (id: string, post: ModelPost) => {
  await setDoc(doc(FirebaseDB, 'Publicaciones', id), { ...post })
}



export const setDocFavorite = async (favorite: ModelFavorite) => {
  try {
    const response = await addDoc(collection(FirebaseDB, 'Favoritos'), favorite);
    if (!response) throw new Error('Error al crear un publicación');
    return {
      ok: true,
      idPost: response.id
    }
  } catch (error) {
    console.error(error);
    return {
      ok: false,
      message: 'Error al crear un post'
    }
  }

}

