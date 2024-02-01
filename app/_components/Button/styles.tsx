import styled from 'styled-components';

interface Props {
  background: string;
  color: string;
  height: string;
}
export const ButtonStyle = styled.button<Props>`
  background: ${(props) => (props.background ? props.background : 'gray')};
  color: ${(props) => (props.color ? props.color : 'gray')};
  height: ${(props) => (props.height ? props.height : 'gray')};
  width: 100%;
  display: inline-block;
  border-radius: 8px;
  border: 1px solid #041f86;
  font-size: 22px;
  cursor: pointer;

  @media all and (min-width: 1024px) and (max-width: 1920px) {
    & {
      font-size: 16px;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    & {
      font-size: 20px;
    }
  }

  @media all and (max-width: 767px) {
    & {
      font-size: 16px;
    }
  }
`;
