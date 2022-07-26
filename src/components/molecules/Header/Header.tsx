import styled from 'styled-components';
import { ColorService } from '../../../services/ColorService';
import { ButtonMenuHamburger, ButtonSearch, ButtonUserName } from '../../atoms';

export const Header = () => (
  <HeaderSt>
    <DivLeftSt>
      <ButtonMenuHamburger
        isOpen={false}
        onClick={() => {
          throw new Error('Function not implemented.');
        }}
      />
      <LineSt />
    </DivLeftSt>
    <DivRightSt>
      <LineSt />
      <ButtonSearch
        onClick={() => {
          throw new Error('Function not implemented.');
        }}
      />
      <LineSt />
      <ButtonUserName
        userName="Tatsiana Shl"
        onClick={() => {
          throw new Error('Function not implemented.');
        }}
      />
    </DivRightSt>
  </HeaderSt>
);

const HeaderSt = styled.header`
  background: ${ColorService.PRIMARY};
  width: 100%;
  height: 84px;
  display: flex;
  justify-content: space-between;
`;

const DivLeftSt = styled.div`
  height: 84px;
  display: flex;
`;

const DivRightSt = styled.div`
  height: 84px;
  display: flex;
`;

const LineSt = styled.div`
  width: 1px;
  height: 84px;
  background: ${ColorService.PRIMARY2};

  transform: rotate($90deg);
`;
