import { useState } from 'react';
import './about.css';
import mist from '../assets/mist.jpg';
import inter from '../assets/inter.png';
import school from '../assets/school.png';
import { FaEye } from 'react-icons/fa';
import ResumeModal from '../components/ResumeModal';

const About = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isResumeOpen, setIsResumeOpen] = useState(false);

    const educationData = [
        {
            id: 0,
            title: "BTech",
            img: mist,
            details: (
                <div className="journey-text text-xl">
                    <p><strong>College:</strong> Mother Teresa Institute of Science and Technology</p>
                    <p><strong>Course:</strong> Btech</p>
                    <p><strong>Branch:</strong> Computer Science and Engineering</p>
                    <p><strong>CGPA:</strong> 8.41</p>
                </div>
            )
        },
        {
            id: 1,
            title: "Intermediate",
            img: inter,
            details: (
                <div className="journey-text text-xl">
                    <p><strong>College:</strong> Govt Girls Jr College, Sathupally.</p>
                    <p><strong>Course:</strong> Intermediate</p>
                    <p><strong>Branch:</strong> MPC </p>
                    <p><strong>Percentage:</strong> 87.3%</p>
                </div>
            )
        },
        {
            id: 2,
            title: "SSC",
            img: school,
            details: (
                <div className="journey-text text-xl">
                    <p><strong>School:</strong> Govt Girls High School, Sathupally.</p>
                    <p><strong>Course:</strong> SSC</p>
                    <p><strong>CGPA:</strong> 9.8</p>
                </div>
            )
        }
    ];

    return (
        <div className="about-container">
            <h2 className="text-5xl font-bold mb-4 text-white">About Me</h2>
            <div className="about-text text-xl text-white">
                <p>Hello!, This is <strong>Lakshmi Prasanna Thota</strong>, a web developer focused on crafting clean, responsive, and highly functional digital solutions. </p>
                <p>My development approach focuses on writing modular, readable JavaScript and building smooth user interfaces using React. I enjoy taking complex ideas and turning them into interactive applications.</p>
                <div className="resume-container">
                    <button
                        type="button"
                        onClick={() => setIsResumeOpen(true)}
                        className="resume-btn cursor-pointer"
                        title="View resume"
                    >
                        <FaEye /> View Resume
                    </button>
                </div>
            </div>

            <div>
                <h2 className="text-5xl font-bold my-6 text-white">Education Qualifications</h2> <br />
            </div>

            <div className="book-tabs">
                {educationData.map((item) => (
                    <button
                        key={item.id}
                        className={`tab-btn ${activeIndex === item.id ? 'active' : ''}`}
                        onClick={() => setActiveIndex(item.id)}
                    >
                        {item.title}
                    </button>
                ))}
            </div>

            <div className="book-container">
                {educationData.map((item) => {
                    let cardClass = "education-card";
                    if (activeIndex === item.id) cardClass += " active";
                    else if (item.id > activeIndex) cardClass += " incoming";
                    else cardClass += " outgoing";

                    return (
                        <div
                            key={item.id}
                            className={cardClass}
                            onClick={() => setActiveIndex(item.id)}
                        >
                            <div className="edu-img-wrapper">
                                <img className="mx-auto h-50 w-120 sm:mx-0 sm:shrink-0" src={item.img} alt="profile-img" />
                            </div>
                            {item.details}
                        </div>
                    );
                })}
            </div>

            {/* Hobbies Section */}
            <div className="hobbies-section">
                <h2 className="text-5xl hobbies-heading">Hobbies</h2>
                <div className="hobbies-container">
                    <div className="hobby-card">
                        <div className="hobby-icon">📚</div>
                        <h3>Reading</h3>
                        <p>Diving into captivating fictional books and keeping up with my favorite manga and comics.</p>
                    </div>

                    <div className="hobby-card">
                        <div className="hobby-icon">🎬</div>
                        <h3>Entertainment</h3>
                        <p>Binge-watching anime series, catching up on trending TV shows, and analyzing great storytelling.</p>
                    </div>

                    <div className="hobby-card">
                        <div className="hobby-icon">🌐</div>
                        <h3>Exploring & Learning</h3>
                        <p>Constantly picking up new technical skills or random facts through deep dives on the internet and YouTube.</p>
                    </div>
                </div>
            </div>

            {/* Languages Known Section */}
            <div className="languages-section">
                <h2 className="text-5xl languages-heading">Languages Known</h2>
                <div className="languages-container">
                    <div className="language-card">
                        <div className="language-flag">🗣️</div>
                        <h3>Telugu</h3>
                        <span className="lang-proficiency native">Native</span>
                        <p>Mother tongue. Excellent command of reading, writing, and speaking.</p>
                    </div>

                    <div className="language-card">
                        <div className="language-flag">🌍</div>
                        <h3>English</h3>
                        <span className="lang-proficiency fluent">Fluent</span>
                        <p>Professional working proficiency for seamless team collaboration and development.</p>
                    </div>

                    <div className="language-card">
                        <div className="language-flag">💬</div>
                        <h3>Hindi</h3>
                        <span className="lang-proficiency conversational">Conversational</span>
                        <p>Good understanding and conversational skill for everyday communication.</p>
                    </div>
                </div>
            </div>

            {/* Resume Modal */}
            <ResumeModal
                isOpen={isResumeOpen}
                onClose={() => setIsResumeOpen(false)}
            />
        </div>
    );
};

export default About;
