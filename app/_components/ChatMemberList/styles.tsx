import styled from 'styled-components';

interface Props {
  focus: string;
}

export const ChatMemberListStyle = styled.div<Props>`
  padding: 3% 4%;
  border-bottom: 1px solid #d9d9d9;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4%;
  cursor: pointer;
  background: ${(props) => (props.focus == 'true' ? `#d9d9d9` : `#fff`)};
  &:hover {
    background: #d9d9d9;
  }
`;

export const ProfileSection = styled.div`
  width: 11%;
  max-width: 45px;
  aspect-ratio: 1/1;
  background: #d9d9d9;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ChatInfoSection = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Info_1 = styled.div`
  display: flex;
  justify-content: space-between;

  .person {
    font-size: 20px;
    @media all and (min-width: 1024px) and (max-width: 1919px) {
      font-size: 16px;
    }
  }
  .time {
    color: #767676;
    font-size: 16px;
    @media all and (min-width: 1024px) and (max-width: 1919px) {
      font-size: 12px;
    }
  }
`;

export const Info_2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  @media all and (min-width: 1024px) and (max-width: 1919px) {
    font-size: 12px;
  }
  .alarm {
    display: flex;
    width: 5.5%;
    aspect-ratio: 1/1;
    border-radius: 50%;
    background: red;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 16px;
    @media all and (min-width: 1024px) and (max-width: 1919px) {
      font-size: 12px;
    }
  }
`;
