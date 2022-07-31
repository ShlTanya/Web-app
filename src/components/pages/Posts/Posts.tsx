import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styled from 'styled-components';
import { Tabs } from '../../atoms';
import { Title } from '../../atoms/Title';
import { Card } from '../../molecules/Card/Card';
import { FormTemplate } from '../../templates/FormTemplate/FormTemplate';
import {
  getPostsAsync,
  showPosts,
  getIsShowModalPost,
  getIsShowModalPostsImage,
  getSelectedPost,
  getPostCount,
  setSelectedPost,
  setIsShowModalPost,
  setIsShowModalPostsImage,
  getSelPageNo,
  setSelPageNo,
  getPageCount,
} from '../../../core/slices/PostsSlice';
import { IPost } from '../../../types/Posts';
import { ModalTemplate } from '../../templates/ModalTemplate/ModalTemplate';
import { ButtonPrevNext } from '../../atoms/ButtonPrevNext/ButtonPrevNext';
import { Paginator } from '../../molecules/Paginator/Paginator';

export const PostsPage = () => {
  const postsStore = useSelector(showPosts);
  const isShowModalPost = useSelector(getIsShowModalPost);
  const isShowModalPostsImage = useSelector(getIsShowModalPostsImage);
  const selectedPost = useSelector(getSelectedPost);
  const postCount = useSelector(getPostCount);
  const pageCount = useSelector(getPageCount);
  const selPageNo = useSelector(getSelPageNo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsAsync({ postCount, selPageNo }) as any);
  }, [dispatch, postCount, selPageNo]);

  const onShowModalPost = (post: IPost | null) => {
    dispatch(setSelectedPost(post));
    dispatch(setIsShowModalPost(true));
  };

  const onShowModalPostsImage = (post: IPost | null) => {
    dispatch(setSelectedPost(post));
    dispatch(setIsShowModalPostsImage(true));
  };

  const setNextPost = () => {
    if (selectedPost) {
      let lastIndex = postsStore?.results.indexOf(selectedPost);
      if (!lastIndex) lastIndex = 0;
      if (lastIndex < postCount) {
        dispatch(setSelectedPost(postsStore?.results?.at(lastIndex + 1)));
      }
    }
  };

  const setPrevPost = () => {
    if (selectedPost) {
      let lastIndex = postsStore?.results.indexOf(selectedPost);
      if (!lastIndex) lastIndex = 0;
      if (lastIndex > 0) {
        dispatch(setSelectedPost(postsStore?.results?.at(lastIndex - 1)));
      }
    }
  };

  const tabs = [
    { title: 'All', url: '/all' },
    { title: 'My favorites', url: '/my' },
    { title: 'Popular', url: '/popular' },
  ];
  return (
    <FormTemplate>
      <Title text="Posts" />
      <Tabs list={tabs} activeTabUrl={'/all'}></Tabs>
      <PostsSt>
        <MainListSt>
          {postsStore?.results?.map((post, index) => (
            <CardSt
              key={post.id}
              onBlur={() => onShowModalPost(post)}
              onDoubleClick={() => onShowModalPostsImage(post)}>
              <Card cardSize={index == 0 ? 'big' : 'medium'} post={post} />
            </CardSt>
          ))}
        </MainListSt>
        <Paginator
          pageCount={pageCount}
          selPageNo={selPageNo}
          onPageClick={(newPageNo: number) => {
            dispatch(setSelPageNo(newPageNo));
          }}
          onPrevClick={() => {
            dispatch(setSelPageNo(selPageNo - 1));
          }}
          onNextClick={() => {
            dispatch(setSelPageNo(selPageNo + 1));
          }}
        />
      </PostsSt>
      {isShowModalPost && (
        <ModalTemplate onClose={() => dispatch(setIsShowModalPost(false))}>
          <Card cardSize={'big'} post={selectedPost} />
        </ModalTemplate>
      )}
      {isShowModalPostsImage && (
        <ModalTemplate onClose={() => dispatch(setIsShowModalPostsImage(false))}>
          <ModalMainSt>
            {selectedPost?.image && <Image src={selectedPost?.image} alt="Image" />}
            <ModalDivButtonSt>
              <ButtonPrevNext
                disabled={selectedPost ? 0 == postsStore?.results.indexOf(selectedPost) : false}
                btnType="Prev"
                onClick={() => setPrevPost()}></ButtonPrevNext>
              <ButtonPrevNext
                disabled={
                  selectedPost ? postCount - 1 == postsStore?.results.indexOf(selectedPost) : false
                }
                btnType="Next"
                onClick={() => setNextPost()}></ButtonPrevNext>
            </ModalDivButtonSt>
          </ModalMainSt>
        </ModalTemplate>
      )}
    </FormTemplate>
  );
};

const PostsSt = styled.div`
  width: 100%;
`;

const MainListSt = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-content: start;
  flex-wrap: wrap;
`;

const CardSt = styled.div`
  padding: 0 20px 40px 0;
`;

const ModalMainSt = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
`;

const ModalDivButtonSt = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Image = styled.img`
  height: 800px;
  width: 800px;
  object-fit: cover;
  padding-bottom: 20px;
`;
