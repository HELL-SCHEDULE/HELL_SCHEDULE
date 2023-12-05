'use client';
import AccountLayout from '@/app/_layout/AccountLayout';
import { LoginForm } from './styles';
import { useCallback } from 'react';
import Button from '../../_components/Button';

const Login = () => {
  const loginStyle = { background: '#041f86', color: 'white', height: '17.3%' };
  const joinStyle = { background: 'white', color: '#041f86', height: '17.3%' };

  const onClickLogin = useCallback(() => {
    console.log('로그인');
  }, []);

  const onClickJoin = useCallback(() => {
    console.log('회원가입');
  }, []);

  return (
    <AccountLayout title={'로그인'}>
      <LoginForm>
        <input className='global-input' type='text' placeholder='아이디' />
        <input className='global-input' type='text' placeholder='비밀번호' />
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
        <span className='search-account'>아이디 / 비밀번호 찾기</span>
      </LoginForm>
    </AccountLayout>
  );
};
export default Login;
