import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'

const Header = styled.header`
  height: auto;
`
const Nav = styled.nav`
  padding: 1rem 0;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 90%;
	margin: 0 auto;

  @media(min-width: 768px){
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  }
`
const Brand = styled.a`
  text-decoration: none;
  font-size: 2rem;
  font-family: 'Bebas Neue', cursive;
  color: #0a2240;

  span{
    color: #d22d27!important;
  }
`
const ButtonLink = styled.a`
  background-color: ${props => props.red ? '#d22d27' : '#0a2240'};
  color: white;
  text-decoration: none;
  border-radius: 25px;
  padding: 10px 15px;
  text-align: center;
`
const ContainerButtons = styled.div`
  padding-top: 2rem;
  display: none;
  flex-direction: column;
  gap: .5rem;

  @media(min-width: 768px){
    padding-top: 0;
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const index = () => {
  return (
    <Header>
      <Nav>
        <Link prefetch href={'/'} passHref>
          <Brand>Last<span>Transfer</span></Brand>
        </Link>
        <ContainerButtons>
          <Link prefetch href={'/login'} passHref>
            <ButtonLink red>Iniciar Sesion</ButtonLink>
          </Link>
          <Link prefetch href={'/create'} passHref>
            <ButtonLink>Crear Cuenta</ButtonLink>
          </Link>
        </ContainerButtons>
      </Nav>
    </Header>
  )
}

export default index
