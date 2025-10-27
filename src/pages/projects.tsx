import React, { useState } from 'react';
import { ExternalLink, Github, Globe, Filter, Code2, Palette, Sparkles } from 'lucide-react';
import Card from '../components/Cards';
import Badge from '../components/Badge';

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

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const getCategoryGradient = (category: string): 'blue-purple' | 'green-teal' | 'orange-red' | 'purple-pink' => {
    const gradients: { [key: string]: 'blue-purple' | 'green-teal' | 'orange-red' | 'purple-pink' } = {
      web: 'blue-purple',
      mobile: 'purple-pink',
      tool: 'green-teal',
      design: 'orange-red',
    };
    return gradients[category] || 'blue-purple';
  };

  const getCategoryIconGradient = (category: string) => {
    const gradients: { [key: string]: string } = {
      web: 'from-blue-600 to-cyan-600',
      mobile: 'from-purple-600 to-pink-600',
      tool: 'from-green-600 to-teal-600',
      design: 'from-orange-600 to-red-600',
    };
    return gradients[category] || 'from-gray-600 to-gray-600';
  };

  return (
    <Card
      gradient={getCategoryGradient(project.category)}
      className="overflow-hidden"
    >
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 z-10">
          <Badge variant="warning" icon={Sparkles} size="sm">
            Featured
          </Badge>
        </div>
      )}

      {/* Project Header with Gradient */}
      <div className={`-m-6 mb-4 h-48 bg-gradient-to-br ${getCategoryIconGradient(project.category)} opacity-90 group-hover:opacity-100 transition-opacity`}>
        <div className="h-full flex items-center justify-center">
          <Code2 className="w-16 h-16 text-white/30" />
        </div>
      </div>

      {/* Project Content */}
      <div>
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <Badge key={index} variant="default" size="sm">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 3 && (
            <Badge variant="default" size="sm">
              +{project.technologies.length - 3}
            </Badge>
          )}
        </div>

        {/* Links and Metadata */}
        <div className="flex flex-wrap items-center gap-3 pt-3 border-t dark:border-gray-700">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="View GitHub repository"
            >
              <Github className="w-4 h-4" />
              <span className="ml-1 text-sm">Code</span>
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              aria-label="View live demo"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="ml-1 text-sm">Live</span>
            </a>
          )}
          {project.organization && (
            <div className="ml-auto text-right">
              <Badge variant="info" size="sm">
                {project.organization}
              </Badge>
              {project.year && (
                <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">
                  {project.year}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Sample projects data
  const projects: Project[] = [
    {
      id: 1,
      title: 'Reusable Component Library',
      description: 'A framework-agnostic component library built to travel seamlessly across modern web stacks — React, Angular, Vue, or plain Web Components.',
      category: 'design',
      technologies: ['Web Component', 'TypeScript', 'CSS', 'Storybook'],
      github: 'https://github.com/atreyidas93/nomad-ui-lib',
      featured: true,
    },
    {
      id: 2,
      title: 'Portfolio Template',
      description: 'Modern, responsive portfolio template with dark mode, animations, and easy customization.',
      category: 'web',
      technologies: ['React.js', 'TypeScript', 'Tailwind CSS'],
      github: 'https://github.com/atreyidas93/pixel-and-logic',
      live: 'https://atreyidas93.github.io/pixel-and-logic/',
      featured: true
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'Collaborative task management tool with drag-and-drop interface, real-time updates, and team analytics.',
      category: 'tool',
      technologies: ['Angular', 'TypeScript', 'Tailwind CSS', '.NET 6'],
      github: 'https://github.com/atreyidas93/task-management-system',
    },
    {
      id: 4,
      title: 'Aircraft Inspection and Maintenance Report Generating System',
      description: 'Centralized Data Management and Reporting System, to enhance aircraft maintenance efficiency through improved health checks',
      category: 'web',
      technologies: ['.NET 8', 'ASP.NET', 'Swagger', 'RabbitMQ', 'SQL', 'SQLite', '.NET MAUI'],
      organization: 'Boeing',
      year: 2025
    },
    {
      id: 5,
      title: 'Aircraft Simulation and Test Information Reduction System',
      description: 'Centralized System for Aircraft Component Simulation and Visualization',
      category: 'web',
      technologies: ['React.js', '.NET Core', 'Swagger', 'SQL'],
      organization: 'Boeing',
      year: 2022
    },
    {
      id: 6,
      title: 'Medicine Manufacturing Plant',
      description: 'Application for Medicine Composition Management and Quality Assurance',
      category: 'web',
      technologies: ['Angular 12', 'Node.js', 'Databricks', 'SQL'],
      organization: 'TCS',
      year: 2021
    },
    {
      id: 7,
      title: 'Vaccine Distribution Portal',
      description: 'COVID Vaccine Request and Distribution System across Countries',
      category: 'web',
      technologies: ['Microsoft PowerApps', 'MS Flow'],
      organization: 'TCS',
      year: 2020
    },
    {
      id: 8,
      title: 'Application for Training Requests and Schedule Management',
      description: 'A SharePoint site for managing training activities, encompassing training requests, scheduling, session creation, and learner group management',
      category: 'web',
      technologies: ['SharePoint', 'O365', 'AngularJS', '.NET Core', '.NET Scheduled Jobs'],
      organization: 'TCS',
      year: 2019
    },
    {
      id: 9,
      title: 'Portal for Booking Consultations with Specialists',
      description: 'Comprehensive Portal for Surgical Product Information and Consultation Booking',
      category: 'web',
      technologies: ['Angular 8', 'ASP.NET', 'MVC', 'PostgreSQL', 'SSR', 'SEO'],
      organization: 'TCS',
      year: 2018
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
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <Card hover={false} padding="xl" className="text-center">
            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Filter className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
              No Projects Found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              No projects found in this category. Try selecting a different filter.
            </p>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Projects;