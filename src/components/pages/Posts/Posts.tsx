import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styled from 'styled-components';
import { Tabs } from '../../atoms';
import { Title } from '../../atoms/Title';
import { Card } from '../../molecules/Card/Card';
import { FormTemplate } from '../../templates/FormTemplate/FormTemplate';
import { ColorService } from '../../../services/ColorService';
import { getPostsAsync, showPosts } from '../../../core/slices/PostsSlice';

export const PostsPage = () => {
  const postsStore = useSelector(showPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsAsync() as any);
  }, [dispatch]);

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
            <CardSt key={post.id}>
              <Card cardSize={index == 0 ? 'big' : 'medium'} post={post} />
            </CardSt>
          ))}
        </MainListSt>
      </PostsSt>
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
  border-bottom: 1px solid ${ColorService.MEDIUM};
`;

const CardSt = styled.div`
  padding: 0 20px 40px 0;
`;
