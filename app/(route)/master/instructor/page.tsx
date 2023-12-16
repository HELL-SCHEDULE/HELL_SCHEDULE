import NavBar from '@/app/_layout/NavBar';
import WebLayout from '@/app/_layout/WebLayout';

const Instructor = () => {
  return (
    <WebLayout>
      <NavBar user={'master'} />
      <div>Instructor</div>
    </WebLayout>
  );
};

export default Instructor;
