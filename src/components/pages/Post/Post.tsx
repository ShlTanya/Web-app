import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { Title } from '../../atoms/Title';
import { FormTemplate } from '../../templates/FormTemplate/FormTemplate';
import { ColorService } from '../../../services/ColorService';
import { getFontFamily } from '../../../services';

import styled from 'styled-components';
import { CardFooter } from '../../molecules/CardFooter';
import {
  getIsShowModalImage,
  getPostAsync,
  setIsShowModalImage,
  showPost,
} from '../../../core/slices/PostSlice';
import { ModalTemplate } from '../../templates/ModalTemplate/ModalTemplate';

export const PostPage = () => {
  const params = useParams();

  const postStore = useSelector(showPost);
  const isShowModalImage = useSelector(getIsShowModalImage);
  const dispatch = useDispatch();

  const onSelectImage = () => {
    dispatch(setIsShowModalImage(true));
  };

  useEffect(() => {
    const postid = params?.postID;
    if (postid) {
      dispatch(getPostAsync({ postid }) as any);
    }
  }, [dispatch, params?.postID]);

  return (
    <FormTemplate>
      <HomeSt>
        <Link to={'/'}>Home</Link>
        <PSt>|</PSt>
        <p>Post {postStore?.id}</p>
      </HomeSt>
      <Title text={postStore?.title} />
      <PostSt>
        <DivImgSt>
          <ImgSt src={postStore?.image} onClick={() => onSelectImage()} />
        </DivImgSt>
        <TextSt>{postStore?.text}</TextSt>
        <CardFooter />
      </PostSt>
      {isShowModalImage && (
        <ModalTemplate onClose={() => dispatch(setIsShowModalImage(false))}>
          <Image src={postStore?.image} alt="Image" />
        </ModalTemplate>
      )}
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

const Image = styled.img`
  max-width: 800px;
  max-height: 800px;
  object-fit: cover;
`;
