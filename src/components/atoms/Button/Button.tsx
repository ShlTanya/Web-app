import { ReactNode } from 'react';
import styled from 'styled-components';

import { ColorService } from '../../../services/ColorService';
import { getFontFamily } from '../../../services';

interface IBtnStyle {
  defBackground: string;
  defBorderColor: string;
  defFontColor: string;
  hovBackground: string;
  hovBorderColor: string;
  hovFontColor: string;
  disBackground: string;
  disBorderColor: string;
  disFontColor: string;
}

const getBtnStyle = (btnTheme: string): IBtnStyle => {
  switch (btnTheme) {
    case 'secondary':
      return {
        defBackground: ColorService.LIGHT,
        defBorderColor: ColorService.LIGHT,
        defFontColor: ColorService.BLACK,
        hovBackground: ColorService.MEDIUM,
        hovBorderColor: ColorService.MEDIUM,
        hovFontColor: ColorService.BLACK,
        disBackground: ColorService.LIGHT,
        disBorderColor: ColorService.LIGHT,
        disFontColor: ColorService.GRAY,
      };
    case 'secondary2':
      return {
        defBackground: ColorService.TRANSPARENT,
        defBorderColor: ColorService.TRANSPARENT,
        defFontColor: ColorService.ERROR,
        hovBackground: ColorService.TRANSPARENT,
        hovBorderColor: ColorService.MEDIUM,
        hovFontColor: ColorService.ERROR,
        disBackground: ColorService.TRANSPARENT,
        disBorderColor: ColorService.TRANSPARENT,
        disFontColor: ColorService.GRAY,
      };
    case 'withIcon':
      return {
        defBackground: ColorService.LIGHT,
        defBorderColor: ColorService.LIGHT,
        defFontColor: ColorService.BLACK,
        hovBackground: ColorService.PRIMARY2,
        hovBorderColor: ColorService.PRIMARY2,
        hovFontColor: ColorService.WHITE,
        disBackground: ColorService.LIGHT,
        disBorderColor: ColorService.LIGHT,
        disFontColor: ColorService.GRAY,
      };
    default:
      return {
        defBackground: ColorService.PRIMARY,
        defBorderColor: ColorService.PRIMARY,
        defFontColor: ColorService.WHITE,
        hovBackground: ColorService.PRIMARY2,
        hovBorderColor: ColorService.PRIMARY2,
        hovFontColor: ColorService.WHITE,
        disBackground: ColorService.LIGHT,
        disBorderColor: ColorService.LIGHT,
        disFontColor: ColorService.GRAY,
      };
  }
};

interface IBtn {
  btnTheme: 'primary' | 'secondary' | 'secondary2' | 'withIcon';
  text: string;
  icon?: ReactNode;
  disabled?: boolean;
  onClick: () => void;
}

export const Button = ({ btnTheme, text, icon, disabled, onClick }: IBtn) => {
  const btnStyle = getBtnStyle(btnTheme);
  return (
    <BtnSt onClick={onClick} disabled={disabled} {...btnStyle}>
      {icon}
      {text}
    </BtnSt>
  );
};

const BtnSt = styled.button<IBtnStyle>`
  padding: 16px 32px;
  border-radius: 2px;
  display: flex;
  align-items: center;
  background: ${({ defBackground }) => defBackground};
  border: ${({ defBorderColor }) => `1px solid  ${defBorderColor}`};
  color: ${({ defFontColor }) => defFontColor};
  font-weight: 500;
  font-size: 25px;
  line-height: 29px;
  letter-spacing: 0.05em;
  font-family: ${getFontFamily()};

  svg path {
    fill: ${({ defFontColor }) => defFontColor};
    margin-right: 10px;
  }

  :disabled {
    background: ${({ disBackground }) => disBackground};
    border: ${({ disBorderColor }) => `1px solid  ${disBorderColor}`};
    pointer-events: none;
    color: ${({ disFontColor }) => disFontColor};
    svg path {
      fill: ${({ disFontColor }) => disFontColor};
    }
  }

  :hover {
    background: ${({ hovBackground }) => hovBackground};
    border: ${({ hovBorderColor }) => `1px solid  ${hovBorderColor}`};
    color: ${({ hovFontColor }) => hovFontColor};
    cursor: pointer;
    svg path {
      fill: ${({ hovFontColor }) => hovFontColor};
    }
  }
`;
