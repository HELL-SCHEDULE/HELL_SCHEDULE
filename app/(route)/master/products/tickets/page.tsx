import NavBar from '@/app/_layout/NavBar';
import WebLayout from '@/app/_layout/WebLayout';

const Tickets = () => {
  return (
    <WebLayout>
      <NavBar user={'master'} />
      <div>Tickets</div>
    </WebLayout>
  );
};

export default Tickets;
