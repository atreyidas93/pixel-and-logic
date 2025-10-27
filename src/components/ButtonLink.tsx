import React from 'react';
import { Link } from 'react-router-dom';
import type { LucideIcon } from 'lucide-react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonLinkProps {
  to?: string;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  active?: boolean;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  onClick?: () => void;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({
  to,
  href,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  fullWidth = false,
  active = false,
  children,
  className = '',
  external = false,
  onClick,
}) => {
  const baseClasses = `
    inline-flex items-center justify-center
    font-medium rounded-lg
    transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-offset-2
  `.trim();

  const variantClasses: Record<ButtonVariant, string> = {
    primary: `
      bg-blue-600 text-white
      hover:bg-blue-700
      focus:ring-blue-500
      shadow-md hover:shadow-lg
    `,
    secondary: `
      bg-gray-600 text-white
      hover:bg-gray-700
      focus:ring-gray-500
      shadow-md hover:shadow-lg
    `,
    outline: `
      bg-white/80 dark:bg-gray-800/80
      backdrop-blur-sm
      border border-gray-300 dark:border-gray-600
      text-gray-700 dark:text-gray-300
      hover:bg-gray-50 dark:hover:bg-gray-700
      focus:ring-gray-500
    `,
    ghost: `
      bg-transparent
      text-gray-700 dark:text-gray-300
      hover:bg-gray-100 dark:hover:bg-gray-800
      focus:ring-gray-500
    `,
    gradient: `
      bg-gradient-to-r from-blue-600 to-purple-600
      text-white
      hover:shadow-xl
      focus:ring-purple-500
      transform hover:-translate-y-1
    `,
  };

  const sizeClasses: Record<ButtonSize, string> = {
    sm: 'px-3 py-1.5 text-sm gap-1.5',
    md: 'px-4 py-2 text-base gap-2',
    lg: 'px-8 py-4 text-lg gap-2',
  };

  const iconSizeClasses: Record<ButtonSize, string> = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-5 h-5',
  };

  const activeClasses = active
    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
    : '';

  const widthClasses = fullWidth ? 'w-full' : '';

  const combinedClasses = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${activeClasses}
    ${widthClasses}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  const content = (
    <>
      {Icon && iconPosition === 'left' && (
        <Icon className={iconSizeClasses[size]} />
      )}
      {children}
      {Icon && iconPosition === 'right' && (
        <Icon className={iconSizeClasses[size]} />
      )}
    </>
  );

  // Internal Link (React Router)
  if (to) {
    return (
      <Link to={to} className={combinedClasses} onClick={onClick}>
        {content}
      </Link>
    );
  }

  // External Link
  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  // Fallback to button if neither to nor href is provided
  return (
    <button className={combinedClasses} onClick={onClick}>
      {content}
    </button>
  );
};

export default ButtonLink;