import { FirebaseDB } from "@utilities/index";
import { addDoc, collection } from "firebase/firestore";
import { ModelPost } from "../models/post.model";

interface Props {
  ok: boolean;
  idPost?: string;
  message?: string;
}
export const createPost = async (post: ModelPost): Promise<Props> => {

  try {
    const response = await addDoc(collection(FirebaseDB, 'Publicaciones'), post);
    if (!response) throw new Error('Error al crear un publicación');
    response.id
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