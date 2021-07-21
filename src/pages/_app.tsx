import { AppProps } from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import GlobalStyle from '../styles/Global'
import { wrapper } from '../redux/store'

interface CustomAppProps extends AppProps {}

const MyApp = (props) => {
  const { Component, pageProps } = props
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
  return { pageProps }
}

export default wrapper.withRedux(MyApp)
