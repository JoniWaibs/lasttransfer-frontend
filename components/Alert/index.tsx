import styled from '@emotion/styled';
import * as React from 'react';
import { validateStatusResponse } from '../../utils/validateStatusResponse';
import Error from '../../assets/svg/error'
import Success from '../../assets/svg/success'

interface IAlertProps {
  message: string
  statusCode?: number
}
const AlertSuccess = styled.div`
  background-color:#d2fcc4;
  color: #098202;
  margin: 2px 0px;
  border-radius: 25px;
  width: 100%;
  text-align: left;
  padding: .3rem 1rem;
  display: flex;
  align-items: center;
  gap: 6px;

  p {
    font-size: 12px;
  }
`
const AlertError = styled.div`
  background-color:#fcc4c4;
  color: #a00a05;
  margin: 2px 0px;
  border-radius: 25px;
  width: 100%;
  text-align: left;
  padding: .3rem 1rem;
  display: flex;
  align-items: center;
  gap: 6px;

  p {
    font-size: 12px;
  }
`

const Alert: React.FunctionComponent<IAlertProps> = ({message, statusCode}) => {
  let isAlertSuccess;
  if(statusCode) {
    isAlertSuccess = validateStatusResponse(statusCode);
  }
  return isAlertSuccess
    ? (<AlertSuccess><Success/><p>{message}</p></AlertSuccess>)
    : (<AlertError><Error/><p>{message}</p></AlertError>)
};

export default Alert;
