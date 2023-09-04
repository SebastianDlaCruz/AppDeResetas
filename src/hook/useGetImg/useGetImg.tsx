import { uploadImage } from "@utilities/uploadImage/uploadImage.utilities";
import { useRef, useState } from "react";

export enum statusImage {
  NULL = "null",
  PENDING = "pending",
  SUCCESS = "success"
}

const useGetImg = () => {
  const imgRef = useRef<HTMLInputElement>(null);
  const [stateImg, setStateImg] = useState<statusImage>(statusImage.NULL);
  const [imgSrc, setImgSrc] = useState('');

  const handleImageUpdate = async () => {
    setStateImg(statusImage.PENDING);
    try {
      const response = await uploadImage(imgRef.current);
      if (response.ok) {
        setStateImg(statusImage.SUCCESS);
        setImgSrc(response.src);
      }
    } catch (error) {
      setStateImg(statusImage.NULL);
      console.error(error);
    }
  }

  const handleResetImg = () => {
    if (imgRef.current) {
      imgRef.current.value = '';
      setImgSrc("");
      setStateImg(statusImage.NULL);
    }
  }


  return {
    imgRef,
    handleResetImg,
    handleImageUpdate,
    stateImg,
    imgSrc,
    setImgSrc,
    setStateImg
  }
}

export default useGetImg
