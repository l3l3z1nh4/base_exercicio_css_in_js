import { ThemeProvider } from 'styled-components'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import EstiloGlobal, { Container } from './globalStyles'
import { temaPadrao } from './themes/padrao'
import Cabecalho from './components/Cabecalho'

function App() {
  return (
    <ThemeProvider theme={temaPadrao}>
      <EstiloGlobal />
      <Cabecalho />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
