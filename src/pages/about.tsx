import React from 'react';
import { MapPin, Briefcase, GraduationCap, Heart, Code2, Palette, Globe, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  const skills = {
    'Frontend': ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js'],
    'Backend': ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis'],
    'Tools': ['Git', 'Docker', 'AWS', 'CI/CD', 'Webpack'],
  };

  const interests = [
    { icon: Globe, title: 'Travel', description: 'Exploring new cultures and cuisines around the world' },
    { icon: Heart, title: 'Cooking', description: 'Experimenting with fusion recipes and traditional dishes' },
    { icon: Code2, title: 'Open Source', description: 'Contributing to community projects and sharing knowledge' },
    { icon: Palette, title: 'Photography', description: 'Capturing the beauty of nature and culture. Creating travel videos' },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            About Me
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Bridging the gap between technology and creativity
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
          {/* Left Column - Personal Info */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg sticky top-24">
              {/* Profile Image Placeholder */}
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-4xl font-bold text-white">A</span>
              </div>
              
              <h2 className="text-2xl font-bold text-center mb-2 text-gray-900 dark:text-white">
                Atreyi
              </h2>
              <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
                Full-Stack Developer
              </p>

              {/* Quick Info */}
              <div className="space-y-3">
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <MapPin className="w-5 h-5 mr-3 text-blue-600 dark:text-blue-400" />
                  <span>Bangalore, India</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Briefcase className="w-5 h-5 mr-3 text-green-600 dark:text-green-400" />
                  <span>Software Engineer</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <GraduationCap className="w-5 h-5 mr-3 text-purple-600 dark:text-purple-400" />
                  <span>Computer Science</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Bio Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
                <Sparkles className="w-6 h-6 mr-2 text-yellow-500" />
                My Story
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  Hello! I'm Atreyi, a passionate full-stack developer with a love for creating 
                  elegant solutions to complex problems. My journey in technology began with a 
                  curiosity about how things work and evolved into a career building digital 
                  experiences that make a difference.
                </p>
                <p>
                  With a background in Computer Science and years of hands-on experience, I 
                  specialize in developing web applications that are not just functional but 
                  also beautiful and intuitive. I believe that great software should tell a 
                  story and create meaningful connections with its users.
                </p>
                <p>
                  Beyond coding, I'm an avid traveler and food enthusiast. My adventures around 
                  the world have taught me to appreciate diverse perspectives and cultures, 
                  which I bring into my work. Whether I'm debugging code or perfecting a recipe, 
                  I approach every challenge with creativity and determination.
                </p>
              </div>
            </div>

            {/* Skills Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                <Code2 className="w-6 h-6 mr-2 text-blue-500" />
                Technical Skills
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <h4 className="font-semibold mb-3 text-gray-700 dark:text-gray-300">
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interests Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                <Heart className="w-6 h-6 mr-2 text-red-500" />
                Interests & Hobbies
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {interests.map((interest, index) => {
                  const Icon = interest.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50"
                    >
                      <Icon className="w-5 h-5 mr-3 mt-0.5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {interest.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          {interest.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;