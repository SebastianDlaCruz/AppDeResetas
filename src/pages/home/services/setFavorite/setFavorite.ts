import { ModelPost } from "@pages/home/models/post.model";
import { FirebaseDB } from "@utilities/index";
import { doc, setDoc } from "firebase/firestore";

export const setFavorite = async (id: string, favorite: boolean, post: ModelPost) => {
  await setDoc(doc(FirebaseDB, 'Publicaciones', id), { ...post, favorite })

}