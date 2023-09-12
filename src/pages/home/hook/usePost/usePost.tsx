import { useUserContext } from "@context/index";
import { statusImage } from "@hook/useGetImg/useGetImg";
import { createPost } from "@pages/home";
import { getCurrentDate, getTime } from "@pages/home/util/Date/date.util";
import { newPost } from "@pages/home/util/newPost/newPost.util";
import { sendPostWithTheImage } from "@pages/home/util/sendPostWithTheImage/sendPostWithTheImage.util";
import { responseImg, setImagePost } from "@services/setImagePost/setImagePost.service";
import { ChangeEvent, Dispatch, RefObject, SetStateAction, useRef, useState } from "react";
const usePost = (imgRef: RefObject<HTMLInputElement>,
  setImage: Dispatch<SetStateAction<string>>,
  setStateImage: Dispatch<SetStateAction<statusImage>>) => {

  const { user } = useUserContext();
  const postRef = useRef<HTMLTextAreaElement>(null);
  const [title, setTitle] = useState('');
  const [seasonType, setSeasonType] = useState('');
  const [foodType, setFoodType] = useState('');


  const handleTitle = (event: ChangeEvent<HTMLInputElement>) => setTitle(event.target.value);
  const handleSeasonType = (event: ChangeEvent<HTMLSelectElement>) => setSeasonType(event.target.value);
  const handleFoodTyp = (event: ChangeEvent<HTMLSelectElement>) => setFoodType(event.target.value);

  const onSubmit = (event: React.FormEvent<HTMLDivElement>) => {
    event.preventDefault();

    newPost["iudUser"] = user.uid;
    newPost["nameUser"] = user.name;
    newPost["imgUser"] = user.photo || '';
    newPost["emailUser"] = user.email;
    newPost["title"] = title;
    newPost["foodType"] = foodType;
    newPost["seasonType"] = seasonType;
    newPost["date"] = getCurrentDate();
    newPost["time"] = getTime();

    if (postRef.current !== null) {
      if (imgRef.current !== null &&
        imgRef.current.files?.length !== undefined &&
        imgRef.current.files?.length > 0 && postRef.current) {
        setImagePost(imgRef.current, 'Publicaciones/')
          .then((response) => {
            if (response.ok === responseImg.SUCCESS &&
              response.imgUrl && postRef.current &&
              imgRef.current) {
              newPost["img"] = response.imgUrl;
              newPost["description"] = postRef.current.value;
              sendPostWithTheImage(postRef, newPost);
              setImage("");
              setFoodType("");
              setSeasonType("")
              setTitle("")
              imgRef.current.value = '';
              setStateImage(statusImage.NULL);
              postRef.current.value = '';
            }
          });

      } else if (postRef.current.value.trim()) {
        console.log(newPost)
        newPost["description"] = postRef.current.value;
        newPost["img"] = '';
        createPost(newPost);
        postRef.current.value = '';
        setImage("");
        setFoodType("");
        setSeasonType("")
        setTitle("")
      }
    }
  }

  return {
    postRef,
    onSubmit,
    handleTitle,
    handleSeasonType,
    handleFoodTyp,
    title
  }

}

export default usePost