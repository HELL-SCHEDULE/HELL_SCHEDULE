import Link from 'next/link';
import { usePathname } from 'next/navigation';

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

export default AdminNav;
