import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import {ContextProvider} from './contexts/ContextProvider'
import { MantineProvider } from '@mantine/core'
import theme from './theme/theme'
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <MantineProvider withGlobalStyles withNormalizeCSS theme={theme} >
          <App />
        </MantineProvider>
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>
)
