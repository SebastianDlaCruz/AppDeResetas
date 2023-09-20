import { ModelUser } from "@context/index"
import { ModelPublic } from "@pages/home/models/post.model"
import { setPost } from "@pages/home/services/setPost/setPost.service"
import { useEffect } from "react"
const useSetDataPost = (post: ModelPublic[], user: ModelUser) => {

  useEffect(() => {
    post.forEach(item => {
      if (item.iudUser === user.uid) {
        setPost(item, user);
      }
    })
  }, [user, post]);

}

export default useSetDataPost;
