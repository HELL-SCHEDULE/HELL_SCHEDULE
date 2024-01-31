import Image from 'next/image';
import React, { useCallback, useState } from 'react';
import {
  SelectLockerModal,
  SelectLockerHeader,
  SelectLockerContent,
  ButtonSection,
} from './styles';

interface Props {
  onCloseModal: () => void;
  selectLocker: number;
  setSelectLocker: React.Dispatch<React.SetStateAction<number>>;
}

const SelectLocker = ({
  onCloseModal,
  selectLocker,
  setSelectLocker,
}: Props) => {
  const stopPropagation = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  }, []);

  //헬스장 전체 락커 개수 받아와서 받아온 만큼 생성
  const lockerCount = Array(50)
    .fill(0)
    .map((v, i) => i + 1);

  const getLockerInfo = [
    {
      id: 10,
      member: '김하정1',
      period: '2023.11.10 ~ 2023.12.10',
      remainDate: '23',
    },
    {
      id: 40,
      member: '김하정2',
      period: '2023.11.10 ~ 2023.12.10',
      remainDate: '23',
    },
  ];

  const alreadySelectedLocker = getLockerInfo.map((locker, i) => locker.id);

  const onClickLockerHandler = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const eventTarget = e.target as HTMLElement;
      setSelectLocker(Number(eventTarget.innerText));
    },
    []
  );

  return (
    <SelectLockerModal onClick={stopPropagation}>
      <SelectLockerHeader>
        <span>락커 등록</span>
        <Image
          onClick={onCloseModal}
          src='/icons/close_modal.svg'
          alt='close_modal'
          width={18}
          height={18}
          style={{ cursor: 'pointer' }}
        />
      </SelectLockerHeader>
      <SelectLockerContent count={lockerCount.length}>
        {lockerCount.map((locker, i) => {
          if (alreadySelectedLocker.includes(locker)) {
            const findLocker = getLockerInfo.findIndex(
              (v, i) => locker == v.id
            );
            return (
              <div className='locker already' key={i}>
                <div>{locker}</div>
                <div id='name'>
                  {getLockerInfo[findLocker].member}
                  <span>{getLockerInfo[findLocker].remainDate}일 남음</span>
                </div>
                <div id='period'>{getLockerInfo[findLocker].period}</div>
              </div>
            );
          } else {
            return (
              <div
                className={`locker ${selectLocker === locker && 'select'}`}
                key={i}
                onClick={onClickLockerHandler}
              >
                {locker}
                <Image
                  src='/icons/check.svg'
                  alt='check'
                  width={30}
                  height={30}
                  style={{ cursor: 'pointer' }}
                />
              </div>
            );
          }
        })}
      </SelectLockerContent>
      <ButtonSection>
        <button onClick={onCloseModal}>선택완료</button>
      </ButtonSection>
    </SelectLockerModal>
  );
};

export default SelectLocker;
