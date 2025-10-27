import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Clock, Search, ExternalLink } from 'lucide-react';
import Card from '../components/Cards';
import Badge from '../components/Badge';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-20 md:py-32">
          {/* Background decoration */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            {/* Main heading with animation */}
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">Hello, I'm </span>
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Atreyi
                </span>
              </h1>
              
              {/* Tagline */}
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
                Engineer • Storyteller • Explorer
              </p>
              
              {/* Description */}
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
                Building digital experiences that blend technical innovation with creative storytelling. 
                From crafting elegant code to exploring the world through travel and cuisine.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
              <Link
                to="/projects"
                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                See Projects
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <a
                href="https://sites.google.com/view/the-nomad-lens"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-gray-700 dark:text-gray-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-300 dark:border-gray-600 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                Travel & Cooking
                <ExternalLink className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-20 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Projects Card */}
            <Card
              icon={Code2}
              iconGradient="from-blue-600 to-purple-600"
              title="Projects"
              description="Explore my technical work spanning web applications, tools, and creative experiments."
              gradient="blue-purple"
            >
              <Link
                to="/projects"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:gap-2 transition-all"
              >
                View Projects
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </Card>

            {/* Clock Card */}
            <Card
              icon={Clock}
              iconGradient="from-green-600 to-teal-600"
              title="Live Clock"
              description="Real-time IST clock and session timer tracking your visit duration in the header."
              gradient="green-teal"
            >
              <div className="text-sm text-gray-500 dark:text-gray-500">
                <div>Current time displayed in IST</div>
                <div className="mt-1">Session timer: HH:MM:SS</div>
              </div>
            </Card>

            {/* Search Card */}
            <Card
              icon={Search}
              iconGradient="from-orange-600 to-red-600"
              title="Global Search"
              description="Coming soon: Instantly find any content across the entire portfolio site."
              gradient="orange-red"
            >
              <Badge variant="default" size="md">
                Feature in Development
              </Badge>
            </Card>
          </div>
        </div>
      </section>

      {/* Optional: Additional Hero Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Pixels & Logic
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Where creativity meets code. This portfolio represents my journey through technology, 
            design, and the stories that connect them all.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;