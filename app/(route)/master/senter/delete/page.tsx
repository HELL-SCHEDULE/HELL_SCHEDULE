import NavBar from '@/app/_layout/NavBar';
import WebLayout from '@/app/_layout/WebLayout';

const Delete = () => {
  return (
    <WebLayout>
      <NavBar user={'master'} />
      <div>Delete</div>
    </WebLayout>
  );
};

export default Delete;
