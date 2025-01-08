export type ProjectCategory = 'Product' | 'IoT' | 'Robotics';

export interface ProjectImage {
  src: string;
  alt: string;
  description: string;
}

export interface Project {
  id: number;
  titleKo: string;
  titleEn: string;
  description: string;
  images: ProjectImage[];
  year: number;
  content: string;
  tags: string[];
  category: ProjectCategory;
}

