import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Words from './pages/Words'
import Article from './pages/Article'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/words" element={<Words />} />
      <Route path="/words/:slug" element={<Article />} />
    </Routes>
  )
}

export default App
