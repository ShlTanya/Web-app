import { configureStore } from '@reduxjs/toolkit';
import postsSlice from './slices/PostsSlice';
import postSlice from './slices/PostSlice';

export const store = configureStore({
  reducer: {
    postsSl: postsSlice,
    postSl: postSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
