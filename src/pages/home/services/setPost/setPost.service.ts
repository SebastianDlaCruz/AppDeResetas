import { ModelUser } from "@context/index";
import { ModelPost, ModelPublic } from "@pages/home/models/post.model";
import { FirebaseDB } from "@utilities/index";
import { doc, setDoc } from "firebase/firestore";
export const setPost = async (post: ModelPublic, user: ModelUser) => {
  const newPost: ModelPost = {
    description: post.description,
    emailUser: post.emailUser,
    img: post.img,
    imgUser: post.imgUser,
    iudUser: post.iudUser,
    nameUser: post.nameUser,
    foodType: post.foodType,
    seasonType: post.seasonType,
    title: post.title,
    date: post.date,
    time: post.time,
    favoritesCollection: post.favoritesCollection

  }

  const { email, name, photo } = user;
  await setDoc(doc(FirebaseDB, 'Publicaciones', post.id), { ...newPost, emailUser: email, nameUser: name, imgUser: photo });
} 