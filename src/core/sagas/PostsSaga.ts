import { call, takeEvery, put } from 'redux-saga/effects';
import { PostsService } from '../../services/api/PostsService';
import { actions } from '../Constants';
import { setPosts } from '../../core/slices/PostsSlice';
import { IPostsInfo } from '../../types/Posts';

function* getPostsSaga({ payload }: any) {
  try {
    console.log(`payload: ${payload}`);
    let res: { data: IPostsInfo } = yield call(() => {
      PostsService.getPosts();
    });

    const posts = res?.data as IPostsInfo;

    console.log(`posts: ${posts}`);
    yield put(setPosts(posts));
  } catch (e) {
    console.log(e);
  }
}

export function* postsSaga() {
  yield takeEvery(actions.GET_POSTS, getPostsSaga);
}
