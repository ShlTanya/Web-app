import styled from 'styled-components';

import { ColorService } from '../../../services/ColorService';
import { getFontFamily } from '../../../services';

interface ITitle {
  text?: string;
}

export const Title = ({ text }: ITitle) => <TitleSt>{text}</TitleSt>;

const TitleSt = styled.div`
  width: 100%;
  padding: 72px 0 40px 0;
  display: flex;
  align-content: flex-start;

  color: ${ColorService.SECONDARY}};

  font-family: ${getFontFamily('bold')};
  font-size: 56px;
`;
