interface Props {
  ok: boolean;
  src: string;
}
export const uploadImage = (file: HTMLInputElement | null): Promise<Props> => {

  return new Promise((resolve, reject) => {
    if (file && file.files) {
      const render = new FileReader();
      render.onload = (e) => {
        if (e.target) {
          resolve({
            src: e.target.result as string,
            ok: true
          })
        }
      }
      render.onerror = () => {
        reject(new Error("error al cargar la imagen"))

      }
      if (file.files.length > 0) {
        render.readAsDataURL(file.files[0]);
      }

    }
  })
}

