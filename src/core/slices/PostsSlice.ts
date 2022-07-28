import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { IPostsInfo, IPost } from '../../types/Posts';

interface IPostsState {
  posts: IPostsInfo | null;
  postCount: number;
  isShowModalPost: boolean;
  isShowModalPostsImage: boolean;
  selectedPost: IPost | null;
}

const initialState: IPostsState = {
  posts: null,
  postCount: 19,
  isShowModalPost: false,
  isShowModalPostsImage: false,
  selectedPost: null,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPosts: (state, action) => {
      const posts = action.payload.results.map((post: IPost) => ({ ...post }));
      state.posts = { ...action.payload, results: posts };
    },
    removePosts: (state) => {
      state.posts = null;
    },
    setIsShowModalPost: (state, action) => {
      state.isShowModalPost = action.payload;
    },
    setIsShowModalPostsImage: (state, action) => {
      state.isShowModalPostsImage = action.payload;
    },
    setSelectedPost: (state, action) => {
      state.selectedPost = action.payload;
    },
    setPostCount: (state, action) => {
      state.postCount = action.payload;
    },
  },
});

export const getPostsAsync =
  ({ postCount }: { postCount: number }) =>
  async (dispatch: any) => {
    try {
      const response = await axios.get(
        `https://studapi.teachmeskills.by/blog/posts/?limit=${postCount}`,
      );
      dispatch(addPosts(response.data));
    } catch (err: any) {
      throw new Error(err);
    }
  };

export const {
  addPosts,
  removePosts,
  setIsShowModalPost,
  setIsShowModalPostsImage,
  setSelectedPost,
  setPostCount,
} = postsSlice.actions;
export const showPosts = (state: { postsSl: IPostsState }) => state.postsSl.posts;
export const getIsShowModalPost = (state: { postsSl: IPostsState }) =>
  state.postsSl.isShowModalPost;
export const getIsShowModalPostsImage = (state: { postsSl: IPostsState }) =>
  state.postsSl.isShowModalPostsImage;
export const getSelectedPost = (state: { postsSl: IPostsState }) => state.postsSl.selectedPost;
export const getPostCount = (state: { postsSl: IPostsState }) => state.postsSl.postCount;
export default postsSlice.reducer;
