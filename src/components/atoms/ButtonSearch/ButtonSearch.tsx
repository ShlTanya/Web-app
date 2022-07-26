import styled from 'styled-components';

import { ColorService } from '../../../services/ColorService';

interface IBtnSearch {
  onClick: () => void;
}

export const ButtonSearch = ({ onClick }: IBtnSearch) => (
  <BtnSearchSt onClick={onClick}>
    <CirclehSt />
    <LineSt />
  </BtnSearchSt>
);

const BtnSearchSt = styled.div`
  width: 84px;
  height: 84px;

  background: ${ColorService.PRIMARY}};

  :hover {
    cursor: pointer;
  }
`;

const CirclehSt = styled.div`
  position: relative;
  left: 34px;
  top: 34px;
  width: 12px;
  height: 12px;

  background: ${ColorService.PRIMARY};
  border:  2px solid ${ColorService.WHITE}};
  border-radius: 50%;
  }
`;

const LineSt = styled.div`
  position: relative;
  left: 46px;
  top: 32px;
  width: 6px;
  height: 2px;
  background: ${ColorService.WHITE};

  transform: rotate(45deg);
`;
