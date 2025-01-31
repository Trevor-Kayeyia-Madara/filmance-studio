// src/Home.tsx

import { ServiceCard } from "../components/ServiceCard";
import { FeatureCard } from "../components/FeatureCard";
import { Footer } from "../components/Footer";
import {services, features} from '../data/content'


const Home: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <header className="flex justify-between items-center px-10 py-3 border-b border-solid border-b-gray-200 max-md:px-5 max-md:py-3">
        <div className="flex gap-4 items-center">
          <i className="ti ti-camera" />
          <div className="text-lg font-bold text-zinc-900">Filmance Studio</div>
        </div>
        <nav className="flex gap-8 items-center">
          <div className="flex gap-9 items-center max-sm:hidden">
            {['Services', 'Portfolio', 'Pricing', 'FAQs'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-zinc-900"
                tabIndex={0}
              >
                {item}
              </a>
            ))}
          </div>
          <button className="px-4 py-2 text-sm font-bold text-center text-gray-50 bg-fuchsia-800 rounded-3xl">
            Book Now
          </button>
        </nav>
      </header>

      <div className="flex flex-col justify-center items-center p-10 text-center text-white bg-center bg-cover bg-[url('https://placehold.co/1280x512/1a0d1c/1a0d1c')] min-h-[512px]">
        <h1 className="mb-4 text-5xl font-black tracking-tighter leading-none max-w-[800px] max-sm:text-3xl">
          Professional Photography Services
        </h1>
        <p className="mb-8 text-base leading-6 max-w-[600px] max-sm:text-sm">
          We provide premium photography services for weddings, events, portraits, and more. Our team of experienced photographers will capture the moments that matter most to you.
        </p>
        <button className="px-6 py-3 text-base font-bold text-gray-50 bg-fuchsia-800 rounded-3xl">
          Get Started
        </button>
      </div>

      <div className="px-40 py-10 max-md:px-5 max-md:py-10">
        <h2 className="mb-6 text-2xl font-bold text-zinc-900">
          Explore Photography Services
        </h2>
        <div className="grid gap-3 grid-cols-[repeat(5,1fr)] max-md:grid-cols-[repeat(2,1fr)] max-sm:grid-cols-[1fr]">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <h2 className="mb-6 text-2xl font-bold text-zinc-900">
          Why Choose Filmance Studio?
        </h2>
        <div className="grid gap-3 mt-6 grid-cols-[repeat(5,1fr)] max-md:grid-cols-[repeat(2,1fr)] max-sm:grid-cols-[1fr]">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default Home;