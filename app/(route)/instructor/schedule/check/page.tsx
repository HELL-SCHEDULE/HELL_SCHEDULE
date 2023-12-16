import NavBar from '@/app/_layout/NavBar';
import WebLayout from '@/app/_layout/WebLayout';

const Check = () => {
  return (
    <WebLayout>
      <NavBar user={'instructor'} />
      <div>Schedule</div>
    </WebLayout>
  );
};

export default Check;
