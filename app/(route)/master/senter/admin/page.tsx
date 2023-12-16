import NavBar from '@/app/_layout/NavBar';
import WebLayout from '@/app/_layout/WebLayout';

const Admin = () => {
  return (
    <WebLayout>
      <NavBar user={'master'} />
      <div>Admin</div>
    </WebLayout>
  );
};

export default Admin;
