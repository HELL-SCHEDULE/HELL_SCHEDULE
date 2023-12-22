import Link from 'next/link';
import { usePathname } from 'next/navigation';

const AdminNav = () => {
  const pathname = usePathname();
  return (
    <>
      <ul className='nav-list'>
        <li className={pathname.includes('/admin/senter') ? 'active' : ''}>
          <Link href={'/admin/senter/request'}>센터</Link>
        </li>
      </ul>
    </>
  );
};

export default AdminNav;
