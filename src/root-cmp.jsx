import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { AppHeader } from './cmps/AppHeader'
import { Home } from './pages/Home'
import { Projects } from './cmps/Projects'
import { AboutUs } from './pages/AboutUs'

export function App() {
  return (
    <Router>
      <main className="main-layout">
        <AppHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </main>
    </Router>
  )
}
