import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useUserContext } from "@context/index";
import { createComment } from "@pages/home/services/createComment/createComment";
import { newComment } from "@pages/home/util/newComment/newComment.util";
import { ChangeEvent, FormEvent, useState } from "react";
interface Props {
  idPost: string;
}
const FormComment = ({ idPost }: Props) => {
  const [comment, setComment] = useState("");

  const { user } = useUserContext();
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => setComment(event.target.value);

  const handleSubmit = (event: FormEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (comment.trim()) {
      newComment["comment"] = comment;
      newComment["emailUser"] = user.email;
      newComment["idUser"] = user.uid;
      newComment["imgUser"] = user.photo || '';
      newComment["nameUser"] = user.name;
      newComment["idPost"] = idPost;
      createComment(newComment);
      setComment("");
    }

  }

  return (
    <FormControl as="form" onSubmit={handleSubmit} position={"relative"} >
      <FormLabel>Escribe un comentario</FormLabel>
      <Input type="text" value={comment} onChange={handleChange}
        bgColor={"white"} h={"53px"} borderRadius={"30px"} />
      <Button type="submit" position={"absolute"} insetInlineEnd={"1%"} insetBlockStart={"45%"}>Publicar</Button>
    </FormControl>
  )
}

export default FormComment
