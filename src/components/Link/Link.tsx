import styled from 'styled-components';

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
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;

  color: #313037

  :hover {
    color: #2231AA;
  }

  :disabled {
    color: #8D8E97
  }
}
`;
