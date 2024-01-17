import styled from 'styled-components';

export const SenterCardStyle = styled.div`
    min-height: 190px;
    padding: 3% 4.8%;
    border-radius: 12px;
    border: 1px solid #DFDFDF;
    width: 100%;
    height: 29.8%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 16px;
    @media (min-width: 1024px) and (max-width: 1919px) {
      font-size: 14px;
    }
}
`;

export const SenterCardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 72.4%;
`;
export const SenterImgSection = styled.div`
  width: 30.8%;
  aspect-ratio: 1/1;
  background: #f4f4f4;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SenterInfoSection = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  .info-wrapper {
    display: flex;
    gap: 7%;

    & > span {
      width: 31%;
      font-weight: 600;
    }
  }
`;

export const ButtonSection = styled.div`
  display: flex;
  height: 15%;
  justify-content: flex-end;
  gap: 3%;

  & > button {
    width: 17.8%;
    height: 100%;
    border-radius: 12px;
    border: 1px solid #041f86;
    color: #fff;
    background: #041f86;
  }
  & > button:first-of-type {
    border: 1px solid #041f86;
    color: #041f86;
    background: #fff;
  }
`;
