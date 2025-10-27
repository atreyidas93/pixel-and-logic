import React from 'react';
import type { LucideIcon } from "lucide-react";

interface BadgeProps {
  children: React.ReactNode;
  icon?: LucideIcon;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  icon: Icon,
  className = ''
}) => {
  const variantStyles = {
    default: 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400',
    primary: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
    success: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
    warning: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400',
    danger: 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400',
    info: 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400',
  };

  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base'
  };

  const iconSizes = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  };

  return (
    <span
      className={`
        inline-flex items-center
        font-medium rounded-full
        ${sizeClasses[size]}
        ${variantStyles[variant]}
        ${className}
      `.trim()}
    >
      {Icon && <Icon className={`${iconSizes[size]} ${children ? 'mr-1' : ''}`} />}
      {children}
    </span>
  );
};

export default Badge;