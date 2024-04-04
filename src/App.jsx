import './App.scss'
import Navbar from './components/Navbar/Navbar'
import Frame from './pages/Frame/Frame'

function App() {
  return (
    <div>
      <Navbar />
      <div className='container'>
        <Frame />
      </div>
    </div>
  )
}

export default App
