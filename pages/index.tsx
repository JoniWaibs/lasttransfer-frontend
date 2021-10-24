import * as React from 'react';
import { useRouter } from 'next/router'
import { AuthContext } from '../context/auth/authContext';
import { AuthState } from '../Types/Auth';

interface IHomeProps {
}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  const { user, isAuthenticated, getUserAuthenticated } = React.useContext<AuthState>(AuthContext);
  const router = useRouter();
  React.useEffect(() => {
    const authToken = localStorage.getItem('AuthToken') ?? null;;
    if(!authToken) return router.push('/login');
    getUserAuthenticated();
  }, []);

  return(
    <div>
      <h1>Hello World</h1>
    </div>
  ) ;
};

export default Home;
