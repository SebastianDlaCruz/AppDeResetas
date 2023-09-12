import { ModelUser } from "@context/index";
import { ModelComment, ModelCommentInfo } from "@pages/home/models/comment.model";
import { FirebaseDB } from "@utilities/index";
import { doc, setDoc } from "firebase/firestore";

export const setComment = async (comment: ModelCommentInfo, user: ModelUser) => {
  const { email, name, photo } = user;

  const newComment: ModelComment = {
    comment: comment.comment,
    emailUser: comment.emailUser,
    idPost: comment.idPost,
    idUser: comment.idUser,
    imgUser: comment.imgUser,
    nameUser: comment.nameUser,
    date: comment.date,
    time: comment.time
  };
  await setDoc(doc(FirebaseDB, 'Comentarios', comment.id), { ...newComment, emailUser: email, nameUser: name, imgUser: photo })

}