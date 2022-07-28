import { Button } from '../../atoms/Button';
import { ReactComponent as PrevIcon } from '../../../assets/icon/PrevIcon.svg';
import { ReactComponent as NextIcon } from '../../../assets/icon/NextIcon.svg';

interface IBtn {
  btnType: 'Next' | 'Prev';
  disabled?: boolean;
  onClick: () => void;
}

export const ButtonPrevNext = ({ btnType, disabled, onClick }: IBtn) => (
  <Button
    btnTheme="withIcon"
    disabled={disabled}
    icon={btnType == 'Next' ? <NextIcon /> : <PrevIcon />}
    text={btnType}
    onClick={onClick}
  />
);
