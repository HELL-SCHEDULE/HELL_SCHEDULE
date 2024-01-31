'use client';
import Image from 'next/image';
import MobileContentLayout from '@/app/_layout/MobileContentLayout';
import MobileLayout from '@/app/_layout/MobileLayout';
import React, { useCallback } from 'react';
import {
  ClassRequestCompleteStyle,
  PageDescription,
  ClassInfoContent,
  BtnSection,
  ClassInfoWrapper,
  TopSection,
  BottomSection,
  PageHeader,
} from './styles';
import { useRouter, useSearchParams } from 'next/navigation';

const ClassRequestComplete = () => {
  const params = useSearchParams();
  const type = params.get('type');

  const router = useRouter();
  const goBack = useCallback(() => {
    router.back();
  }, []);

  const classInfo = {
    className: '2:1 PT',
    classDate: '2024.02.02 (금) 10:00',
    requestDate: '2024.01.30 (화) 21:10',
    instructorName: '김하정',
    // img: 강사 이미지
    product: '4:1 그룹 30회권',
  };

  return (
    <MobileLayout>
      <ClassRequestCompleteStyle>
        <PageHeader>
          <Image
            src='/icons/arrow_left.svg'
            alt='arrow_left'
            width={15}
            height={15}
            onClick={goBack}
          />
          {type}
        </PageHeader>
        <PageDescription>
          <Image src='/image/check.png' alt='check' width={28} height={28} />
          <div>
            {type === '예약하기' ? '예약이' : `${type}가`}
            <br />
            완료되었습니다.
          </div>
        </PageDescription>
        <ClassInfoContent>
          <ClassInfoWrapper>
            <TopSection>
              <div className='class-name'>
                <div>{classInfo.className}</div>
                <button>{type}</button>
              </div>
              <div className='class-info'>
                <div>{classInfo.classDate}</div>
                <div className='class-info-instructor'>
                  <div>
                    <Image
                      src='/icons/profile.svg'
                      alt='profile'
                      width={12}
                      height={12}
                    />
                  </div>
                  <div>{classInfo.instructorName} 강사</div>
                </div>
              </div>
            </TopSection>
            <BottomSection>
              <div className='class-detail-info'>
                <span>사용된 수강권</span>
                <div>{classInfo.product}</div>
              </div>
              <div className='class-detail-info'>
                <span>취소일시</span>
                <div>{classInfo.requestDate}</div>
              </div>
            </BottomSection>
          </ClassInfoWrapper>
        </ClassInfoContent>
        <BtnSection>
          <button onClick={goBack}>닫기</button>
        </BtnSection>
      </ClassRequestCompleteStyle>
    </MobileLayout>
  );
};

export default ClassRequestComplete;
