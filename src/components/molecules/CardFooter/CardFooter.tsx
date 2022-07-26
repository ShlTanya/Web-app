import styled from 'styled-components';
import { ButtonLike } from '../../atoms/ButtonLike';
import { Button } from '../../atoms/Button';
import { ReactComponent as FavoriteIcon } from '../../../assets/icon/FavoriteIcon.svg';

export const CardFooter = () => (
  <FooterSt>
    <Div1St>
      <ButtonLike
        isLike
        disabled={false}
        onClick={() => {
          throw new Error('Function not implemented.');
        }}
      />
      <ButtonLike
        isLike={false}
        disabled={false}
        onClick={() => {
          throw new Error('Function not implemented.');
        }}
      />
    </Div1St>
    <div>
      <Button
        btnTheme="withIcon"
        icon={<FavoriteIcon />}
        text=""
        onClick={() => {
          throw new Error('Function not implemented.');
        }}
      />
    </div>
  </FooterSt>
);

const FooterSt = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px 0 42px 0;
`;

const Div1St = styled.div`
  display: flex;
  justify-content: flex-start;
`;
