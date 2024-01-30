import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { ClassCardStyle } from './styles';
import WaitToastModal from '../ReservationToastModal';
import ReservationToastModal from '../ReservationToastModal';
import { usePathname } from 'next/navigation';

interface Props {
  classInfo: { [key: string]: string };
}
const ClassCard = ({ classInfo }: Props) => {
  // 예약가능, 예약완료, 대기가능,// 출석 완료, 미출석

  const pathname = usePathname();

  // 대기가능
  const [isOpenWaitToastModal, setIsOpenWaitToastModal] = useState(false);
  const onClickWaitHandler = useCallback(() => {
    setIsOpenWaitToastModal((prev) => !prev);
  }, []);

  // 예약가능
  const [isOpenReservationToastModal, setIsOpenReservationToastModal] =
    useState(false);
  const onClickReservationHandler = useCallback(() => {
    setIsOpenReservationToastModal((prev) => !prev);
  }, []);

  // 예약 완료
  const [isOpenCancelToastModal, setIsOpenCencelToastModal] = useState(false);
  const onClickCencelHandler = useCallback(() => {
    setIsOpenCencelToastModal((prev) => !prev);
  }, []);

  // 예약 취소
  const [isOpenAlreadyCencelToastModal, setIsOpenAlreadyCencelToastModal] =
    useState(false);
  const onClickAlreadyCencelHandler = useCallback(() => {
    setIsOpenAlreadyCencelToastModal((prev) => !prev);
  }, []);

  // 출석 완료
  const [
    isOpenAttendanceCompleteToastModal,
    setIsOpenAttendanceCompleteToastModal,
  ] = useState(false);
  const onClickAttendanceCompleteHandler = useCallback(() => {
    setIsOpenAttendanceCompleteToastModal((prev) => !prev);
  }, []);

  // 미출석
  const [isOpenNonAttendanceToastModal, setIsOpenNonAttendanceToastModal] =
    useState(false);
  const onClickAttendanceHandler = useCallback(() => {
    setIsOpenNonAttendanceToastModal((prev) => !prev);
  }, []);

  useEffect(() => {
    classifyColorByType();
  }, [classInfo]);

  const [colorByType, setColorByType] = useState<string>('');

  const classifyColorByType = useCallback(() => {
    if (
      classInfo.state === '대기가능' ||
      classInfo.state === '예약가능' ||
      classInfo.state === '예약취소'
    ) {
      setColorByType('#464444');
    }

    if (classInfo.state === '예약완료') {
      setColorByType('#3b3bee');
    }

    if (classInfo.state === '출석완료') {
      setColorByType('#29b930');
    }
    if (classInfo.state === '미출석') {
      setColorByType('#e43333');
    }
  }, [classInfo]);

  const classTypeClassify = useCallback((type: string) => {
    if (type === '대기가능') {
      onClickWaitHandler();
    }
    if (type === '예약가능') {
      onClickReservationHandler();
    }
    if (type === '예약완료') {
      onClickCencelHandler();
    }
    if (type === '예약취소') {
      onClickAlreadyCencelHandler();
    }
    if (type === '출석완료') {
      onClickAttendanceCompleteHandler();
    }
    if (type === '미출석') {
      onClickAttendanceHandler();
    }
  }, []);
  return (
    <ClassCardStyle
      type={pathname.includes('/products') ? '' : 'state'}
      color={colorByType}
    >
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
        <ReservationToastModal
          type={'예약대기'}
          classInfo={classInfo}
          onCloseModal={onClickWaitHandler}
        />
      )}
      {isOpenReservationToastModal && (
        <ReservationToastModal
          type={'예약가능'}
          classInfo={classInfo}
          onCloseModal={onClickReservationHandler}
        />
      )}
      {isOpenCancelToastModal && (
        <ReservationToastModal
          type={'예약취소'}
          classInfo={classInfo}
          onCloseModal={onClickCencelHandler}
        />
      )}
      {isOpenAlreadyCencelToastModal && (
        <ReservationToastModal
          type={'취소가 완료되었습니다.'}
          classInfo={classInfo}
          onCloseModal={onClickAlreadyCencelHandler}
        />
      )}
      {isOpenAttendanceCompleteToastModal && (
        <ReservationToastModal
          type={'출석완료'}
          classInfo={classInfo}
          onCloseModal={onClickAttendanceCompleteHandler}
        />
      )}
      {isOpenNonAttendanceToastModal && (
        <ReservationToastModal
          type={'수업에 참여하지 않았습니다.'}
          classInfo={classInfo}
          onCloseModal={onClickAttendanceHandler}
        />
      )}
    </ClassCardStyle>
  );
};

export default ClassCard;
