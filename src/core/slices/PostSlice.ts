import { createAction, createSlice } from '@reduxjs/toolkit';
import { IPost } from '../../types/Posts';
import { actions } from '../Constants';

interface IPostState {
  post: IPost | null;
  isShowModalImage: boolean;
}

const initialState: IPostState = {
  post: null,
  isShowModalImage: false,
};

export const getPostsAction = createAction<{ id: number }>(actions.GET_POST);

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPost: (state, action) => {
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

export const { setPost, removePost, setIsShowModalImage } = postSlice.actions;
export const showPost = (state: { postSl: IPostState }) => state.postSl.post;
export const getIsShowModalImage = (state: { postSl: IPostState }) => state.postSl.isShowModalImage;
export default postSlice.reducer;
