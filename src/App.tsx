import { Provider as MobxProvider } from 'mobx-react'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'
import { rootStore } from './stores'
import './App.css'

const App = () => {
  return (
    <MobxProvider {...rootStore}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </MobxProvider>
  )
}

export default App
