import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <Link to="/" className="navbar-brand">
                    <img src="/logo.png" alt="SMART-LEARN Logo" className="brand-logo" />
                    <span>SMART-LEARN</span>
                </Link>
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/test-login">Take Test</Link>
                    <Link to="/admin">Admin</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
