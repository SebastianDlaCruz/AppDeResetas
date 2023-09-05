import { createPost } from "@pages/home";
import { ModelPost } from "@pages/home/models/post.model";
import { RefObject } from "react";
export const sendPostWithTheImage = async (postRef: RefObject<HTMLTextAreaElement>, newPost: ModelPost) => {
  if (postRef.current?.value.trim()) {
    const response = await createPost(newPost);
    return response.idPost;
  }
  return '';
}
