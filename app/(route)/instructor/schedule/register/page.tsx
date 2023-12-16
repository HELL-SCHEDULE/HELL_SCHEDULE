import NavBar from '@/app/_layout/NavBar';
import WebLayout from '@/app/_layout/WebLayout';

const Register = () => {
  return (
    <WebLayout>
      <NavBar user={'instructor'} />
      <div>Register</div>
    </WebLayout>
  );
};

export default Register;
