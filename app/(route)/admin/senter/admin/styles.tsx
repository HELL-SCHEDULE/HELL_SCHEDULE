import { TableBody, TableHead } from '@/app/(route)/master/member/styles';
import styled from 'styled-components';

export const BtnSection = styled.div`
  width: 15.1%;
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
    width: 27%;
  }
  #delete {
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
    width: 27%;
  }
  #delete {
    width: 4%;
    transform: translateX(15%);
  }
`;
