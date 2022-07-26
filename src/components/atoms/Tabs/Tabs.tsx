import styled from 'styled-components';
import { ColorService } from '../../../services/ColorService';
import { getFontFamily } from '../../../services/FontService';

interface ITab {
  title: string;
  url: string;
}

interface ITabs {
  list: ITab[];
  activeTabUrl: string;
}

export const Tabs = ({ list, activeTabUrl }: ITabs) => (
  <TabSt>
    <ListSt>
      {list.map(({ title, url }) => (
        <Li key={url}>
          <LinkSt active={url == activeTabUrl}>{title}</LinkSt>
        </Li>
      ))}
    </ListSt>
  </TabSt>
);

const TabSt = styled.div`
  width: 100%;
  padding: 0 0 64px 0;
`;

const ListSt = styled.ul`
  color: ${ColorService.WHITE};
  width: 100%;
  display: flex;
  list-style: none;
  justify-content: flex-start;
  border-bottom: 1px solid ${ColorService.MEDIUM};
`;

const Li = styled.li``;

const LinkSt = styled.a<{ active: boolean }>`
  position: relative;
  top: 1px;
  font-size: 16px;
  line-height: 24px;
  font-family: ${getFontFamily('semibold')};
  color: ${ColorService.SECONDARY};
  padding: 0 20px 24px;
  display: block;
  border-bottom: ${({ active }) =>
    `1px solid  ${active ? ColorService.SECONDARY : ColorService.TRANSPARENT}`}; ;
`;
