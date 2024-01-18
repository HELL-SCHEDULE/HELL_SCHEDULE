import Image from 'next/image';
import React from 'react';
import { Header, Content, NavBar } from './styles';
import MobileLayout from '../MobileLayout';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
  title: string;
  children: React.ReactNode;
}

const MobileContentLayout = ({ title, children }: Props) => {
  const pathname = usePathname();

  return (
    <MobileLayout>
      <Header>{title}</Header>
      <Content>{children}</Content>
      <NavBar>
        <ul>
          <li className={pathname == '/member/products' ? 'active' : ''}>
            <Link href={'/member/products'}>
              <Image
                src='/image/calendar.png'
                alt='calendar'
                width={0}
                height={0}
                sizes='100vw'
                style={{ width: '42%', height: 'auto' }}
              />
              <div>수강권</div>
            </Link>
          </li>
          <li className={pathname == '/member/reservation' ? 'active' : ''}>
            <Link href={'/member/reservation'}>
              <Image
                src='/image/calendar.png'
                alt='calendar'
                width={0}
                height={0}
                sizes='100vw'
                style={{ width: '42%', height: 'auto' }}
              />
              <div>수업 예약</div>
            </Link>
          </li>
          <li className={pathname == '/member/history' ? 'active' : ''}>
            <Link href={'/member/history'}>
              <Image
                src='/image/calendar.png'
                alt='calendar'
                width={0}
                height={0}
                sizes='100vw'
                style={{ width: '42%', height: 'auto' }}
              />
              <div>이용 내역</div>
            </Link>
          </li>
          <li className={pathname == '/member/mypage' ? 'active' : ''}>
            <Link href={'/member/mypage'}>
              <Image
                src='/image/calendar.png'
                alt='calendar'
                width={0}
                height={0}
                sizes='100vw'
                style={{ width: '42%', height: 'auto' }}
              />
              <div>마이페이지</div>
            </Link>
          </li>
        </ul>
      </NavBar>
    </MobileLayout>
  );
};

export default MobileContentLayout;
