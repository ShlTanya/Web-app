import styled from 'styled-components';

import { ColorService } from '../../services/ColorService';
import { getFontFamily } from '../../services';

interface ITitle {
  text: string;
}

export const Title = ({ text }: ITitle) => <TitleStyled>{text}</TitleStyled>;

const TitleStyled = styled.div`
  color: ${ColorService.SECONDARY}};

  font-family: ${getFontFamily('bold')};
  font-size: 56px;
  display: flex;
  align-items: center;
`;
