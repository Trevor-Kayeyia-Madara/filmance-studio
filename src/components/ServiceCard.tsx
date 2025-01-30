import { ServiceCardProps } from '../types';

export const ServiceCard = ({ image, title, altText }: ServiceCardProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <img
        src={image}
        alt={altText}
        className="object-cover mb-3 w-44 h-44 rounded-xl"
      />
      <div className="text-base font-medium text-zinc-900">{title}</div>
    </div>
  );
};