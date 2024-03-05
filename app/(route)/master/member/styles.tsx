import styled from 'styled-components';

export const FilterSection = styled.div`
  width: 50%;
  min-width: 708px;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 2%;
  position: absolute;
  left: 0;
  .filter-date {
    width: 21%;
    height: 84%;
    border-radius: 12px;
    border: 1px solid var(--2, #041f86);
    cursor: pointer;
    padding: 1% 0.5%;
  }
  .filter-wrapper {
    width: 21%;
    height: 100%;
    display: flex;
  }
`;

export const BtnSection = styled.div`
  width: 33%;
  min-width: 100px;
  height: 84%;
  display: flex;
  gap: 9%;
  & > button {
    width: 100%;
    height: 100%;
    color: white;
    background: #041f86;
    border-radius: 8px;
    cursor: pointer;
  }
`;

export const TableHead = styled.thead`
  width: 100%;
  height: 10%;
  display: block;
  & > tr {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    // border-bottom: 1px solid #041f86;
  }
  & > tr > th {
    min-width: fit-content;
    height: 100%;

    display: flex;
    align-items: center;
  }
  #check-box {
    width: 4%;
    & > input {
      width: 42%;
      aspect-ratio: 1/1;
    }
  }
  #name {
    width: 10%;
  }
  #id {
    width: 9%;
  }
  #phone-number {
    width: 13%;
  }
  #product {
    width: 11%;
  }
  #register-date {
    width: 13%;
  }
  #instructor {
    width: 7%;
  }
  #count {
    width: 7%;
  }
  #rocker {
    width: 6%;
  }
  #look {
    width: 7%;
  }
  #preiod {
    width: 13%;
  }
`;
export const TableBody = styled.tbody`
  width: 100%;
  height: 90%;
  display: block;
  & > tr {
    width: 100%;
    height: 11.1%;
    min-height: 50px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  & > tr:hover,
  & > tr:active {
    background: #e7edfc;
  }
  & > tr > td {
    min-width: fit-content;
    height: 100%;
    display: flex;
    align-items: center;
  }
  #check-box {
    width: 4%;
    & > input {
      width: 42%;
      aspect-ratio: 1/1;
    }
  }
  #name {
    width: 10%;
    .profile {
      display: flex;
      align-items: center;
      gap: 10%;
      width: 100%;
    }
    .profile .img {
      width: 23%;
      border-radius: 50%;
      aspect-ratio: 1;
      background: #f4f4f4;
    }
  }
  #id {
    width: 9%;
  }
  #phone-number {
    width: 13%;
  }
  #product {
    width: 11%;
  }
  #register-date {
    width: 13%;
  }
  #instructor {
    width: 7%;
  }
  #count {
    width: 7%;
  }
  #rocker {
    width: 6%;
  }
  #look {
    width: 7%;
    transform: translateX(15%);
  }
  #preiod {
    width: 13%;
  }
`;
export const Pagination = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2%;
  font-size: 18px;
  & > span {
    display: flex;
  }
  @media all and (min-width: 1024px) and (max-width: 1919px) {
    font-size: 16px;
  }
`;
