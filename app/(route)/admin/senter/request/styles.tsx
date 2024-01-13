import { TableBody, TableHead } from '@/app/(route)/master/member/styles';
import styled from 'styled-components';

export const FilterSection = styled.div`
  width: 8%;
  height: 100%;
  display: flex;
  align-items: center;
  .select {
    display: inline-block;
    width: 100%;
    min-width: 120px;
    height: 84%;
    border-radius: 12px;
    border: 1px solid var(--2, #041f86);
  }
  .select .selected {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    padding: 3% 2%;
  }
  .select .selected .selected-value {
    width: 85%;
    display: flex;
    align-items: center;
  }
  .select .selected .arrow {
    width: 15%;
  }
  .select > ul {
    display: none;
    width: 6.4%;
    min-width: 120px;
    list-style: none;
    padding-left: 0px;
    border: 1px solid var(--2, #041f86);
    position: absolute;
    background: #fff;
    border-top: none;
    margin-top: 0.2%;
    cursor: pointer;
  }
  .select .active {
    display: initial;
  }
  .select > ul > li {
    padding: 3% 2%;
  }
  .select ul li:hover {
    background: #e7edfc;
  }
  .select .focus {
    background: #e7edfc;
  }
`;

export const RightSection = styled.div`
  width: 33.2%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 5%;
`;
export const SearchSection = styled.div`
  width: 43.2%;
  min-width: 200px;
  height: 100%;
  display: flex;

  & > input {
    width: 80%;
    height: 100%;
    border-top-left-radius: 24px;
    border-bottom-left-radius: 24px;
    border: 1px solid #c4c4c4;
  }
  & > .icon {
    width: 20%;
    height: 100%;
    border: 1px solid #c4c4c4;
    border-top-right-radius: 24px;
    border-bottom-right-radius: 24px;
    border-left: 1px solid #c4c4c4;
  }
`;
export const BtnSection = styled.div`
  width: 49.9%;
  min-width: 100px;
  height: 100%;
  display: flex;
  gap: 9%;
  & > button {
    width: 50%;
    height: 100%;
    color: white;
    background: #041f86;
    border-radius: 8px;
  }
`;

export const TableHeadCustom = styled(TableHead)`
  #number {
    width: 6%;
  }
  #trade-name {
    width: 10%;
  }
  #master-name {
    width: 8%;
  }
  #business-number {
    width: 13%;
  }
  #email {
    width: 15%;
  }
  #address {
    width: 16%;
  }
  #request-type {
    width: 7%;
  }
  #refuse {
    width: 4%;
  }
  #accept {
    width: 4%;
  }
`;

export const TableBodyCustom = styled(TableBody)`
  #number {
    width: 6%;
  }
  #trade-name {
    width: 10%;
  }
  #master-name {
    width: 8%;
  }
  #business-number {
    width: 13%;
  }
  #email {
    width: 15%;
  }
  #address {
    width: 16%;
  }
  #request-type {
    width: 7%;
  }
  #refuse {
    width: 4%;
    transform: translateX(15%);
  }
  #accept {
    width: 4%;
    transform: translateX(15%);
  }
`;
