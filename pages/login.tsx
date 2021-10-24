import * as React from 'react';
import { useRouter } from 'next/router'
import * as yup from 'yup';
import { Formik } from 'formik';
import { mapContent } from '../utils/mapContent'
import FormComponent from '../components/Form'
import styled from '@emotion/styled';
import { ILoginValues } from '../Types/Form';
import { AuthContext } from '../context/auth/authContext';
import { AuthState } from '../Types/Auth';
import Alert from '../components/Alert';

const FormikContainer = styled.div`
  width: 90%;
  border-radius: 10px;
  padding: 1rem;

  @media(min-width: 768px){
    width: 60%;
  }
`

const Login: React.FunctionComponent = () => {

  const { loginUser, message, statusCode, isAuthenticated } = React.useContext<AuthState>(AuthContext);

  const router = useRouter();
  const page = router.pathname;

  React.useEffect(() =>{
    isAuthenticated && !message ? router.push('/') : null;
  }, [isAuthenticated, message]);

  const { OBLIGATORY_EMAIL, INVALID_EMAIL, OBLIGATORY_PASSWORD, INVALID_PASSWORD } = mapContent;

  const LoginSchema = yup.object({
    email: yup.string().email(INVALID_EMAIL).required(OBLIGATORY_EMAIL),
    password: yup.string().required(OBLIGATORY_PASSWORD).min(6, INVALID_PASSWORD)
  });

  const handleSubmit = (values: ILoginValues) => loginUser(values);

  return (
    <>
      <FormikContainer>
        { message && <Alert message={message} statusCode={statusCode}/>}
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={LoginSchema}
          onSubmit={(values) => handleSubmit(values)}
        >
          {
            ({ errors, touched }) => (
              <FormComponent
                errors={errors}
                touched={touched}
                page={page}
              />
            )
          }
        </Formik>
      </FormikContainer>
    </>
  );
};

export default Login;
