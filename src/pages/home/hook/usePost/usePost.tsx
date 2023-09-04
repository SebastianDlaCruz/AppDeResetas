import { useUserContext } from "@context/index";
import { statusImage } from "@hook/useGetImg/useGetImg";
import { createPost } from "@pages/home";
import { newPost } from "@pages/home/util/newPost/newPost.util";
import { sendPostWithTheImage } from "@pages/home/util/sendPostWithTheImage/sendPostWithTheImage.util";
import { responseImg, setImagePost } from "@services/setImagePost/setImagePost.service";
import { Dispatch, RefObject, SetStateAction, useRef } from "react";


const usePost = (imgRef: RefObject<HTMLInputElement>,
  setImage: Dispatch<SetStateAction<string>>, setStateImage: Dispatch<SetStateAction<statusImage>>) => {

  const { user } = useUserContext();
  const postRef = useRef<HTMLTextAreaElement>(null);


  const onSubmit = (event: React.FormEvent<HTMLDivElement>) => {
    event.preventDefault();

    newPost["iudUser"] = user.uid;
    newPost["nameUser"] = user.name;
    newPost["imgUser"] = user.photo || '';
    newPost["emailUser"] = user.email;

    if (postRef.current !== null) {

      if (imgRef.current !== null &&
        imgRef.current.files?.length !== undefined &&
        imgRef.current.files?.length > 0 && postRef.current) {
        setImagePost(imgRef.current, 'Publicaciones/').then((response) => {
          if (response.ok === responseImg.SUCCESS &&
            response.imgUrl && postRef.current &&
            imgRef.current) {
            newPost["img"] = response.imgUrl;
            newPost["description"] = postRef.current.value;
            sendPostWithTheImage(postRef, newPost);
            setImage("");
            imgRef.current.value = '';
            setStateImage(statusImage.NULL);
            postRef.current.value = '';
          }
        });
      } else if (postRef.current.value.trim()) {
        newPost["description"] = postRef.current.value;
        newPost["img"] = '';
        createPost(newPost);
        postRef.current.value = '';
      }
    }
  }

  return {
    postRef,
    onSubmit,

  }

}

export default usePost