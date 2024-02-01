'use client';
import Image from 'next/image';
import AccountLayout from '@/app/_layout/AccountLayout';
import { ResetPwForm } from './styles';
import Button from '@/app/_components/Button';
import { useCallback, useState } from 'react';
import useInput from '@/app/hooks/useInput';
import { useRouter } from 'next/navigation';

const ResetPw = () => {
  const style = { background: '#041f86', color: 'white', height: '17.8%' };

  const [password, onChangePassword, setPassword] = useInput('');
  const [passwordcheck, setChangePasswordCheck] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const onClickHandler = useCallback(() => {
    console.log('비밀번호 변경');
    if (password !== passwordcheck) setPasswordError(true);
    // 비밀번호 변경 성공
    else {
      alert('비밀번호가 성공적으로 변경되었습니다');
      setPassword('');
      setChangePasswordCheck('');
      setPasswordError(false);
    }
  }, [password, passwordcheck]);

  const onChangePasswordCheck = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const eventTarget = e.target as HTMLInputElement;

      setChangePasswordCheck(eventTarget.value);
      setPasswordError(eventTarget.value !== password);
    },
    [password]
  );

  // 로그인 페이지로 이동
  const router = useRouter();
  const routeToLogin = useCallback(() => {
    router.push('/login');
  }, []);

  return (
    <AccountLayout title={'비밀번호 재설정'}>
      <ResetPwForm>
        <p>변경할 비밀번호로 정확히 입력해 주세요.</p>
        <div className='input-wrppaer'>
          <div>비밀번호</div>
          <input
            type='text'
            className='global-input'
            value={password}
            onChange={onChangePassword}
          />
        </div>
        <div className='input-wrppaer'>
          <div>비밀번호 확인</div>
          <input
            type='text'
            className='global-input'
            value={passwordcheck}
            onChange={onChangePasswordCheck}
          />
          {passwordError && (
            <p className='error-message'>비밀번호가 일치하지 않습니다.</p>
          )}
        </div>
        <Button
          title={'비밀번호 변경'}
          style={style}
          onClickHandler={onClickHandler}
        />
        <span onClick={routeToLogin}>
          <Image
            src='/icons/arrow_left.svg'
            alt='arrow_left'
            width={20}
            height={20}
          />
          로그인하기
        </span>
      </ResetPwForm>
    </AccountLayout>
  );
};
export default ResetPw;
