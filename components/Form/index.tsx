import * as React from 'react';
import { Form, Field  } from 'formik';
import styled from '@emotion/styled'
import { mapContent } from '../../utils/mapContent';
import Alert from '../Alert';

const Title = styled.h1`
  text-align: center;
  padding: 1rem 0px;
`
const InputContainer = styled.div`
  margin: 1rem 0px;
  label{
   span{
    display: block;
    width: 100%;
    margin: .2rem 0px;
    color: #5c5c5c;
    padding: .7px 1rem;
   };

   input{
    display: block;
    width: 100%;
    padding: 1rem;
    border-radius: 25px;
    border: 1px solid lightgray;

    &:focus{
      outline: none;
      border: 1px solid #0a2240;
      transition: all 0.5s ease-out;
    }
   }
  }
`
const ButtonLink = styled.button`
  background-color: ${props => props.red ? '#d22d27' : '#0a2240'};
  color: white;
  text-decoration: none;
  border-radius: 25px;
  padding: .7rem;
  text-align: center;
  width: 100%;
  display: block;
  cursor: pointer;
  border-color: none;
  border: 0px;
  font-size: 1.3rem;
  font-family: 'Bebas Neue', cursive;
  letter-spacing: 1px;
`
interface IFormProps {
  errors: {
    name?: string
    email?: string
    password?: string
  }
  touched: {
    name?: boolean
    email?: boolean
    password?: boolean
  }
  page: string;
}

const FormComponent: React.FunctionComponent<IFormProps> = ({ errors, touched, page }) => {

  const [isCreatePage, setIsCreatePage] = React.useState<boolean>(false);

  const {LOGIN_TITLE, LOGIN_BUTTON, SIGNUP_TITLE, SIGNUP_BUTTON } = mapContent;
  const titlePage = isCreatePage ? SIGNUP_TITLE : LOGIN_TITLE
  const textButton = isCreatePage ? SIGNUP_BUTTON : LOGIN_BUTTON

  React.useEffect(() =>{
    const checkIsCreatePage = () => {
      if(page === '/create') setIsCreatePage(true)
    };
    checkIsCreatePage();
  },[page])

  return (
    <Form>
      <Title>{titlePage}</Title>
      {
        isCreatePage && (
          <InputContainer>
            <label htmlFor="name">
              <span>Nombre</span>
              <Field type="text" id="name" name="name" placeholder="Ingresá tu nombre" />
              {errors.name && touched.name ? (<Alert message={errors.name}/>) : null}
            </label>
          </InputContainer>
        )
      }
      <InputContainer>
        <label htmlFor="email">
          <span>Email</span>
          <Field type="email" id="email" name="email" placeholder="Ingresá tu correo electrónico" />
          {errors.email && touched.email ? (<Alert message={errors.email}/>) : null}
        </label>
      </InputContainer>
      <InputContainer>
        <label htmlFor="password">
          <span>Password</span>
          <Field type="password" id="password" name="password" placeholder="Ingresá tu password" />
          {errors.password && touched.password ? (<Alert message={errors.password}/>) : null}
        </label>
      </InputContainer>
      <div>
        <ButtonLink type="submit">{textButton}</ButtonLink>
      </div>
    </Form>
  );
};

export default FormComponent;
