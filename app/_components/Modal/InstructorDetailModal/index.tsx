import Image from 'next/image';
import React, { useCallback } from 'react';
import {
  InstructorDetailModalStyle,
  InstructorDetailModalHeader,
  InstructorDetailModalContent,
  InstructorImgSection,
  InstructorInfoSection,
  InfoWrapper,
} from './styles';

interface Props {
  instructorInfo: { [key: string]: string };
  onCloseModal: () => void;
}
const InstructorDetailModal = ({ instructorInfo, onCloseModal }: Props) => {
  const stopPropagation = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  }, []);

  return (
    <InstructorDetailModalStyle onClick={stopPropagation}>
      <InstructorDetailModalHeader>
        <span>{instructorInfo.name} 강사</span>
        <Image
          onClick={onCloseModal}
          src='/icons/close_modal.svg'
          alt='close_modal'
          width={18}
          height={18}
          style={{ cursor: 'pointer' }}
        />
      </InstructorDetailModalHeader>
      <InstructorDetailModalContent>
        <InstructorImgSection>
          {/* 등록된 이미지 있으면 이미지로 */}
          <Image
            src='/icons/profile.svg'
            alt='profile'
            width={80}
            height={80}
          />
        </InstructorImgSection>
        <InstructorInfoSection>
          <InfoWrapper>
            <div className='strong'>PROFILE</div>
            <div className='profile-info-wrapper'>
              <div className='profile-info'>
                <span className='info-title'>이름</span>
                <span className='strong'>{instructorInfo.name}</span>
              </div>
              <div>
                <span className='info-title'>연락처</span>
                <span>{instructorInfo.phone_number}</span>
              </div>
              <div>
                <span className='info-title'>이메일</span>
                <span>{instructorInfo.email}</span>
              </div>
            </div>
          </InfoWrapper>

          <InfoWrapper>
            <div className='strong'>LICENSE</div>
            <ul>
              <li>순천향대학교 졸업</li>
              <li>순천향대학교</li>
            </ul>
          </InfoWrapper>

          <InfoWrapper>
            <div className='strong'>CAREER</div>
            <ul>
              <li>순천향대학교 졸업</li>
              <li>순천향대학교</li>
            </ul>
          </InfoWrapper>
        </InstructorInfoSection>
      </InstructorDetailModalContent>
    </InstructorDetailModalStyle>
  );
};

export default InstructorDetailModal;
