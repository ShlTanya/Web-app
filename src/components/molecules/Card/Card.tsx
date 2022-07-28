import styled from 'styled-components';
import { ColorService } from '../../../services/ColorService';
import { CardDate } from '../../atoms/CardDate';
import { getFontFamily } from '../../../services';
import { CardFooter } from '../CardFooter';
import { Link } from 'react-router-dom';

interface IPost {
  author: number;
  date: string;
  id: number;
  image: string;
  lesson_num: number;
  text: string;
  title: string;
}

interface ICard {
  cardSize: 'small' | 'medium' | 'big';
  post: IPost | null;
}

interface ICardStyle {
  cardWidth: string;
  cardHeight: string;
  imgWidth: string;
  imgHeight: string;
  titleFontSize: string;
  titleMaxHeight: string;
}

const getCardStyle = (cardSize: string): ICardStyle => {
  switch (cardSize) {
    case 'medium':
      return {
        cardWidth: '352px',
        cardHeight: '452px',
        imgWidth: '352px',
        imgHeight: '246px',
        titleFontSize: '18px',
        titleMaxHeight: '56px',
      };
    case 'big':
      return {
        cardWidth: '736px',
        cardHeight: '452px',
        imgWidth: '256px',
        imgHeight: '244px',
        titleFontSize: '32px',
        titleMaxHeight: '132px',
      };
    default:
      return {
        cardWidth: '352px',
        cardHeight: '206px',
        imgWidth: '96px',
        imgHeight: '96px',
        titleFontSize: '18px',
        titleMaxHeight: '84px',
      };
  }
};

export const Card = ({ cardSize, post }: ICard) => {
  const cardStyle = getCardStyle(cardSize);
  switch (cardSize) {
    case 'medium': {
      return (
        <CardSt {...cardStyle}>
          <DivImgSt {...cardStyle}>
            <ImgSt src={post?.image} />
          </DivImgSt>
          <CardDate date={post?.date} />
          <Link to={`/posts/${post?.id}`}>
            <TitleSt {...cardStyle}>{post?.title}</TitleSt>
          </Link>
          <CardFooter />
        </CardSt>
      );
    }
    case 'big': {
      return (
        <CardSt {...cardStyle}>
          <CardBlSt>
            <CardBl1LlSt {...cardStyle}>
              <CardDate date={post?.date} />
              <Link to={`/posts/${post?.id}`}>
                <TitleSt {...cardStyle}>{post?.title}</TitleSt>
              </Link>
              <TextSt>{post?.text}</TextSt>
            </CardBl1LlSt>
            <DivImgSt {...cardStyle}>
              <ImgSt src={post?.image} />
            </DivImgSt>
          </CardBlSt>
          <CardFooter />
        </CardSt>
      );
    }
    default: {
      return (
        <CardSt {...cardStyle}>
          <CardBlSt>
            <CardBl1LlSt {...cardStyle}>
              <CardDate date={post?.date} />
              <Link to={`/posts/${post?.id}`}>
                <TitleSt {...cardStyle}>{post?.title}</TitleSt>
              </Link>
            </CardBl1LlSt>
            <DivImgSt {...cardStyle}>
              <ImgSt src={post?.image} />
            </DivImgSt>
          </CardBlSt>
          <CardFooter />
        </CardSt>
      );
    }
  }
};

const CardSt = styled.div<ICardStyle>`
  width: ${({ cardWidth }) => cardWidth};
  height: ${({ cardHeight }) => cardHeight};
  display: flex;
  flex-direction: column;
  align-items: start;
  box-sizing: border-box;
  border-bottom: 1px solid ${ColorService.MEDIUM};
`;

const CardBlSt = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
`;

const CardBl1LlSt = styled.div<ICardStyle>`
  width: calc(100% - ${({ imgWidth }) => imgWidth} - 20px);
`;

const DivImgSt = styled.div<ICardStyle>`
  width: ${({ imgWidth }) => imgWidth};
  height: ${({ imgHeight }) => imgHeight};
  padding-bottom: 24px;
`;

const TitleSt = styled.div<ICardStyle>`
  width: 100%;
  max-height: ${({ titleMaxHeight }) => titleMaxHeight};
  color: ${ColorService.BLACK};
  text-align: left;

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  font-family: ${getFontFamily('bold')};
  font-size: ${({ titleFontSize }) => titleFontSize};

  padding: 8px 0 24px 0;

  :hover {
    color: ${ColorService.PRIMARY};
    cursor: pointer;
`;

const TextSt = styled.div`
  width: 100%;
  max-height: 168px;
  color: ${ColorService.BLACK};
  text-align: left;

  font-family: ${getFontFamily()};
  font-size: 16px;

  padding-bottom: 15px;
`;

const ImgSt = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
