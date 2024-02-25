import styled from 'styled-components';

interface Props {
  type: string;
}

export const ChatWrapper = styled.div<Props>`
  width: -webkit-fill-available;
  display: flex;
  gap: 1%;
  justify-content: ${(props) => (props.type === 'true' ? 'end' : 'start')};
  align-items: end;
  margin: 25px 0;

  .chat-content {
    border-radius: 8px;
    background: ${(props) =>
      props.type === 'true' ? 'rgba(137, 194, 217, 0.27)' : '#F4F4F4'};
    padding: 1% 1.5%;
    order: ${(props) => (props.type === 'true' ? '2' : '1')};
  }

  .chat-time {
    color: #767676;
    font-size: 16px;
    width: max-content;
    order: ${(props) => (props.type === 'true' ? '1' : '2')};
    @media all and (min-width: 1024px) and (max-width: 1919px) {
      font-size: 12px;
    }
  }
`;
