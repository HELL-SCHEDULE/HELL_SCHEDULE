import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
        <li className={pathname.includes('/instructor/chat') ? 'active' : ''}>
          <Link href={'/instructor/chat/history'}>채팅</Link>
        </li>
        <li className={pathname == '/instructor/mypage' ? 'active' : ''}>
          <Link href={'/instructor/mypage'}>마이페이지</Link>
        </li>
      </ul>
    </>
  );
};

export default InstructorNav;
