import NavBar from '@/app/_layout/NavBar';
import WebLayout from '@/app/_layout/WebLayout';

const Admin = () => {
  return (
    <WebLayout>
      <NavBar user={'admin'} />
    </WebLayout>
  );
};

export default Admin;
