import styled from 'styled-components';

interface Props {
  height: string;
}

export const ToastModalwrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background: rgba(11, 19, 30, 0.37);
`;

export const ToastModalStyle = styled.div<Props>`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: ${(props) => (props.height ? props.height : '32%')};
  background: white;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

export const ToastModalHeader = styled.div<Props>`
  display: flex;
  height: ${(props) => (props.height ? props.height : '38%')};
  padding: 5% 4% 0 4%;
  justify-content: space-between;
`;
export const ToastModalContent = styled.div<Props>`
  height: ${(props) => (props.height ? props.height : '62%')};
`;

export const DescriptionSection = styled.div<Props>`
  padding: 0 4%;
  height: ${(props) => (props.height ? props.height : '67%')};

  & > div {
    :first-child {
      font-weight: 600;
      padding: 6% 0 3% 0;
      font-size: 14px !important;
    }
    :last-child {
      font-size: 12px;
    }
  }
`;

export const ButtonSection = styled.div<Props>`
  height: ${(props) => (props.height ? props.height : '33%')};
  border-top: 1px solid gray;
  & > button {
    width: 50%;
    height: 100%;
    border: none;
    :first-child {
      background: white;
      color: #61646b;
    }
    :last-child {
      background: #041f86;
      color: white;
    }
  }
`;
