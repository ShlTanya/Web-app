import styled from 'styled-components';

import { ColorService } from '../../../services/ColorService';
import { getFontFamily } from '../../../services';
import { Link } from 'react-router-dom';

interface ILink {
  text: string;
  onNewPage?: boolean;
  url: string;
}

export const LinkPr = ({ text, url, onNewPage }: ILink) => (
  <LinkSt>
    <Link to={url} target={onNewPage ? '_blank' : ''}>
      {text}
    </Link>
  </LinkSt>
);

const LinkSt = styled.div`
  font-family: ${getFontFamily()};
  font-size: 18px;
  line-height: 24px;

  color: ${ColorService.SECONDARY}}

  :hover {
    color: ${ColorService.PRIMARY}};
  }
}
`;
