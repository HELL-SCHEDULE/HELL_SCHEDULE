import { ModalHeader } from '@/app/_layout/ModalLayout/styles';
import styled from 'styled-components';

export const InstructorDetailModalStyle = styled.div`
  width: 40.23%;
  height: 64.95%;
  min-height: 570px;
  padding: 1.41% 1.1%;
  border-radius: 12px;
  border: 2px solid #a9a9a9;
  background: white;
  font-size: 16px;
  @media all and (min-width: 1024px) and (max-width: 1919px) {
    font-size: 14px;
  }
`;

export const InstructorDetailModalHeader = styled(ModalHeader)`
  height: 8%;
`;

export const InstructorDetailModalContent = styled.div`
  width: 100%;
  height: calc(100% - 8% - 7px);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const InstructorImgSection = styled.div`
  width: 45.9%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f4f4f4;
`;
export const InstructorInfoSection = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 3%;
`;

export const InfoWrapper = styled.div`
  height: 30%;
  padding-bottom: 8%;
  border-bottom: 1px solid #afb1b6;

  &:first-child {
    height: 35%;
  }
  .strong {
    font-weight: 600;
    margin-bottom: 7%;
  }
  .profile-info-wrapper {
    height: 65%;
    display: flex;
    flex-direction: column;
    gap: 17%;
    padding: 0 1.2%;
  }
  .profile-info {
  }
  .info-title {
    width: 22%;
    min-width: 63px;
    display: inline-block;
  }
  & > ul {
    padding: 0 7.2%;
  }
  & > ul > li {
    margin: 2.5% 0;
  }
`;
