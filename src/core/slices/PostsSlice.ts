import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { IPostsInfo, IPost } from '../../types/Posts';
const API_URL = 'https://studapi.teachmeskills.by/blog/posts/?limit=19';

interface IPostSate {
  posts: IPostsInfo | null;
}

const initialState: IPostSate = {
  posts: null,
};

export const postsSlide = createSlice({
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
  },
});

export const getPostsAsync = () => async (dispatch: any) => {
  try {
    const response = await axios.get(`${API_URL}`);
    dispatch(addPosts(response.data));
  } catch (err: any) {
    throw new Error(err);
  }
};

export const { addPosts, removePosts } = postsSlide.actions;
export const showPosts = (state: { posts: IPostSate }) => state.posts.posts;
export default postsSlide.reducer;
