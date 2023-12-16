import NavBar from '@/app/_layout/NavBar';
import WebLayout from '@/app/_layout/WebLayout';

const Member = () => {
  return (
    <WebLayout>
      <NavBar user={'instructor'} />
      <div>Member</div>
    </WebLayout>
  );
};

export default Member;
