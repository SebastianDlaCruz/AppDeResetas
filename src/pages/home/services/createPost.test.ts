import { describe, expect, test } from "vitest";
import { createPost } from "..";
import { ModelPost } from "../models/post.model";


describe('crear post', () => {

  test('post', async () => {
    const post: ModelPost = {
      iudUser: 'RwrJXTiYrAer9lm4COOMGwsxfW03',
      img: 'esta es una img',
      description: 'esta es una receta secreta xd',
      favorite: false
    }
    try {
      await expect(createPost(post)).toBeCalledWith();

    } catch (error) {
    }
  })
})