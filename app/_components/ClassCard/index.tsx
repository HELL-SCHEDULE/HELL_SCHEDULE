import React, { useCallback, useState } from 'react';
import Image from 'next/image';
import { ClassCardStyle } from './styles';
import WaitToastModal from '../WaitToastModal';

interface Props {
  classInfo: { [key: string]: string };
}
const ClassCard = ({ classInfo }: Props) => {
  // 예약가능, 예약완료, 대기가능,// 출석 완료, 미출석
  const [isOpenWaitToastModal, setIsOpenWaitToastModal] = useState(false);

  const onClickWaitHandler = useCallback(() => {
    console.log('dd');
    setIsOpenWaitToastModal((prev) => !prev);
  }, []);

  const classTypeClassify = useCallback((type: string) => {
    if (type === '대기가능') {
      onClickWaitHandler();
    }
  }, []);

  return (
    <ClassCardStyle type={classInfo.state ? 'state' : ''}>
      <div className='class-header'>
        <div>{classInfo.date}</div>
        <div className='class-state'>
          <button
            onClick={() => {
              classTypeClassify(classInfo.state && classInfo.state);
            }}
          >
            {classInfo.state && classInfo.state}
          </button>
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
      {isOpenWaitToastModal && (
        <WaitToastModal
          classInfo={classInfo}
          onCloseModal={onClickWaitHandler}
        />
      )}
    </ClassCardStyle>
  );
};

export default ClassCard;
