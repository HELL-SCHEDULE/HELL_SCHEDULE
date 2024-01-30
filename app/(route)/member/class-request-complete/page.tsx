'use client';
import Image from 'next/image';
import MobileContentLayout from '@/app/_layout/MobileContentLayout';
import MobileLayout from '@/app/_layout/MobileLayout';
import React from 'react';
import {
  ClassRequestCompleteStyle,
  PageDescription,
  ClassInfoContent,
  BtnSection,
} from './styles';
import { useSearchParams } from 'next/navigation';

const ClassRequestComplete = () => {
  const params = useSearchParams();
  const type = params.get('type');
  const classInfo = params.get('classInfo');
  console.log(classInfo);
  return (
    <MobileContentLayout title={`${type}`}>
      <ClassRequestCompleteStyle>
        <PageDescription>
          <Image src='/image/check.png' alt='check' width={28} height={28} />
          <div>
            {type}이 <br />
            완료되었습니다.
          </div>
        </PageDescription>
        <ClassInfoContent></ClassInfoContent>
        <BtnSection>
          <button>닫기</button>
        </BtnSection>
      </ClassRequestCompleteStyle>
    </MobileContentLayout>
  );
};

export default ClassRequestComplete;
