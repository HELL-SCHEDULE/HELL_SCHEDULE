'use client';
import Image from 'next/image';
import AccountLayout from '@/app/_layout/AccountLayout';
import { LoginForm } from './styles';
import { useCallback } from 'react';
import Button from '../../_components/Button';
import useInput from '@/app/hooks/useInput';
import { useRouter } from 'next/navigation';
import { loginAPI } from '@/app/api/accout';

const Login = () => {
  const loginStyle = { background: '#041f86', color: 'white', height: '17.3%' };
  const joinStyle = { background: 'white', color: '#041f86', height: '17.3%' };

  const [id, onChangeId] = useInput('');
  const [password, onChangePassword] = useInput('');
  const router = useRouter();

  // 로그인 액션
  const onClickLogin = useCallback(async () => {
    console.log('로그인', id, password);
    const response = await loginAPI(id, password);
    console.log(response);
    // if (response) {
    //   console.log('로그인 성공');
    //   //라우트
    // } else {
    //   console.log('로그인 실패');
    // }
  }, [id, password]);

  // 회원가입
  const onClickJoin = useCallback(() => {
    router.push('/join');
  }, []);

  // 아이디/비밀번호 찾기
  const routeToFindAccout = useCallback(() => {
    router.push('/user/find-account');
  }, []);

  return (
    <AccountLayout title={'로그인'}>
      <LoginForm>
        <input
          className='global-input'
          type='text'
          placeholder='아이디'
          value={id}
          onChange={onChangeId}
        />
        <input
          className='global-input'
          type='text'
          placeholder='비밀번호'
          value={password}
          onChange={onChangePassword}
        />
        <Button
          title={'로그인'}
          style={loginStyle}
          onClickHandler={onClickLogin}
        />
        <Button
          title={'회원가입'}
          style={joinStyle}
          onClickHandler={onClickJoin}
        />
        <span className='search-account' onClick={routeToFindAccout}>
          아이디 / 비밀번호 찾기
        </span>
        <button className='kakao-login'>
          <Image
            src='/image/kakaoLogo.png'
            alt='kakaoLogo'
            width={30}
            height={25}
          />
          카카오 간편 로그인
        </button>
      </LoginForm>
    </AccountLayout>
  );
};
export default Login;
