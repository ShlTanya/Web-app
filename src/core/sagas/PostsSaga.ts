import { call, takeEvery, put } from 'redux-saga/effects';
import { PostsService } from '../../services/api/PostsService';
import { actions } from '../Constants';
import { setPosts } from '../../core/slices/PostsSlice';
import { IPostsInfo } from '../../types/Posts';

function* getPostsSaga({ payload }: any) {
  try {
    console.log(`payload: ${payload}`);
    const results: { data: IPostsInfo } = yield call(() => {
      PostsService.getPosts(payload.postCount, payload.selPageNo);
    });
    console.log(`res: ${results}`);

    const posts = results?.data as IPostsInfo;

    console.log(`posts: ${posts}`);
    yield put(setPosts(posts));
  } catch (e) {
    console.log(e);
  }
}

export function* postsSaga() {
  yield takeEvery(actions.GET_POSTS, getPostsSaga);
}
