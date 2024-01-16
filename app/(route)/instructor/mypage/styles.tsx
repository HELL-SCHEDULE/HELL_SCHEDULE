import {
  InstructorDetailModalContent,
  InstructorImgSection,
  InstructorInfoSection,
} from '@/app/_components/Modal/InstructorDetailModal/styles';
import { PageContent } from '@/app/_layout/WebLayout/styles';
import styled from 'styled-components';

export const PageContentCustom = styled(PageContent)`
  display: flex;
  justify-content: space-between;
`;

export const LeftSection = styled.div`
  width: 28.25%;
  min-width: 388px;
  border-radius: 12px;
  border: 1px solid #d4d4d4;
  padding: 1%;
  position: relative;
  margin-right: 10%;

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 5%;
    right: -19.5%;
    width: 1px;
    height: 90%;
    background: #e4e4e4;
  }
`;

export const RightSection = styled.div`
  width: 61.25%;
  min-width: 825px;
  .title {
    height: 5%;
    font-weight: 600;
    font-size: 22px;
    @media all and (min-width: 1024px) and (max-width: 1919px) {
      font-size: 16px;
    }
  }
`;

export const MyInfoContent = styled(InstructorDetailModalContent)`
  height: 95%;
`;
export const ProfileImgSection = styled(InstructorImgSection)``;
export const InfoSection = styled(InstructorInfoSection)`
  .input {
    border: none;
    margin-bottom: 0;
  }
  .phone-section,
  .email-section {
    display: flex;
  }
  .phone-wrapper {
    display: flex;
    width: 78%;
    .phone:first-child {
      text-align: left;
      color: #000;
    }
    .phone {
      width: 20%;
      text-align: center;
    }
    & > span {
      display: flex;
      width: 5%;
      justify-content: center;
      align-items: center;
    }
  }
  .email-wrapper {
    display: flex;
    align-items: center;
    select[class='email'] {
      width: 35%;
      border: none;
      padding: 2%;
      color: #000;
    }
    .email {
      width: 35%;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    & > span {
      display: flex;
      width: 5%;
      justify-content: center;
      align-items: center;
    }
  }

  .strong:first-child {
    display: flex;
    align-items: end;
    gap: 3%;
  }
  .certify {
    width: 17.7%;
    height: 86%;
    border-radius: 12px;
    background: #041f86;
    color: #fff;
    border-color: #041f86;
    padding: 0.2% 0.5%;
    margin-left: 5%;
  }
`;
