import React from 'react';

interface ButtonProps {
  text: string;
  href?: string;
  preset?: 'primaryButton' | 'secondaryButton' | 'greenButton';
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  href,
  preset = 'primaryButton',
  className = '',
  onClick,
  type = 'button',
  disabled = false
}) => {
  const baseClasses =
    'px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const presets = {
    primaryButton: 'bg-sky-600 hover:bg-sky-700 text-white focus:ring-sky-500',
    secondaryButton: 'bg-gray-200 hover:bg-gray-300 text-gray-800 hover:text-gray-900 focus:ring-sky-500',
    greenButton: 'bg-green-600 hover:bg-green-700 text-white focus:ring-green-500',
  };

  const disabledClasses = disabled 
    ? 'opacity-50 cursor-not-allowed hover:opacity-50' 
    : '';

  const buttonClass = `${baseClasses} ${presets[preset]} ${disabledClasses} ${className}`.trim();

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClass}
        onClick={(e) => {
          if (disabled) {
            e.preventDefault();
          }
        }}
        aria-disabled={disabled}
      >
        {text}
      </a>
    );
  }

  return (
    <button 
      className={buttonClass} 
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;