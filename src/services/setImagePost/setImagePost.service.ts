import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";


export enum responseImg {
  SUCCESS = "success",
  ERROR = "error",
  NOTHING = "nothing"
}

export interface PropsImagePost {
  ok: responseImg;
  imgUrl?: string;
  message?: string;
}

export const setImagePost = async (file: HTMLInputElement | null, nameDoc: string): Promise<PropsImagePost> => {

  if (file && file.files) {
    const fileInput = file.files[0];
    const storage = getStorage();
    const storageRef = ref(storage, nameDoc + fileInput.name);

    try {
      const snapshot = await uploadBytes(storageRef, fileInput);
      if (!snapshot) throw new Error('erro al cargar la imagen');

      const urlImage = await getDownloadURL(snapshot.ref);

      return {
        ok: responseImg.SUCCESS,
        imgUrl: urlImage
      }


    } catch (error) {
      console.error(error);
      return {
        ok: responseImg.ERROR,
        message: 'error al cargar la foto'
      }
    }

  }

  return {
    ok: responseImg.NOTHING,
    message: "No cargo ninguna img"
  }

}