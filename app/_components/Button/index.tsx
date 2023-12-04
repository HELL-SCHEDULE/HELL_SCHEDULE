import { ButtonStyle } from './styles';

interface Props {
  title: string;
  style: { background: string; color: string; height: string };
  onClickHandler: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ title, style, onClickHandler }: Props) => {
  return (
    <ButtonStyle
      background={style.background}
      color={style.color}
      height={style.height}
      onClick={onClickHandler}
    >
      {title}
    </ButtonStyle>
  );
};

export default Button;
