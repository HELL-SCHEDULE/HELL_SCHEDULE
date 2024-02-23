import { PageContent } from '@/app/_layout/WebLayout/styles';
import styled from 'styled-components';

interface Props {
  height: string;
}

export const PageContentCustom = styled(PageContent)`
  display: flex;
  justify-content: space-between;
`;

export const LeftSection = styled.div`
  width: 33.25%;
  border: 1px solid #d4d4d4;
  height: 100%;
  border-radius: 12px;
`;

export const InstructorProfile = styled.div`
  width: 100%;
  height: 10%;
  padding: 4%;
  border-bottom: 1px solid #d4d4d4;
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .basic {
    font-weight: 400 !important;
  }

  & > span {
    font-weight: 600;
  }
  @media all and (min-width: 1024px) and (max-width: 1919px) {
    font-size: 16px;
  }
`;

export const SearchSection = styled.div`
  height: 10%;
  display: flex;
  padding: 2% 5%;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #d4d4d4;
  .search-wrapper {
    display: flex;
    height: 100%;
    width: 80%;

    & > input {
      width: 85%;
      border-bottom-left-radius: 36px;
      border-top-left-radius: 36px;
      border: 1px solid #878787;
    }
    .icon-wrapper {
      width: 15%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #878787;
      border-top-right-radius: 36px;
      border-bottom-right-radius: 36px;
    }
  }
`;

export const ListSection = styled.div<Props>`
  height: ${(props) => props.height};
`;

export const RightSection = styled.div`
  width: 63.15%;
  height: 100%;
  border: 1px solid #d4d4d4;
  border-radius: 12px;
`;

export const ChatProfile = styled.div`
  height: 12%;
  display: flex;
  padding: 0.5% 2%;
  gap: 2%;
  align-items: center;

  border-bottom: 1px solid #d4d4d4;
  .profile {
    width: 6%;
    max-width: 45px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    background: #d9d9d9;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & > span {
    font-size: 22px;
    font-weight: 600;
    @media all and (min-width: 1024px) and (max-width: 1919px) {
      font-size: 16px;
    }
  }
`;
export const ChatSection = styled.div`
  height: 71%;
  max-height: 545px;
  overflow: auto;
`;
export const ChatInputSection = styled.div`
  height: 17%;
  max-height: 120px;
  border-top: 1px solid #d4d4d4;
  padding: 25px;
  display: flex;
  justify-content: space-between;
  gap: 3%;

  & > input {
    height: 100%;
    width: 90.5%;
    border-radius: 36px;
    border: 1px solid #d4d4d4;
  }

  & > button {
    aspect-ratio: 1/1;
    border-radius: 50%;
    border: #041f86;
    background: #041f86;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;
