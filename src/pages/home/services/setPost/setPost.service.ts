import { ModelUser } from "@context/index";
import { ModelPublic } from "@pages/home/components/Publications/Publications";
import { ModelPost } from "@pages/home/models/post.model";
import { FirebaseDB } from "@utilities/index";
import { doc, setDoc } from "firebase/firestore";
export const setPost = async (post: ModelPublic, user: ModelUser) => {
  const newPost: ModelPost = {
    description: post.description,
    emailUser: post.emailUser,
    favorite: post.favorite,
    img: post.img,
    imgUser: post.imgUser,
    iudUser: post.iudUser,
    nameUser: post.nameUser
  }

  const { email, name, photo } = user;
  await setDoc(doc(FirebaseDB, 'Publicaciones', post.id), { ...newPost, emailUser: email, nameUser: name, imgUser: photo });
} 