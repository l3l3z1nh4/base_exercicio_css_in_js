import { ThemeProvider } from 'styled-components'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import './global.css'
import { Container } from './globalStyles'
import { temaPadrao } from './themes/padrao'
import Cabecalho from './components/Cabecalho'

function App() {
  return (
    <ThemeProvider theme={temaPadrao}>
      <Cabecalho />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
