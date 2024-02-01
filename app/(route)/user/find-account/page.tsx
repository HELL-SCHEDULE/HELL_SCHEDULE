'use client';
import Image from 'next/image';
import FindAccountId from '@/app/_components/FindAccount/FindAcccountId';
import FindAccountPw from '@/app/_components/FindAccount/FindAccountPw';
import AccountLayout from '@/app/_layout/AccountLayout';
import { useCallback, useState } from 'react';
import { FindAccountContent, FindAccountType } from './styles';
import { useRouter } from 'next/navigation';

const FindAccount = () => {
  const [findAccountType, setFindAccountType] = useState('아이디 찾기');

  const onClickFindType = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const eventTarget = e.target as HTMLElement;
    setFindAccountType(eventTarget.innerText);
  }, []);

  // 로그인 페이지로 이동
  const router = useRouter();
  const routeToLogin = useCallback(() => {
    router.push('/login');
  }, []);

  return (
    <AccountLayout title={findAccountType}>
      <FindAccountType>
        <div
          className={
            `find-type ` + (findAccountType === '아이디 찾기' ? 'select' : '')
          }
          onClick={onClickFindType}
        >
          아이디 찾기
        </div>
        <div
          className={
            `find-type ` + (findAccountType === '비밀번호 찾기' ? 'select' : '')
          }
          onClick={onClickFindType}
        >
          비밀번호 찾기
        </div>
      </FindAccountType>
      <FindAccountContent>
        {findAccountType === '아이디 찾기' ? (
          <FindAccountId />
        ) : (
          <FindAccountPw />
        )}
        <span onClick={routeToLogin}>
          <Image
            src='/icons/arrow_left.svg'
            alt='arrow_left'
            width={20}
            height={20}
          />
          로그인하기
        </span>
      </FindAccountContent>
    </AccountLayout>
  );
};

export default FindAccount;
