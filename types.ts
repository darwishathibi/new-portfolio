import { url } from "inspector";

export interface GradientLayoutProps {
    children: React.ReactNode;
  }

  export interface Post {
    title: string;
  desc: string;
  image: {
    url: string;
    alt?: string;
  };
  frameworks: string[];
  githubUrl?: string;
  liveUrl?: string;
  }