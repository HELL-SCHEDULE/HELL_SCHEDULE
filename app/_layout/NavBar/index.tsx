'use client';
import React from 'react';
import { NavBarWapper } from './styles';
import InstructorNav from './InstructorNav';
import AdminNav from './AdminNav';
import MasterNav from './MasterNav';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
  user: string;
}

const NavBar = ({ user }: Props) => {
  const pathname = usePathname();

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
