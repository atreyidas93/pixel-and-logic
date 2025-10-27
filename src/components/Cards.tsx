import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface CardProps {
  children?: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: 'blue-purple' | 'green-teal' | 'orange-red' | 'purple-pink' | null;
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  
  // Optional structured content
  icon?: LucideIcon;
  iconGradient?: string;
  iconSize?: 'sm' | 'md' | 'lg';
  title?: string;
  description?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = true,
  gradient = null,
  padding = 'md',
  icon: Icon,
  iconGradient,
  iconSize = 'md',
  title,
  description,
  titleClassName = '',
  descriptionClassName = ''
}) => {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10'
  };

  const gradientClasses = {
    'blue-purple': 'from-blue-600/5 to-purple-600/5',
    'green-teal': 'from-green-600/5 to-teal-600/5',
    'orange-red': 'from-orange-600/5 to-red-600/5',
    'purple-pink': 'from-purple-600/5 to-pink-600/5'
  };

  const iconSizeClasses = {
    sm: { container: 'w-10 h-10', icon: 'w-5 h-5' },
    md: { container: 'w-12 h-12', icon: 'w-6 h-6' },
    lg: { container: 'w-14 h-14', icon: 'w-7 h-7' }
  };

  const baseClasses = `
    group
    bg-white dark:bg-gray-800 
    rounded-2xl 
    shadow-lg 
    ${hover ? 'hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2' : ''}
    ${paddingClasses[padding]}
    ${gradient ? 'relative overflow-hidden' : ''}
    ${className}
  `.trim();

  const hasStructuredContent = Icon || title || description;

  return (
    <div className={baseClasses}>
      {gradient && (
        <div 
          className={`absolute inset-0 bg-gradient-to-br ${gradientClasses[gradient]} opacity-0 group-hover:opacity-100 transition-opacity`} 
        />
      )}
      <div className={gradient || hasStructuredContent ? 'relative' : ''}>
        {/* Optional Icon */}
        {Icon && iconGradient && (
          <div 
            className={`${iconSizeClasses[iconSize].container} bg-gradient-to-br ${iconGradient} rounded-xl flex items-center justify-center mb-4`}
          >
            <Icon className={`${iconSizeClasses[iconSize].icon} text-white`} />
          </div>
        )}

        {/* Optional Title */}
        {title && (
          <h3 className={`text-xl font-semibold mb-2 text-gray-900 dark:text-white ${titleClassName}`}>
            {title}
          </h3>
        )}

        {/* Optional Description */}
        {description && (
          <p className={`text-gray-600 dark:text-gray-400 mb-4 ${descriptionClassName}`}>
            {description}
          </p>
        )}

        {/* Children content */}
        {children}
      </div>
    </div>
  );
};

export default Card;