import { FooterLinkProps } from '../types';

export const FooterLink = ({ text, href }: FooterLinkProps) => {
  return (
    <a href={href} className="text-base text-fuchsia-800">
      {text}
    </a>
  );
};