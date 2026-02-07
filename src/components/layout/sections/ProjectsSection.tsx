import { ScrollReveal } from '../ScrollReveal';
import { motion } from 'motion/react';

type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  previewUrl?: string;
  githubUrl?: string;
};


const projects: Project[] = [
  {
    id: 'proj-1',
    title: 'Fleet Management Telemetry Platform',
    description:
      'Developed a distributed fleet telemetry system using Rust, Go, and gRPC to support real-time streaming, command control, and metrics aggregation. Implemented realistic vehicle simulation and concurrency-safe async processing for fleet state classification and monitoring.',
    technologies: ['Rust', 'Go', 'gRPC', 'Distributed Systems'],
    githubUrl: 'https://github.com/Kevinrestrepoh/Fleet_Management',
  },
  {
    id: 'proj-2',
    title: 'API TUI Client',
    description:
      'Built a Go-based terminal UI (TUI) application for rapid API testing using the Bubble Tea framework. Designed a fast, keyboard-driven interface to send requests, inspect responses, and switch between endpoints directly from the terminal.',
    technologies: ['Go', 'Bubble Tea', 'TUI'],
    githubUrl: 'https://github.com/Kevinrestrepoh/Luma',
  },
];

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="min-h-screen md:min-h-[88vh] px-6 py-32 md:py-0 -scroll-mt-32 md:scroll-mt-0"
    >
      <div className="max-w-4xl mx-auto w-full">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary flex items-center gap-3">
            <span>/</span>
            <span>projects</span>
            <span className="flex-1 h-px bg-neutral"></span>
          </h2>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.2}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-tertiary rounded-md p-5 transition-colors flex flex-col h-full"
              >
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {project.title}
                </h3>
                <p className="text-secondary mb-4 leading-relaxed text-sm grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-hover text-secondary text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.previewUrl && (
                    <a
                      href={project.previewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-primary hover:text-accent-secondary text-sm font-medium transition-colors"
                    >
                      Preview →
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:text-primary text-sm font-medium transition-colors"
                    >
                      GitHub →
                    </a>
                  )}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};