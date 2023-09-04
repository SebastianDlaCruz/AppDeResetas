import { FirebaseDB } from "@utilities/index";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
interface Props {
  nameDoc: string,
}

const useGetData = <T,>({ nameDoc }: Props) => {

  const [documentInfo, setDocumentInfo] = useState<T[]>([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(FirebaseDB, nameDoc), (doc) => {
      try {
        const data: T[] = [];
        doc.forEach(doc => {
          const documentData = doc.data() as T;
          const id = doc.id;
          data.push({
            ...documentData,
            id
          });
        })

        setDocumentInfo(data);
        setIsSuccess(true);
      } catch (error) {
        console.log(error);
      }
    })

    if (documentInfo.length > 0) {
      setLoading(true);
    }

    return () => unsubscribe();
  }, [nameDoc])


  return {
    isSuccess,
    documentInfo,
    isLoading
  }
}

export default useGetData;
