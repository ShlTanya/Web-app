import styled from 'styled-components';

import { ColorService } from '../../../services/ColorService';

interface IBtnMenuHamburger {
  isOpen: boolean;
  onClick: () => void;
}

export const ButtonMenuHamburger = ({ isOpen, onClick }: IBtnMenuHamburger) => (
  <BtnMHSt onClick={onClick}>
    <FrameSt>
      <Line1St isOpen={isOpen} />
      <Line2St isOpen={isOpen} />
      <Line3St isOpen={isOpen} />
    </FrameSt>
  </BtnMHSt>
);

const BtnMHSt = styled.div`
  width: 84px;
  height: 84px;

  background: ${ColorService.PRIMARY}};

  :hover {
    cursor: pointer;
  }
`;

const FrameSt = styled.div`
  position: relative;
  width: 20px;
  height: 12px;
  left: 32px;
  top: 36px;
`;

const Line1St = styled.div<{ isOpen: boolean }>`
  width: 20px;
  height: 2px;
  margin: 3px 0;
  background: ${ColorService.WHITE};

  transform: rotate(${(props) => (props.isOpen ? -45 : 0)}deg)
    translate(${(props) => (props.isOpen ? -3 : 0)}px, ${(props) => (props.isOpen ? 4 : 0)}px);
`;

const Line2St = styled.div<{ isOpen: boolean }>`
  width: 20px;
  height: 2px;
  margin: 3px 0;
  background: ${ColorService.WHITE};

  opacity: ${(props) => (props.isOpen ? '0' : '100')};
`;

const Line3St = styled.div<{ isOpen: boolean }>`
  width: 20px;
  height: 2px;
  margin: 3px 0;
  background: ${ColorService.WHITE};

  transform: rotate(${(props) => (props.isOpen ? 45 : 0)}deg)
    translate(${(props) => (props.isOpen ? -3 : 0)}px, ${(props) => (props.isOpen ? -4 : 0)}px);
`;
