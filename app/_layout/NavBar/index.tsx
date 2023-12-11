'use client';
import React, { useCallback, useState } from 'react';
import { NavBarWapper } from './styles';

interface Props {
  user: string;
}

const AdminNav = () => {
  return (
    <>
      <ul className='nav-list'>
        <li className='focus'>센터</li>
      </ul>
    </>
  );
};

const MasterNav = () => {
  return (
    <>
      <ul className='nav-list'>
        <li>회원</li>
        <li>강사</li>
        <li>수강권</li>
        <li>일정</li>
        <li>센터</li>
      </ul>
    </>
  );
};

const InstructorNav = () => {
  const [currentNav, setCurrentNav] = useState('회원');
  const handleCurrentNav = useCallback(
    (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
      const eventTarget = e.target as HTMLElement;
      setCurrentNav(eventTarget.innerText);
    },
    []
  );

  return (
    <>
      <ul className='nav-list'>
        <li
          className={`${currentNav === '회원' && 'focus'}`}
          onClick={(e) => {
            handleCurrentNav(e);
          }}
        >
          회원
        </li>
        <li
          className={`${currentNav === '강사' && 'focus'}`}
          onClick={(e) => {
            handleCurrentNav(e);
          }}
        >
          강사
        </li>
        <li
          className={`${currentNav === '마이페이지' && 'focus'}`}
          onClick={(e) => {
            handleCurrentNav(e);
          }}
        >
          마이페이지
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
