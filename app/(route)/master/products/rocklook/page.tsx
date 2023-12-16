import NavBar from '@/app/_layout/NavBar';
import WebLayout from '@/app/_layout/WebLayout';

const RockLook = () => {
  return (
    <WebLayout>
      <NavBar user={'master'} />
      <div>RockLook</div>
    </WebLayout>
  );
};

export default RockLook;
