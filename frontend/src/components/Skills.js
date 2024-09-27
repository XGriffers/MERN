
import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "JavaScript", level: 9, icon: "fab fa-js" },
        { name: "Python", level: 7, icon: "fab fa-python" },
        { name: "Java", level: 6, icon: "fab fa-java" }
        
      ]
    },
    {
      category: "Web Technologies",
      skills: [
        { name: "React", level: 8, icon: "fab fa-react" },
        { name: "Node.js", level: 7, icon: "fab fa-node-js" },
        { name: "HTML5", level: 9, icon: "fab fa-html5" },
        { name: "CSS3", level: 8, icon: "fab fa-css3-alt" },
        {name: "Express", level: 7, icon: "fas fa-server"}
      ]
    },
    {
      category: "Tools & Platforms",
      skills: [
        { name: "Git", level: 8, icon: "fab fa-git-alt" },
        { name: "Docker", level: 6, icon: "fab fa-docker" },
        { name: "AWS", level: 5, icon: "fab fa-aws" }
        
      ]
    }
  ];

  return (
    <section className="skills" id="skills">
      <h2>My Skills</h2>
      {skillCategories.map((category, index) => (
        <div key={index} className="skill-category">
          <h3>{category.category}</h3>
          <div className="skills-grid">
            {category.skills.map((skill, skillIndex) => (
              <div key={skillIndex} className="skill-item">
                <i className={`${skill.icon} skill-icon`}></i>
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <div className="skill-bar-container">
                    <div 
                      className="skill-bar" 
                      style={{width: `${skill.level * 10}%`}}
                      data-level={skill.level}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;