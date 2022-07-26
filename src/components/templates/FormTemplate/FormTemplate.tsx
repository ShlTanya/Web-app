import { ReactNode } from 'react';
import styled from 'styled-components';

import { ColorService } from '../../../services/ColorService';
import { Footer } from '../../atoms/Footer';
import { Header } from '../../molecules/Header';
import { Container } from '../../layouts/Container/Container';

interface IFormTemplate {
  children: ReactNode;
}

export const FormTemplate = ({ children }: IFormTemplate) => (
  <WrapperSt>
    <Header />
    <Container>
      <ContentSt>{children}</ContentSt>
      <Footer />
    </Container>
  </WrapperSt>
);

const WrapperSt = styled.div`
  background: ${ColorService.EXTRLIGHT};
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0;
`;

const ContentSt = styled.div`
  width: 100%;
  min-height: calc(100vh - 160px);
  padding: 0 0 0 0;
`;
