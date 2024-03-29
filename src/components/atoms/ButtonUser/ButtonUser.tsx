import styled from 'styled-components';

import { ColorService } from '../../../services/ColorService';

import { ReactComponent as BtnUser1 } from '../../../assets/icon/BtnUser1.svg';
import { ReactComponent as BtnUser2 } from '../../../assets/icon/BtnUser2.svg';
import { getFontFamily } from '../../../services';

interface IBtnUser {
  userName: string;
  onClick: () => void;
}

export const ButtonUserName = ({ userName, onClick }: IBtnUser) => {
  const uN = userName
    .split(' ')
    .reduce((previous, current) => {
      previous = previous + current[0];
      return previous;
    }, '')
    .toUpperCase();
  const isAuthorized = userName.length != 0;

  if (isAuthorized)
    return (
      <BtnUserSt onClick={onClick}>
        <FrameASt>
          <DivUNSt>{uN}</DivUNSt>
          <DivFullUNSt>{userName}</DivFullUNSt>
        </FrameASt>
      </BtnUserSt>
    );
  else
    return (
      <BtnUserSt onClick={onClick}>
        <FrameNASt>
          <BtnUser1 />
          <BtnUser2 />
        </FrameNASt>
      </BtnUserSt>
    );
};

const BtnUserSt = styled.div`
  min-width: 84px;
  height: 84px;

  background: ${ColorService.PRIMARY}};

  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    cursor: pointer;
  }
`;

const FrameASt = styled.div`
  display: flex;
  align-items: center;

  font-family: ${getFontFamily()};
  font-size: 16px;

  color: ${ColorService.WHITE};
  }
`;

const DivUNSt = styled.div`
  height: 48px;
  min-width: 48px;

  background: ${ColorService.PRIMARY2}};

  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: 30px;
`;

const DivFullUNSt = styled.div`
  height: 48px;

  background: ${ColorService.PRIMARY}};

  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: 16px;
  margin-right: 16px;
`;

const FrameNASt = styled.div`
  width: 24px;
  height: 24px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  svg {
    margin-top: 2px;
  }
`;
