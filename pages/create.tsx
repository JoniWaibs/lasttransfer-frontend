import * as React from 'react';
import * as yup from 'yup';
import { Formik } from 'formik';
import { mapContent } from '../utils/mapContent'
import FormComponent from '../components/Form'
import styled from '@emotion/styled';
import { useRouter } from 'next/router'
import { ICreateValues } from '../Types/Form';
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

const Create: React.FunctionComponent = () => {
  const { createUser, message, statusCode } = React.useContext<AuthState>(AuthContext);

  const router = useRouter();
  const page = router.pathname;

  const { OBLIGATORY_NAME, OBLIGATORY_EMAIL, INVALID_EMAIL, OBLIGATORY_PASSWORD, INVALID_PASSWORD } = mapContent
  const SignupSchema = yup.object({
    name: yup.string().required(OBLIGATORY_NAME),
    email: yup.string().email(INVALID_EMAIL).required(OBLIGATORY_EMAIL),
    password: yup.string().required(OBLIGATORY_PASSWORD).min(6, INVALID_PASSWORD)
  });

  const handleSubmit = (values: ICreateValues) => createUser(values);

  return (
    <>
      <FormikContainer>
        { message && <Alert message={message} statusCode={statusCode} />}
        <Formik
          initialValues={{ name: '', email: '', password: '' }}
          validationSchema={SignupSchema}
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

export default Create;
