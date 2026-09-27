import { NavLink, Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="intro">
                    <Link to="/" className="text-white no-underline">
                        <span>Portfolio</span>
                    </Link>
                </div>
                <div className="nav-bar">
                    <nav className="Menu-bar">
                        <NavLink to="/" className={({ isActive }) => `menu-item ${isActive ? 'active' : ''}`}>
                            Home
                        </NavLink>
                        <NavLink to="/about" className={({ isActive }) => `menu-item ${isActive ? 'active' : ''}`}>
                            About Me
                        </NavLink>
                        <NavLink to="/projects" className={({ isActive }) => `menu-item ${isActive ? 'active' : ''}`}>
                            Projects
                        </NavLink>
                        <NavLink to="/skills" className={({ isActive }) => `menu-item ${isActive ? 'active' : ''}`}>
                            Skills
                        </NavLink>
                        <NavLink to="/contact" className={({ isActive }) => `menu-item ${isActive ? 'active' : ''}`}>
                            Contact Me
                        </NavLink>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
