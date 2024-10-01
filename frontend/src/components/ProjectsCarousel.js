
import React, { useState, useEffect } from 'react';
import './ProjectCarousel.css';


const ProjectsCarousel = () => {
  const [projects, setProjects] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const apiUrl = process.env.NODE_ENV === 'production'
  ? process.env.REACT_APP_API_URL_PROD
  : process.env.REACT_APP_API_URL_DEV;

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/projects`);
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data = await response.json();
        setProjects(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  if (isLoading) {
    return <div className="projects-carousel">Loading projects...</div>;
  }

  return (
    <section className="projects-carousel" id="projects">
      <h2>My Projects</h2>
      {projects.length === 0 ? (
        <div className="no-projects">
          <p>No projects available at the moment. Check back soon!</p>
        </div>
      ) : (
        <>
          <div className="carousel">
            <button className="carousel-button prev" onClick={prevProject}>&lt;</button>
            <div className="project-card">
              
              <div className="project-info">
                <h3>{projects[currentIndex].title}</h3>
                <p>{projects[currentIndex].description}</p>
                <div className="tech-tags">
                  {projects[currentIndex].technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <a href={projects[currentIndex].projectUrl} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
              </div>
            </div>
            <button className="carousel-button next" onClick={nextProject}>&gt;</button>
          </div>
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <span 
                key={index} 
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              ></span>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default ProjectsCarousel;