'use client';
import React from 'react';
import Link from 'next/link';
import { NavBarWapper } from './styles';
import { usePathname } from 'next/navigation';

interface Props {
  user: string;
}

const AdminNav = () => {
  const pathname = usePathname();

  return (
    <>
      <ul className='nav-list'>
        <li className={pathname == '/admin' ? 'active' : ''}>
          <Link href={'/admin'}>센터</Link>
        </li>
      </ul>
    </>
  );
};

const MasterNav = () => {
  const pathname = usePathname();

  return (
    <>
      <ul className='nav-list'>
        <li className={pathname == '/master/member' ? 'active' : ''}>
          <Link href={'/master/member'}>회원</Link>
        </li>
        <li className={pathname == '/master/instructor' ? 'active' : ''}>
          <Link href={'/master/instructor'}>강사</Link>
        </li>
        <li className={pathname == '/master/products/tickets' ? 'active' : ''}>
          <Link href={'/master/products/tickets'}>수강권</Link>
        </li>
        <li className={pathname == '/master/schedule' ? 'active' : ''}>
          <Link href={'/master/schedule'}>일정</Link>
        </li>
        <li className={pathname == '/master/senter/admin' ? 'active' : ''}>
          <Link href={'/master/senter/admin'}>센터</Link>
        </li>
      </ul>
    </>
  );
};

const InstructorNav = () => {
  const pathname = usePathname();

  return (
    <>
      <ul className='nav-list'>
        <li className={pathname == '/instructor/member' ? 'active' : ''}>
          <Link href={'/instructor/member'}>회원</Link>
        </li>
        <li
          className={pathname == '/instructor/schedule/check' ? 'active' : ''}
        >
          <Link href={'/instructor/schedule/check'}>일정</Link>
        </li>
        <li className={pathname == '/instructor/mypage' ? 'active' : ''}>
          <Link href={'/instructor/mypage'}>마이페이지</Link>
        </li>
      </ul>
    </>
  );
};

const NavBar = ({ user }: Props) => {
  return (
    <NavBarWapper>
      <div className='nav-bar-logo'></div>
      {user === 'admin' ? (
        <AdminNav />
      ) : user === 'master' ? (
        <MasterNav />
      ) : (
        <InstructorNav />
      )}
      <div className='nav-bar-my-info'>
        반갑습니다. <span className='strong'> 김하정님</span>
      </div>
    </NavBarWapper>
  );
};

export default NavBar;
