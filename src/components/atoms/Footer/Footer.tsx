import styled from 'styled-components';
import { ColorService } from '../../../services/ColorService';
import { getFontFamily } from '../../../services/FontService';

export const Footer = () => (
  <FooterSt>
    <FooterTextSt>©2022 Blogfolio</FooterTextSt>
    <FooterTextSt>All rights reserved</FooterTextSt>
  </FooterSt>
);

const FooterSt = styled.div`
  width: 100%;
  display: flex;
  padding: 33px 0 34px 0;
  justify-content: space-between;
  border-top: 1px solid ${ColorService.MEDIUM};
`;

const FooterTextSt = styled.p`
  font-family: ${getFontFamily()};
  font-size: 16px;
  line-height: 24px;
  color: ${ColorService.GRAY};
`;
