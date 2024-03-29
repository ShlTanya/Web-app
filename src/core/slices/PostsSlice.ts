import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { IPostsInfo, IPost } from '../../types/Posts';

interface IPostsState {
  posts: IPostsInfo | null;
  postCount: number;
  pageCount: number;
  selPageNo: number;
  isShowModalPost: boolean;
  isShowModalPostsImage: boolean;
  selectedPost: IPost | null;
}

const initialState: IPostsState = {
  posts: null,
  postCount: 19,
  pageCount: 1,
  selPageNo: 1,
  isShowModalPost: false,
  isShowModalPostsImage: false,
  selectedPost: null,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      if (action) {
        if (state.postCount < 1) state.postCount = 2; // так возврщает API
        const posts = action.payload.results.map((post: IPost) => ({ ...post }));
        state.posts = { ...action.payload, results: posts };
        state.pageCount = state.posts?.count ? Math.ceil(state.posts?.count / state.postCount) : 0;
      } else {
        state.posts = null;
        state.pageCount = 0;
        state.selPageNo = 0;
      }
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
    setSelPageNo: (state, action) => {
      if (
        action.payload > 0 &&
        action.payload <= state.pageCount &&
        action.payload <= state.pageCount
      ) {
        state.selPageNo = action.payload;
      }
    },
  },
});

export const getPostsAsync =
  ({ postCount, selPageNo }: { postCount: number; selPageNo: number }) =>
  async (dispatch: any) => {
    try {
      const response = await axios.get(
        `https://studapi.teachmeskills.by/blog/posts/?limit=${postCount}&offset=${
          (selPageNo - 1) * postCount
        }`,
      );
      dispatch(setPosts(response.data));
    } catch (err: any) {
      throw new Error(err);
    }
  };

export const {
  setPosts,
  setIsShowModalPost,
  setIsShowModalPostsImage,
  setSelectedPost,
  setPostCount,
  setSelPageNo,
} = postsSlice.actions;
export const showPosts = (state: { postsSl: IPostsState }) => ({
  posts: state.postsSl.posts,
  pageCount: state.postsSl.pageCount,
  selPageNo: state.postsSl.selPageNo,
});
export const getIsShowModalPost = (state: { postsSl: IPostsState }) =>
  state.postsSl.isShowModalPost;
export const getIsShowModalPostsImage = (state: { postsSl: IPostsState }) =>
  state.postsSl.isShowModalPostsImage;
export const getSelectedPost = (state: { postsSl: IPostsState }) => state.postsSl.selectedPost;
export const getPostCount = (state: { postsSl: IPostsState }) => state.postsSl.postCount;
//export const getPageCount = (state: { postsSl: IPostsState }) => state.postsSl.pageCount;
//export const getSelPageNo = (state: { postsSl: IPostsState }) => state.postsSl.selPageNo;
export default postsSlice.reducer;
