import React from 'react'
import { render } from 'react-dom'
import { Container } from '@cerebral/react'
import AppMain from './components/app-main'
import app from './app'

render(
  <Container app={app}>
    <AppMain />
  </Container>,
  document.querySelector("#app")
);
