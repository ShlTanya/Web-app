import styled from 'styled-components';
//import { ColorService } from '../../services/ColorService';

interface ITitle {
  text: string;
}

export const Title = ({ text }: ITitle) => <TitleStyled>{text}</TitleStyled>;

const TitleStyled = styled.div`
  color: #313037;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 56px;

  display: flex;
  align-items: center;
`;
