import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Blocked from './pages/Blocked'
import PriestProfile from './pages/PriestProfile'

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Routes>
          <Route path="/" element={<Blocked />} />
          <Route path="/p/:slug" element={<PriestProfile />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
