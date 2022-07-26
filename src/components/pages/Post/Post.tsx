import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import { Title } from '../../atoms/Title';
import { FormTemplate } from '../../templates/FormTemplate/FormTemplate';
import { ColorService } from '../../../services/ColorService';
import { getFontFamily } from '../../../services';

import styled from 'styled-components';
import { CardFooter } from '../../molecules/CardFooter';
import { IPost } from '../../../types/Posts';

export const PostPage = () => {
  const [post, setPost] = useState<IPost>();

  const params = useParams();

  useEffect(() => {
    const id = params?.postID;
    if (id) {
      fetch(`https://studapi.teachmeskills.by/blog/posts/${id}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setPost(data);
        });
    }
  }, [params?.postID]);

  return (
    <FormTemplate>
      <HomeSt>
        <Link to={'/'}>Home</Link>
        <PSt>|</PSt>
        <p>Post {post?.id}</p>
      </HomeSt>
      <Title text={post?.title} />
      <PostSt>
        <DivImgSt>
          <ImgSt src={post?.image} />
        </DivImgSt>
        <TextSt>{post?.text}</TextSt>
        <CardFooter />
      </PostSt>
    </FormTemplate>
  );
};

const HomeSt = styled.div`
  width: 100%;
  display: flex;
  color: ${ColorService.GRAY};
  font-family: ${getFontFamily()};
  font-size: 16px;

  padding-top: 72px;
`;

const PSt = styled.p`
  padding: 0 8px 0 8px;
`;

const PostSt = styled.div`
  width: 992px;
`;

const DivImgSt = styled.div`
  width: 992px;
  height: 518px;
  padding-bottom: 48px;
`;

const ImgSt = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TextSt = styled.div`
  width: 100%;
  color: ${ColorService.BLACK};
  text-align: left;

  font-family: ${getFontFamily()};
  font-size: 18px;

  padding-bottom: 15px;
`;
