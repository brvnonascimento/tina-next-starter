import { AppComponent } from 'next/dist/shared/lib/router/router.js'
import Tina from '../../.tina/components/TinaDynamicProvider.js'

const App: AppComponent = ({ Component, pageProps }) => {
  return (
    <Tina>
      <Component {...pageProps} />
    </Tina>
  )
}

export default App
