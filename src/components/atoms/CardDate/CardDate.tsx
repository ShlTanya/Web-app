import styled from 'styled-components';

import { ColorService } from '../../../services/ColorService';
import { getFontFamily } from '../../../services';

interface ICarDate {
  date: string;
}

export const CardDate = ({ date }: ICarDate) => <CardDateSt>{date}</CardDateSt>;

const CardDateSt = styled.div`
  width: 100%;
  color: ${ColorService.GRAY}};

  font-family: ${getFontFamily()};
  font-size: 16px;
  display: flex;
  align-content: flex-start;
`;
