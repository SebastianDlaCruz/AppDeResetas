import { useUserContext } from "@context/index";
import { setImagePost } from "@services/setImagePost/setImagePost.service";
import { ChangeEvent, Dispatch, FormEvent, RefObject, SetStateAction, useEffect, useState } from "react";
import { updateProfileUser } from "../../service/updateProfileUser/updateProfileUser.service";

enum StateProfile {
  PENDING = "pending",
  UPDATE = "UPDATE"
}

interface Props {
  imgRef: RefObject<HTMLInputElement>,
  imgSrc: string;
  setImgSrc: Dispatch<SetStateAction<string>>
}
const useProfile = ({ imgRef, imgSrc, setImgSrc }: Props) => {
  const { user, dispatch } = useUserContext();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [isLoading, setLoading] = useState(false);

  const [stateProfile, setStateProfile] = useState<StateProfile>(StateProfile.PENDING);

  const handleName = (event: ChangeEvent<HTMLInputElement>) => setName(event.target.value);
  const handleEmail = (event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);


  useEffect(() => {

    if (stateProfile === StateProfile.UPDATE) {
      dispatch({
        type: "SET_USER",
        payload: {
          email: user.email,
          name: name,
          photo: imgSrc || user.photo,
          uid: user.uid
        }
      })
      setStateProfile(StateProfile.PENDING);
      setLoading(false);
    }
  }, [stateProfile])


  const handleSubmit = (event: FormEvent<HTMLDivElement>) => {

    event.preventDefault();
    if (imgRef.current?.files?.length !== undefined
      && imgRef.current?.files?.length > 0) {
      setImagePost(imgRef.current, 'Perfil/').then(res => {
        updateProfileUser(name, res.imgUrl, email).then(res => {
          console.log(res);
          if (res && res.ok) {
            setLoading(true);
            setStateProfile(StateProfile.UPDATE);
            setImgSrc("");
          }
        });
      })
    }
    if (user.photo !== '' && user.photo) {
      updateProfileUser(name, user.photo, email);
      setStateProfile(StateProfile.UPDATE)
    }

  }


  return {
    email,
    name,
    handleName,
    handleEmail,
    handleSubmit,
    user,
    isLoading
  }
}

export default useProfile
