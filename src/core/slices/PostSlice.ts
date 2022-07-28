import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { IPost } from '../../types/Posts';

interface IPostState {
  post: IPost | null;
  isShowModalImage: boolean;
}

const initialState: IPostState = {
  post: null,
  isShowModalImage: false,
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.post = action.payload;
    },
    removePost: (state) => {
      state.post = null;
    },
    setIsShowModalImage: (state, action) => {
      state.isShowModalImage = action.payload;
    },
  },
});

export const getPostAsync =
  ({ postid }: { postid: string }) =>
  async (dispatch: any) => {
    try {
      if (postid !== null) {
        const response = await axios.get(`https://studapi.teachmeskills.by/blog/posts/${postid}`);
        const post = response.data;
        dispatch(addPost(post));
      } else dispatch(removePost());
    } catch (err: any) {
      throw new Error(err);
    }
  };

export const { addPost, removePost, setIsShowModalImage } = postSlice.actions;
export const showPost = (state: { postSl: IPostState }) => state.postSl.post;
export const getIsShowModalImage = (state: { postSl: IPostState }) => state.postSl.isShowModalImage;
export default postSlice.reducer;
