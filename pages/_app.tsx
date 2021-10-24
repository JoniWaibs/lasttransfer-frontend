import * as React from 'react';
import { AppProps } from 'next/app';
import AppContext from '../context/auth/authState';
import Layout from '../components/Layout';



const App: React.FunctionComponent<AppProps> = ({Component, pageProps}) => {
  return(
    <AppContext>
      <Layout>
        <Component {...pageProps}/>
      </Layout>
    </AppContext>
  ) ;
};

export default App;
