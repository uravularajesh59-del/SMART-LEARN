import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Register from './pages/Register'
import TestLogin from './pages/TestLogin'
import Test from './pages/Test'
import Result from './pages/Result'
import Certificate from './pages/Certificate'
import AdminDashboard from './pages/AdminDashboard'

function App() {
    return (
        <Router>
            <div className="app">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register/:techKey" element={<Register />} />
                    <Route path="/test-login" element={<TestLogin />} />
                    <Route path="/test/:studentId" element={<Test />} />
                    <Route path="/result/:studentId" element={<Result />} />
                    <Route path="/certificate/:studentId" element={<Certificate />} />
                    <Route path="/admin" element={<AdminDashboard />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
