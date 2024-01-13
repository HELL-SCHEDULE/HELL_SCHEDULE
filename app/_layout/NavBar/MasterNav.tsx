import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MasterNav = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <>
      <ul className='nav-list'>
        <li className={pathname == '/master/member' ? 'active' : ''}>
          <Link href={'/master/member'}>회원</Link>
        </li>
        <li className={pathname == '/master/instructor' ? 'active' : ''}>
          <Link href={'/master/instructor'}>강사</Link>
        </li>
        <li className={pathname.includes('/master/products') ? 'active' : ''}>
          <Link href={'/master/products/tickets'}>수강권</Link>
        </li>
        <li className={pathname.includes('/master/schedule') ? 'active' : ''}>
          <Link href={'/master/schedule'}>일정</Link>
        </li>
        <li className={pathname.includes('/master/senter') ? 'active' : ''}>
          <Link href={'/master/senter/admin'}>센터</Link>
        </li>
      </ul>
    </>
  );
};

export default MasterNav;
