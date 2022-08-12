import { configureStore } from '@reduxjs/toolkit';
import postsSlice from './slices/PostsSlice';
import postSlice from './slices/PostSlice';
import createSagaMiddleware from 'redux-saga';

import { rootSaga } from './Saga';

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = configureStore({
  reducer: {
    postsSl: postsSlice,
    postSl: postSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(rootSaga);
