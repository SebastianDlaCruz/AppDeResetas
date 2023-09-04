import { ModelUser } from "@context/index";
import { ModelCommentInfo } from "@pages/home/models/comment.model";
import { setComment } from "@pages/home/services/setComment/setComment.service";
import { useEffect } from "react";

const useSetDataComment = (comment: ModelCommentInfo[], user: ModelUser) => {

  useEffect(() => {
    comment.forEach(item => {
      if (item.idUser === user.uid) {
        setComment(item, user);
      }
    })

  }, [comment]);
}

export default useSetDataComment;