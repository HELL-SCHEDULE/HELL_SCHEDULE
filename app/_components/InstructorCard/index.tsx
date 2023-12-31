import React from 'react';
import {
  InstructorCardContent,
  InstructorCardWrapper,
  ProfileImgSection,
  ProfileInfoSection,
} from './styles';

interface Props {
  instructor: { [key: string]: string };
  isClickedEdit: boolean;
  handleDetailModal: () => void;
  getInstructorInfo: Function;
}

const InstructorCard = ({
  instructor,
  isClickedEdit,
  handleDetailModal,
  getInstructorInfo,
}: Props) => {
  return (
    <InstructorCardWrapper
      onClick={() => {
        handleDetailModal();
        getInstructorInfo(instructor);
      }}
    >
      <input
        className={`check-box ${isClickedEdit && 'active'}`}
        type='checkbox'
      />
      <InstructorCardContent>
        <ProfileImgSection>카메라</ProfileImgSection>
        <ProfileInfoSection>
          <p className='strong'>PROFILE</p>
          <div className='instructor-info-wrapper'>
            <div className='instructor-info'>
              <span className='strong'>{instructor.name} </span>
              <span>트레이너</span>
            </div>
            <div className='instructor-info'>{instructor.email}</div>
            <div className='instructor-info'>{instructor.phone_number}</div>
          </div>
        </ProfileInfoSection>
      </InstructorCardContent>
    </InstructorCardWrapper>
  );
};

export default InstructorCard;
