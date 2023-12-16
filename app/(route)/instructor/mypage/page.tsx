import NavBar from '@/app/_layout/NavBar';
import WebLayout from '@/app/_layout/WebLayout';

const Mypage = () => {
  return (
    <WebLayout>
      <NavBar user={'instructor'} />
      <div>Mypage</div>
    </WebLayout>
  );
};

export default Mypage;
