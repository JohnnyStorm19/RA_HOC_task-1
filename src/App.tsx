import './App.css'
import { CardsList } from './components/CardsList'
import { data } from './data/dataUrls'

function App() {
  return (
    <CardsList data={data}/>
  )
}

export default App
