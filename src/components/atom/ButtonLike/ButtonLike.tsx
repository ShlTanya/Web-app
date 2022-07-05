import styled from 'styled-components';

import { ColorService } from '../../../services/ColorService';

import { ReactComponent as BtnDisLike } from '../../../assets/icon/BtnDisLike.svg';
import { ReactComponent as BtnLike } from '../../../assets/icon/BtnLike.svg';

interface IBtnStyle {
  defBackground: string;
  defFontColor: string;
  hovBackground: string;
  hovFontColor: string;
  disBackground: string;
  disFontColor: string;
}

const getBtnStyle = (isLike: boolean): IBtnStyle => {
  if (isLike) {
    return {
      defBackground: ColorService.LIGHT,
      defFontColor: ColorService.BLACK,
      hovBackground: ColorService.ERROR,
      hovFontColor: ColorService.WHITE,
      disBackground: ColorService.LIGHT,
      disFontColor: ColorService.GRAY,
    };
  } else {
    return {
      defBackground: ColorService.LIGHT,
      defFontColor: ColorService.BLACK,
      hovBackground: ColorService.PRIMARY2,
      hovFontColor: ColorService.WHITE,
      disBackground: ColorService.LIGHT,
      disFontColor: ColorService.GRAY,
    };
  }
};

interface IBtnLike {
  isLike: boolean;
  disabled: boolean;
  onClick: () => void;
}

export const ButtonLike = ({ isLike, disabled, onClick }: IBtnLike) => {
  const btnStyle = getBtnStyle(isLike);
  if (isLike) {
    return (
      <BtnSt onClick={onClick} disabled={disabled} {...btnStyle}>
        <BtnLike />
      </BtnSt>
    );
  } else {
    return (
      <BtnSt onClick={onClick} disabled={disabled} {...btnStyle}>
        <BtnDisLike />
      </BtnSt>
    );
  }
};

const BtnSt = styled.button<IBtnStyle>`
  border-radius: 2px;
  width: 88px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ defBackground }) => defBackground};
  border: ${({ defBackground }) => `1px solid  ${defBackground}`};
  color: ${({ defFontColor }) => defFontColor};

  svg path {
    fill: ${({ defFontColor }) => defFontColor};
    margin-right: 10px;
  }

  :disabled {
    background: ${({ disBackground }) => disBackground};
    border: ${({ disBackground }) => `1px solid  ${disBackground}`};
    pointer-events: none;
    color: ${({ disFontColor }) => disFontColor};
    svg path {
      fill: ${({ disFontColor }) => disFontColor};
    }
  }

  :hover {
    background: ${({ hovBackground }) => hovBackground};
    border: ${({ hovBackground }) => `1px solid  ${hovBackground}`};
    color: ${({ hovFontColor }) => hovFontColor};
    cursor: pointer;
    svg path {
      fill: ${({ hovFontColor }) => hovFontColor};
    }
  }
`;
