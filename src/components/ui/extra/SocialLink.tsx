import React from "react";

interface SocialLinkProps {
  href: string;
  label: string;
  children: React.ReactNode;
  className?: string;
}

export const SocialLink = ({
  href,
  label,
  className,
  children,
}: SocialLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className={`text-2xl transition-colors ${className}`}
  >
    {children}
  </a>
);
