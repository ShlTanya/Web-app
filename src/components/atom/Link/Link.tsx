import styled from 'styled-components';

import { ColorService } from '../../../services/ColorService';
import { getFontFamily } from '../../../services';

interface ILink {
  text: string;
  url: string;
}

export const Link = ({ text, url }: ILink) => (
  <LinkSt href={url} target="_blank">
    {text}
  </LinkSt>
);

const LinkSt = styled.a`
  font-family: ${getFontFamily()};
  font-size: 18px;
  line-height: 24px;

  color: ${ColorService.SECONDARY}}

  :hover {
    color: ${ColorService.PRIMARY}};
  }
}
`;
