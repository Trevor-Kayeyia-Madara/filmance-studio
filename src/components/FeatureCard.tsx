import { FeatureCardProps } from '../types';

export const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="p-4 bg-gray-50 rounded-lg border border-solid border-zinc-200">
      <i className={`${icon} mb-3 w-6 h-6`} />
      <div className="mb-1 text-base font-bold text-zinc-900">{title}</div>
      <div className="text-sm leading-5 text-fuchsia-800">{description}</div>
    </div>
  );
};