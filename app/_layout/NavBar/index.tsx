'use client';
import Image from 'next/image';
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
  console.log(user);
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
      <div
        className={`nav-bar-my-info ${user == 'instructor' && `instructor`}`}
      >
        반갑습니다. <span className='strong'> 김하정님</span>
        {user == 'instructor' && (
          <Image
            src='/image/notification.png'
            alt='notification'
            width={0}
            height={0}
            sizes='100vw'
            style={{ width: '11%', height: 'auto', cursor: 'pointer' }}
          />
        )}
        <Image
          src='/image/logout.png'
          alt='logout'
          width={0}
          height={0}
          sizes='100vw'
          style={{ width: '11%', height: 'auto', cursor: 'pointer' }}
        />
      </div>
    </NavBarWapper>
  );
};

export default NavBar;
