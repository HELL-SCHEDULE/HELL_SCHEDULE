import styled from 'styled-components';

export const ChatProfile = styled.div`
  height: 9%;
  display: flex;
  padding: 0.5% 2%;
  gap: 2%;
  align-items: center;
  background: #f4f4f4;
  .profile {
    width: 5%;
    // max-width: 45px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    background: #d9d9d9;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & > span {
    font-size: 14px;
    font-weight: 600;
  }
`;
export const ChatSection = styled.div`
  height: 81%;
  overflow: auto;
`;

export const Section = styled.div`
  margin-top: 20px;
  border-top: 1px solid #eee;
  padding: 0 2%;
`;

export const StickyHeader = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  width: 100%;
  position: sticky;
  top: 14px;
  & button {
    font-weight: bold;
    font-size: 12px;
    height: 28px;
    line-height: 27px;
    padding: 0 16px;
    z-index: 2;
    --saf-0: rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);
    border-radius: 24px;
    position: relative;
    top: -13px;
    background: white;
    border: none;
    outline: none;
    color: #767676;
  }
`;

export const ChatInputSection = styled.div`
  height: 10%;
  max-height: 120px;
  border-top: 1px solid #d4d4d4;
  padding: 10px;
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
