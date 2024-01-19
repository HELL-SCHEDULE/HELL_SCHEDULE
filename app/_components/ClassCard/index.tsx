import React from 'react';
import Image from 'next/image';
import { ClassCardStyle } from './styles';

interface Props {
  classInfo: { [key: string]: string };
}
const ClassCard = ({ classInfo }: Props) => {
  // 예약가능, 예약완료, 대기가능,// 출석 완료, 미출석

  return (
    <ClassCardStyle type={classInfo.state ? 'state' : ''}>
      <div className='class-header'>
        <div>{classInfo.date}</div>
        <div className='class-state'>
          <button>{classInfo.state && classInfo.state}</button>
        </div>
      </div>
      <div className='class-info-wrapper'>
        <div className='profile-wrapper'>
          <Image
            src='/icons/profile.svg'
            alt='profile'
            width={0}
            height={0}
            sizes='100vw'
            style={{ width: '50%', height: 'auto' }}
          />
        </div>
        <div className='class-info'>
          <div className='class-name'>{classInfo.className}</div>
          <div className='class-instructor'>{classInfo.instructorName}</div>
        </div>
      </div>
    </ClassCardStyle>
  );
};

export default ClassCard;
