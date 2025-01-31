import { ServiceCardProps, FeatureCardProps, FooterLinkProps } from '../types';

export const services: ServiceCardProps[] = [
  {
    image: "https://placehold.co/176x176/f5e6e8/f5e6e8",
    title: "Wedding Photography",
    altText: "Wedding Photography"
  },
  {
    image: "https://placehold.co/176x176/e6e6e6/e6e6e6",
    title: "Event Photography",
    altText: "Event Photography"
  },
  {
    image: "https://placehold.co/176x176/f0e6e6/f0e6e6",
    title: "Portrait Photography",
    altText: "Portrait Photography"
  },
  {
    image: "https://placehold.co/176x176/e6f0e6/e6f0e6",
    title: "Product Photography",
    altText: "Product Photography"
  },
  {
    image: "https://placehold.co/176x176/e6e6f0/e6e6f0",
    title: "Real Estate Photography",
    altText: "Real Estate Photography"
  }
];

export const features: FeatureCardProps[] = [
  {
    icon: "ti ti-camera",
    title: "Experienced Photographers",
    description: "Our photographers have years of experience and a passion for their craft."
  },
  {
    icon: "ti ti-photo",
    title: "High-Quality Images",
    description: "We use professional-grade equipment and advanced editing techniques to ensure your photos look their best."
  },
  {
    icon: "ti ti-clock",
    title: "Fast Turnaround",
    description: "Receive your edited images within days, not weeks."
  },
  {
    icon: "ti ti-heart",
    title: "Friendly Service",
    description: "We pride ourselves on providing a seamless and enjoyable photography experience."
  },
  {
    icon: "ti ti-coin",
    title: "Affordable Pricing",
    description: "Get premium photography services without breaking the bank."
  }
];

export const footerLinks: FooterLinkProps[] = [
  { text: "About Us", href: "/about" },
  { text: "Contact Us", href: "/contact" },
  { text: "Privacy Policy", href: "/privacy" },
  { text: "Terms of Service", href: "/terms" }
];