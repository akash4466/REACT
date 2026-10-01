import React from 'react';

/**
 * Task 5: Reusable ProjectCard component for showcasing portfolio projects.
 *
 * =========================================================================
 * GITHUB COPILOT SUGGESTION (Pasted as required before implementation):
 * =========================================================================
 * // Copilot Prompt: "Suggest a structure for a reusable ProjectCard component
 * //                  for showcasing portfolio projects with title, description,
 * //                  tech stack tags, demo link, and github link."
 *
 * function ProjectCard({
 *   title,
 *   description,
 *   tags,
 *   liveUrl,
 *   githubUrl,
 *   image
 * }) {
 *   return (
 *     <div className="project-card">
 *       <img src={image} alt={title} className="project-image" />
 *       <div className="project-content">
 *         <h3 className="project-title">{title}</h3>
 *         <p className="project-description">{description}</p>
 *         <div className="project-tags">
 *           {tags.map((tag, index) => (
 *             <span key={index} className="tag">{tag}</span>
 *           ))}
 *         </div>
 *         <div className="project-links">
 *           {liveUrl && <a href={liveUrl} target="_blank" rel="noreferrer">Live Demo</a>}
 *           {githubUrl && <a href={githubUrl} target="_blank" rel="noreferrer">Source Code</a>}
 *         </div>
 *       </div>
 *     </div>
 *   );
 * }
 * =========================================================================
 */

function ProjectCard({
  title = 'AI Code Assistant',
  description = 'An intelligent pair-programming assistant that analyzes codebases, generates documentation, and runs automated tests.',
  tags = ['React', 'TypeScript', 'Node.js', 'OpenAI'],
  liveUrl = 'https://example.com/demo',
  githubUrl = 'https://github.com/example/ai-assistant',
  image = '🤖',
  featured = false
}) {
  return (
    <div className={`project-card ${featured ? 'featured-project' : ''}`}>
      {featured && <span className="featured-ribbon">⭐ Featured Project</span>}

      <div className="project-header-row">
        <span className="project-visual-icon">{image}</span>
        <div className="project-links-row">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="proj-icon-link"
              title="View GitHub Repository"
            >
              🐙 Code
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="proj-icon-link live-link"
              title="Open Live Preview"
            >
              🚀 Live Demo
            </a>
          )}
        </div>
      </div>

      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>

        {/* Tech Stack Tags */}
        <div className="project-tags">
          {tags.map((tag, index) => (
            <span key={index} className="project-tag-pill">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
