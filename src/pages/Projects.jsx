import { useState } from 'react';
import './projects.css';
import Noto from '../assets/NoTo-Website.mp4';
import college from '../assets/College.mp4';
import ToDo from '../assets/Student-ToDo List.mp4';
import logicCodeImg from '../assets/images/logic_code_preview_1789626825100.jpg';
import mistClubImg from '../assets/images/mist_club_preview_1789626840128.jpg';
import { FaGithub, FaExternalLinkAlt, FaTools, FaUsers, FaCode } from 'react-icons/fa';

const Projects = () => {
    const [calcDisplay, setCalcDisplay] = useState('0');

    const handleCalcInput = (val) => {
        if (val === 'C') {
            setCalcDisplay('0');
        } else if (val === '=') {
            try {
                // Safe basic arithmetic eval
                const sanitized = calcDisplay.replace(/[^0-9+\-*/.]/g, '');
                const result = Function(`'use strict'; return (${sanitized})`)();
                setCalcDisplay(String(result));
            } catch {
                setCalcDisplay('Error');
            }
        } else {
            setCalcDisplay((prev) => (prev === '0' || prev === 'Error' ? val : prev + val));
        }
    };

    return (
        <div className="projects-page">
            <section className="projects-container">

                {/* Project 1 */}
                <div className="project-card">
                    <div className="project-image">
                        <video
                            src={Noto}
                            muted
                            autoPlay
                            loop
                            playsInline
                        />
                    </div>
                    <div className="project-info">
                        <h3>NoTo - Student Material</h3>
                        <div className="project-tags">
                            <span className="tag">HTML5</span>
                            <span className="tag">CSS3</span>
                            <span className="tag">Responsive UI</span>
                        </div>
                        <p>
                            A structured, responsive web platform designed to organize and present curated study materials for students. Features intuitive category-based navigation, clean layouts, and mobile-first accessibility.
                        </p>
                        <div className="project-links">
                            <a
                                href="https://github.com/Lakshmi-14082005/NoTo-website"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="github-btn"
                            >
                                <FaGithub /> GitHub
                            </a>
                            <a
                                href="https://lakshmi-14082005.github.io/NoTo-website/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="demo-btn"
                            >
                                <FaExternalLinkAlt /> Live Demo
                            </a>
                        </div>
                    </div>
                </div>

                {/* Project 2 */}
                <div className="project-card">
                    <div className="project-image">
                        <video
                            src={ToDo}
                            muted
                            autoPlay
                            loop
                            playsInline
                        />
                    </div>
                    <div className="project-info">
                        <h3>Student To‑Do List</h3>
                        <div className="project-tags">
                            <span className="tag">React JS</span>
                            <span className="tag">JavaScript (ES6+)</span>
                            <span className="tag">CSS3</span>
                        </div>
                        <p>
                            A productivity app built to help students manage academic deadlines and subtasks with visual hierarchy, task completion filters, and persistent state management.
                        </p>
                        <div className="project-links">
                            <a
                                href="https://github.com/Lakshmi-14082005/Student_To_Do_app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="github-btn"
                            >
                                <FaGithub /> GitHub
                            </a>
                            <a
                                href="https://lakshmi-14082005.github.io/Student_To_Do_app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="demo-btn"
                            >
                                <FaExternalLinkAlt /> Live Demo
                            </a>
                        </div>
                    </div>
                </div>

                {/* Project 3 */}
                <div className="project-card">
                    <div className="project-image">
                        <video
                            src={college}
                            muted
                            autoPlay
                            loop
                            playsInline
                        />
                    </div>
                    <div className="project-info">
                        <h3>College Canteen Survey</h3>
                        <div className="project-tags">
                            <span className="tag">React JS</span>
                            <span className="tag">Auth System</span>
                            <span className="tag">Frontend Logic</span>
                        </div>
                        <p>
                            A comprehensive web application for gathering and analyzing real-time student dining feedback. Phase 1 delivers a secure, responsive authentication flow and onboarding UI.
                        </p>
                        <div className="project-links">
                            <span className="dev-status-badge">
                                <FaTools /> Phase 1 Completed &bull; In Active Development
                            </span>
                        </div>
                    </div>
                </div>

                {/* Project 4 */}
                <div className="project-card">
                    <div className="project-image flex flex-col items-center justify-center bg-slate-900 text-white p-3">
                        <div className="w-full max-w-[220px] bg-slate-800 rounded-xl p-3 shadow-lg border border-slate-700">
                            <div className="bg-slate-950 text-emerald-400 font-mono text-right text-lg px-3 py-1.5 rounded-lg mb-2 overflow-hidden truncate">
                                {calcDisplay}
                            </div>
                            <div className="grid grid-cols-4 gap-1.5 text-xs font-semibold">
                                {['7', '8', '9', '/'].map((item) => (
                                    <button
                                        key={item}
                                        type="button"
                                        onClick={() => handleCalcInput(item)}
                                        className="bg-slate-700 hover:bg-slate-600 active:scale-95 text-white py-1 rounded cursor-pointer transition-all"
                                    >
                                        {item}
                                    </button>
                                ))}
                                {['4', '5', '6', '*'].map((item) => (
                                    <button
                                        key={item}
                                        type="button"
                                        onClick={() => handleCalcInput(item)}
                                        className="bg-slate-700 hover:bg-slate-600 active:scale-95 text-white py-1 rounded cursor-pointer transition-all"
                                    >
                                        {item}
                                    </button>
                                ))}
                                {['1', '2', '3', '-'].map((item) => (
                                    <button
                                        key={item}
                                        type="button"
                                        onClick={() => handleCalcInput(item)}
                                        className="bg-slate-700 hover:bg-slate-600 active:scale-95 text-white py-1 rounded cursor-pointer transition-all"
                                    >
                                        {item}
                                    </button>
                                ))}
                                {['C', '0', '=', '+'].map((item) => (
                                    <button
                                        key={item}
                                        type="button"
                                        onClick={() => handleCalcInput(item)}
                                        className={`${
                                            item === '=' ? 'bg-blue-600 hover:bg-blue-500' : item === 'C' ? 'bg-rose-600 hover:bg-rose-500' : 'bg-slate-700 hover:bg-slate-600'
                                        } active:scale-95 text-white py-1 rounded cursor-pointer transition-all`}
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="project-info">
                        <h3>Calculator App with React</h3>
                        <div className="project-tags">
                            <span className="tag">React JS</span>
                            <span className="tag">State Hooks</span>
                            <span className="tag">CSS Grid</span>
                        </div>
                        <p>
                            An interactive web calculator developed from scratch exploring React component hierarchy, state updates, formula parsing, and responsive keypad mechanics.
                        </p>
                        <div className="project-links">
                            <a
                                href="https://github.com/Lakshmi-14082005/Calculator-App-with-React"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="github-btn"
                            >
                                <FaGithub /> GitHub
                            </a>
                            <a
                                href="https://lakshmi-14082005.github.io/Calculator-App-with-React/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="demo-btn"
                            >
                                <FaExternalLinkAlt /> Live Demo
                            </a>
                        </div>
                    </div>
                </div>

                {/* Project 5: MIST Club */}
                <div className="project-card">
                    <div className="project-image relative group">
                        <img
                            src={mistClubImg}
                            alt="Mist Club - Mother Teresa Institute of Science and Technology"
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent flex flex-col justify-end p-4">
                            <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded bg-sky-600 text-white w-fit mb-1 shadow">
                                <FaUsers /> SAC Collegiate Network
                            </span>
                            <h4 className="text-base sm:text-lg font-bold text-white tracking-wide">
                                Unite, Create & Excel with Mist Club
                            </h4>
                        </div>
                    </div>
                    <div className="project-info">
                        <h3>Mist-Club</h3>
                        <div className="project-tags">
                            <span className="tag">React 19 + TypeScript</span>
                            <span className="tag">Vite 6</span>
                            <span className="tag">Tailwind CSS v4</span>
                            <span className="tag">Motion</span>
                            <span className="tag">Lucide + Material Symbols</span>
                            <span className="tag">SheetJS (xlsx)</span>
                        </div>
                        <p>
                            The central digital hub for Mother Teresa Institute of Science & Technology (MIST). Coordinates collegiate clubs, student innovations, campus competitions, workshops, and certified achievements with structured mentorship.
                        </p>
                        <div className="project-links">
                            <a
                                href="https://github.com/Lakshmi-14082005/Mist-Club"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="github-btn"
                            >
                                <FaGithub /> GitHub
                            </a>
                            <a
                                href="https://ais-pre-xhycrgknrskqapukzqhyrc-837519493297.asia-east1.run.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="demo-btn"
                            >
                                <FaExternalLinkAlt /> Live Demo
                            </a>
                        </div>
                    </div>
                </div>

                {/* Project 6: LogicCode */}
                <div className="project-card">
                    <div className="project-image relative group">
                        <img
                            src={logicCodeImg}
                            alt="LogicCode - Master Aptitude & Reasoning"
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent flex flex-col justify-end p-4">
                            <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded bg-emerald-600 text-white w-fit mb-1 shadow">
                                <FaCode /> Logic & Aptitude Practice
                            </span>
                            <h4 className="text-base sm:text-lg font-bold text-white tracking-wide">
                                Master Aptitude & Reasoning
                            </h4>
                        </div>
                    </div>
                    <div className="project-info">
                        <h3>LogicCode</h3>
                        <div className="project-tags">
                            <span className="tag">React 19 + TypeScript</span>
                            <span className="tag">Node.js + Express</span>
                            <span className="tag">Vite</span>
                            <span className="tag">Tailwind CSS v4</span>
                            <span className="tag">Motion</span>
                            <span className="tag">Lucide React</span>
                        </div>
                        <p>
                            A disciplined, minimalist EdTech platform designed for focused preparation. Sharpen problem-solving skills with timed practice drills, tiered difficulty levels, curated formula cheat sheets, and real-time performance analytics.
                        </p>
                        <div className="project-links">
                            <a
                                href="https://github.com/Lakshmi-14082005/LogicCode"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="github-btn"
                            >
                                <FaGithub /> GitHub
                            </a>
                            <a
                                href="https://ais-pre-usx5wn7xpk7xrau2vdpcsk-837519493297.asia-east1.run.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="demo-btn"
                            >
                                <FaExternalLinkAlt /> Live Demo
                            </a>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Projects;