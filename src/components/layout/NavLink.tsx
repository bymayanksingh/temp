import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  mobile?: boolean;
}

export function NavLink({ to, children, mobile }: NavLinkProps) {
  const location = useLocation();
  const isActive = location.pathname === to;

  const baseStyles = "transition-colors relative group";
  const mobileStyles = mobile
    ? "block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
    : "hover:text-gray-600 dark:hover:text-gray-300";

  const activeStyles = isActive
    ? "text-black dark:text-white font-medium"
    : "text-gray-600 dark:text-gray-400";

  return (
    <Link to={to} className={`${baseStyles} ${mobileStyles} ${activeStyles}`}>
      {children}
      {!mobile && (
        <span className={`absolute -bottom-1 left-0 h-0.5 bg-black dark:bg-white transition-all ${
          isActive ? 'w-full' : 'w-0 group-hover:w-full'
        }`} />
      )}
    </Link>
  );
}