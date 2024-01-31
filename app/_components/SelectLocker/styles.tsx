import { ModalHeader } from '@/app/_layout/ModalLayout/styles';
import styled from 'styled-components';

interface Props {
  count: number;
}
export const SelectLockerModal = styled.div`
  width: 67.75%;
  min-width: 1050px;
  height: 79.1%;
  min-height: 610px;
  padding: 1.41% 1.1%;
  border-radius: 12px;
  border: 2px solid #a9a9a9;
  background: white;
`;

export const SelectLockerHeader = styled(ModalHeader)`
  height: 6.8%;
`;

export const SelectLockerContent = styled.div<Props>`
  width: 100%;
  height: calc(100% - 6.8% - 7px - 6.8%);
  display: grid;
  overflow-y: auto;
  grid-template-columns: repeat(auto-fill, minmax(12%, auto));
  grid-template-rows: ${(props) =>
    props.count
      ? `repeat(${Math.floor(props.count / 7) + 1}, minmax(13%, auto))`
      : `repeat(17, minmax(13%, auto))`};
  row-gap: 10px;
  column-gap: 10px;

  .locker {
    background: #aaa;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 6%;
    align-items: center;
    padding: 4% 6%;

    & > img {
      display: none;
    }
  }
  .select {
    background: #041f86;
    & > img {
      display: block;
    }
  }
  .already {
    background: #464444;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5%;
    #name {
      width: 100%;
      font-size: 14px;
      display: flex;
      justify-content: space-around;

      & > span {
        display: inline-block;
        background: white;
        color: gray;
        border-radius: 12px;
        padding: 2% 3%;
        font-size: 12px;
      }
    }
    #period {
      font-size: 10px;
      width: 100%;
      text-align: center;
    }
  }
`;

export const ButtonSection = styled.div`
  height: 6.8%;
  position: relative;
  & > button {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 12%;
    height: 82%;
    border-radius: 8px;
    background: #041f86;
    color: white;
    border: none;
    cursor: pointer;
  }
`;
