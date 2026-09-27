import './skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend Development",
            skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js"]
        },
        {
            title: "Backend & Database",
            skills: ["Python", "Java", "MongoDB", "MySQL"]
        },
        {
            title: "Professional Skills",
            skills: ["Communication", "Leadership", "Problem-Solving"]
        }
    ];

    return (
        <div className="skills-container">
            <h2 className="text-5xl skills-heading">My Skills</h2>
            <p className="skills-subtitle">The technologies, tools, and traits I use to bring ideas to life.</p>

            <div className="skills-grid">
                {skillCategories.map((category, index) => (
                    <div key={index} className="skill-card">
                        <h3>{category.title}</h3>
                        <div className="skills-list">
                            {category.skills.map((skill, idx) => (
                                <span key={idx} className="skill-badge">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;