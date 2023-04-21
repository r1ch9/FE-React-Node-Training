import './App.css'

// Importacion de componentes.
import { MainComponent } from './pages/mainComponent/mainComponent'

function App() {
  const count = 'test';

  return (
    <>
      <MainComponent text={count}></MainComponent>
    </>
  )
}

export default App
