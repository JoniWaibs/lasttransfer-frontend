import React from 'react'
import { Global, css } from '@emotion/react'
import Head from 'next/head'
import Header from './Header'
import styled from '@emotion/styled';

const Content = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
`
const MainContent = styled.main`
	min-width: 90%;
	min-height: 85vh;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: .5rem;

	@media(min-width: 768){
		min-height: 90vh;
	}
`
interface ILayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Layout: React.FunctionComponent<ILayoutProps> = ({ children }) => {
	return (
		<>
			<Global styles={css`
				@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
				/* apply a natural box layout model to all elements, but allowing components to change */
				html {
					box-sizing: border-box;
				}
					*, *:before, *:after {
					box-sizing: inherit;
				}
				html,
				body {
					padding: 0;
					margin: 0;
					font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
						Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
				}
				* {
					box-sizing: border-box;
				}
				`}
			/>
			<Head>
				<title>LastTransfer</title>
			</Head>
			<Content>
				<Header />
				<MainContent>
					{children}
				</MainContent>
			</Content>
		</>
	)
}

export default Layout
