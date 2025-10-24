import React, { useState } from 'react';
import { ExternalLink, Github, Globe, Filter, Code2, Palette, Sparkles } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  category: 'web' | 'mobile' | 'tool' | 'design';
  technologies: string[];
  github?: string;
  live?: string;
  image?: string;
  featured?: boolean;
  year?: number;
  organization?: string;
}

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Sample projects data
  const projects: Project[] = [
    {
      id: 1,
      title: 'Reusable Component Library',
      description: 'A framework-agnostic component library built to travel seamlessly across modern web stacks — React, Angular, Vue, or plain Web Components.',
      category: 'design',
      technologies: ['Web Component', 'Javascript', 'CSS'],
      github: 'https://github.com/atreyidas93/nomad-ui-lib',
      featured: true,
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management tool with drag-and-drop interface, real-time updates, and team analytics.',
      category: 'tool',
      technologies: ['Angular', 'TypeScript', 'Tailwind CSS', '.NET 6'],
      github: 'https://github.com/atreyidas93/task-management-system',
    },
    {
      id: 3,
      title: 'Portfolio Template',
      description: 'Modern, responsive portfolio template with dark mode, animations, and easy customization.',
      category: 'design',
      technologies: ['React.Js', 'Typescript', 'Tailwind CSS'],
    },
    {
      id: 4,
      title: 'Aircraft Inspection and Maintenance Report Generating System',
      description: 'Auto-generate beautiful API documentation from OpenAPI specifications with interactive examples.',
      category: 'web',
      technologies: ['.NET 8', 'ASP.NET', 'Swagger', 'RabbitMQ'],
      organization: 'Boeing',
      year: 2025
    },
    {
      id: 5,
      title: 'Aircraft Simulation and Test Information Reduction System',
      description: 'Centralized System for Aircraft Component Simulation and Visualization',
      category: 'web',
      technologies: ['Next.js', 'MDX', 'Swagger'],
      organization: 'Boeing',
      year: 2022
    },
    {
      id: 6,
      title: 'Medicine Manufacturing Plant',
      description: 'Application for Medicine Composition Management and Quality Assurance ',
      category: 'web',
      technologies: ['Angular 12', 'Node.JS', 'Databricks'],
      organization: 'TCS',
      year: 2021
    },
  ];

  const categories = [
    { value: 'all', label: 'All Projects', icon: Sparkles },
    { value: 'web', label: 'Web Apps', icon: Globe },
    { value: 'mobile', label: 'Mobile', icon: Code2 },
    { value: 'tool', label: 'Tools', icon: Code2 },
    { value: 'design', label: 'Design', icon: Palette },
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      web: 'from-blue-600 to-cyan-600',
      mobile: 'from-purple-600 to-pink-600',
      tool: 'from-green-600 to-teal-600',
      design: 'from-orange-600 to-red-600',
    };
    return colors[category] || 'from-gray-600 to-gray-600';
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Projects
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of my technical work, from web applications to developer tools. 
            Each project represents a unique challenge and learning experience.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`inline-flex items-center px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === category.value
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md'
                }`}
              >
                <Icon className="w-4 h-4 mr-2" />
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Featured
                  </span>
                </div>
              )}

              {/* Project Image or Gradient */}
              <div className={`h-48 bg-gradient-to-br ${getCategoryColor(project.category)} opacity-90 group-hover:opacity-100 transition-opacity`}>
                <div className="h-full flex items-center justify-center">
                  <Code2 className="w-16 h-16 text-white/30" />
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      <span className="ml-1 text-sm">Code</span>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span className="ml-1 text-sm">Live Demo</span>
                    </a>
                  )}
                  {project.organization && (
                    <a
                      className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      <span className="ml-1 text-sm">{project.organization}</span>
                      &nbsp;|
                      <span className="ml-1 text-sm">{project.year}</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <Filter className="w-12 h-12 mx-auto text-gray-400 mb-4" />
            <p className="text-gray-600 dark:text-gray-400">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;