import styled from 'styled-components';

export const InstructorCardWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 50%;
`;

export const InstructorCardContent = styled.div`
  display: flex;
  padding: 3.5% 6%;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 12px;
  box-shadow: 3px 4px 16px 0px rgba(0, 0, 0, 0.25);
  position: absolute;
  width: 100%;
  height: 42%;
  min-height: 153px;
  top: 0;
  left: 0;
`;

export const ProfileImgSection = styled.div`
  width: 33%;
  height: 100%;
  background: #f4f4f4;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ProfileInfoSection = styled.div`
  width: 56.3%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 12%;
  .strong {
    font-weight: 600;
  }
  .instructor-info-wrapper {
    height: 100%;
  }
  .instructor-info {
    height: calc(100% / 3);
    line-height: 195%;
  }
`;
