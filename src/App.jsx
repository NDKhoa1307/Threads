import Feed from "./pages/feed"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Feed/>}/>
      </Routes>
    </Router>
  )
}

export default App
