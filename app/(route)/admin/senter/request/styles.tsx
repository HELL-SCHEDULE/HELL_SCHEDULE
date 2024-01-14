import { TableBody, TableHead } from '@/app/(route)/master/member/styles';
import { RightSection } from '@/app/_layout/SubNav/styles';
import styled from 'styled-components';

export const FilterSection = styled.div`
  width: 8%;
  height: 100%;
  display: flex;
  align-items: center;
  position: absolute;
  left: 0;
`;

export const RightSectionCustom = styled(RightSection)`
  gap: 5%;
`;
export const SearchSection = styled.div`
  width: 28.7%;
  min-width: 200px;
  height: 84%;
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
  width: 33%;
  min-width: 100px;
  height: 84%;
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
