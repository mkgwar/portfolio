const Project = ({ title, desc, tech, img, reverse, link, github }) => {
  return (
    <div className={"project " + (reverse ? "reverse" : null)}>
      <div className="project-thumbnail">
        <img src={img} alt="project" />
        <a href={link} target="_blank">
          <div className="project-thumbnail-overlay" />
        </a>
      </div>
      <div className={"project-text " + (reverse ? "reverse" : null)}>
        <span className="project-top-text">Featured Project</span>
        <span className="project-title">
          <a href={link} target="_blank">
            {title}
          </a>
        </span>
        <div className={"project-desc " + (reverse ? "reverse" : null)}>
          {desc}
        </div>
        <div className="project-tech">
          {tech.map((techItem, index) => {
            return <span key={index}>{techItem}</span>;
          })}
        </div>
        <div className="project-links">
          <a href={github} target="_blank">
            Github &gt;
          </a>
          <a href={link} target="_blank">
            Website &gt;
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
