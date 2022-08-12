import { call, takeEvery, put } from 'redux-saga/effects';
import { PostsService } from '../../services/api/PostsService';
import { actions } from '../Constants';
import { setPosts } from '../../core/slices/PostsSlice';
import { setPost } from '../../core/slices/PostSlice';
import { IPostsInfo, IPost } from '../../types/Posts';

function* getPostsSaga({ payload }: any) {
  try {
    const res: { data: IPostsInfo } = yield call(() =>
      PostsService.getPosts(payload.postCount, payload.selPageNo),
    );
    const posts = res?.data as IPostsInfo;
    yield put(setPosts(posts));
  } catch (e) {
    console.log(e);
  }
}

function* getPostSaga({ payload }: any) {
  try {
    const res: { data: IPost } = yield call(() => PostsService.getPost(payload.id));
    const posts = res?.data as IPost;
    yield put(setPost(posts));
  } catch (e) {
    console.log(e);
  }
}

export function* postsSaga() {
  yield takeEvery(actions.GET_POSTS, getPostsSaga);
  yield takeEvery(actions.GET_POST, getPostSaga);
}
