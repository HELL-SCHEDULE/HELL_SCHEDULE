'use client';
import AccountLayout from '@/app/_layout/AccountLayout';
import { LoginForm } from './styles';
import { useCallback } from 'react';
import Button from '../../_components/Button';
import useInput from '@/app/hooks/useInput';
import { useRouter } from 'next/navigation';

const Login = () => {
  const loginStyle = { background: '#041f86', color: 'white', height: '17.3%' };
  const joinStyle = { background: 'white', color: '#041f86', height: '17.3%' };

  const [id, onChangeId] = useInput('');
  const [password, onChangePassword] = useInput('');
  const router = useRouter();

  // 로그인 액션
  const onClickLogin = useCallback(() => {
    console.log('로그인', id, password);
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
      </LoginForm>
    </AccountLayout>
  );
};
export default Login;
