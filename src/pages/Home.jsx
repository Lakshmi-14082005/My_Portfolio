import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaEnvelope, FaEye } from 'react-icons/fa';
import profile from '../assets/profile.jpeg';
import { viewResume } from '../utils/downloadResume';
import './home.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="portfolio-img">
                <img className="portfolio" src={profile} alt="Lakshmi Prasanna Thota" />
            </div>
            <div className="introduction">
                <p className="text-xl text-white font-semibold mb-1">Hello, It's Me</p>
                <h1 className="name-heading">Lakshmi Prasanna Thota</h1>
                <h2>
                    FullStack Web Developer &bull; CSE Student at <br />
                    Mother Teresa Institute of Science and Technology
                </h2>
                <div className="home-cta">
                    <Link to="/projects" className="cta-btn-primary">
                        🚀 Explore Projects & Demos
                    </Link>
                    <button
                        type="button"
                        onClick={viewResume}
                        className="cta-btn-secondary cursor-pointer"
                        title="View resume in new tab"
                    >
                        <FaEye className="inline mr-1 text-sm" /> View Resume
                    </button>
                </div>
                <div className="profile-links">
                    <a
                        href="https://linkedin.com/in/lakshmi-prasanna-thota-88a28740b"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn Profile"
                    >
                        <FaLinkedin size={26} />
                    </a>
                    <a
                        href="https://github.com/Lakshmi-14082005"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Profile"
                    >
                        <FaGithub size={26} />
                    </a>
                    <a
                        href="mailto:thotalakshmiprasanna1408@gmail.com"
                        aria-label="Email Lakshmi Prasanna"
                    >
                        <FaEnvelope size={24} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;
