import styled from 'styled-components';
import { ColorService } from '../../../services/ColorService';

import { ReactNode } from 'react';

interface IModal {
  onClose: () => void;
  children: ReactNode;
}

export const ModalTemplate = ({ onClose, children }: IModal) => {
  return (
    <>
      <OverLay>
        <ModalWrap>
          <ButtonDivSt>
            <ButtonSt onClick={onClose}>
              <Close1St />
              <Close2St />
            </ButtonSt>
          </ButtonDivSt>
          <Content>{children}</Content>
        </ModalWrap>
      </OverLay>
    </>
  );
};

export const OverLay = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: ${(props: any) => (props.hidden ? 'none' : 'initial')};
`;

export const ModalWrap = styled.div`
  width: 800px;
  max-height: 1000px;
  margin: 10px auto;
  padding: 20px;
  background: white;
  border: 110px solid ${ColorService.GRAY};
  border-radius: 6px;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.3);
  position: relative;
  display: flex;
  flex-direction: column;
`;
const ButtonDivSt = styled.div`
  display: flex;
  justify-content: end;
  padding-bottom: 20px;
`;

const ButtonSt = styled.button`
  cursor: pointer;
  background: none;
  border: none;
`;

const Close1St = styled.div`
  width: 40px;
  height: 2px;
  margin: 3px 0;
  background: ${ColorService.BLACK};

  transform: rotate(-45deg) translate(-4px, -2px);
`;

const Close2St = styled.div`
  width: 40px;
  height: 2px;
  margin: 3px 0;
  background: ${ColorService.BLACK};

  transform: rotate(45deg) translate(-4px, -2px);
`;

const Content = styled.div`
  padding: 20px 0 20px 0;
`;
