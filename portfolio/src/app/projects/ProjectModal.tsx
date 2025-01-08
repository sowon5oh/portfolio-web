'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { Project, ProjectCategory } from './types'
import { ChevronLeft, ChevronRight, Package, Wifi, BotIcon as Robot } from 'lucide-react'
import Tag from './Tag'

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const getCategoryIcon = (category: ProjectCategory) => {
  switch (category) {
    case 'Product':
      return <Package className="w-3 h-3 mr-1" />;
    case 'IoT':
      return <Wifi className="w-3 h-3 mr-1" />;
    case 'Robotics':
      return <Robot className="w-3 h-3 mr-1" />;
  }
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div 
        ref={modalRef}
        className="bg-black w-full max-w-4xl max-h-[90vh] flex flex-col border-2 border-white pixel-corners overflow-hidden pixel-dots"
      >
        <div className="flex-grow overflow-y-auto cyberpunk-scrollbar">
          <div className="relative h-64 md:h-96 w-full border-b-2 border-white">
            <Image 
              src={project.images[currentImageIndex].src}
              alt={project.images[currentImageIndex].alt}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30"></div>
            <button 
              onClick={prevImage} 
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black border border-white text-white p-2 pixel-corners"
            >
              <ChevronLeft size={16} />
            </button>
            <button 
              onClick={nextImage} 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black border border-white text-white p-2 pixel-corners"
            >
              <ChevronRight size={16} />
            </button>
            <div className="absolute top-2 right-2 flex space-x-2">
              <div className="pixel-corners bg-[#00e3b2] text-black px-2 py-1 flex items-center">
                {getCategoryIcon(project.category)}
                <span className="text-[10px] pixel-text">{project.category}</span>
              </div>
              <div className="pixel-corners bg-white text-black px-2 py-1">
                <span className="text-[10px] pixel-text">{project.year}</span>
              </div>
            </div>
          </div>
          <div className="p-4 bg-white">
            <p className="text-black text-[13px] italic">
              {project.images[currentImageIndex].description}
            </p>
          </div>
          <div className="p-6 text-white">
            <h2 className="text-xl font-bold mb-1 pixel-text">{project.titleKo}</h2>
            <h3 className="text-lg mb-2 pixel-text text-[var(--accent-color)]">{project.titleEn}</h3>
            <p className="text-[13px] text-white mb-4">{project.description}</p>
            <div className="prose prose-invert max-w-none pixel-text text-[13px]">
              <div dangerouslySetInnerHTML={{ __html: project.content }} />
            </div>
            <div className="mt-8">
              <h3 className="text-white font-semibold mb-2 text-sm">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <Tag key={tag} tag={tag} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 border-t-2 border-white">
          <button
            onClick={onClose}
            className="w-full bg-black text-white border-2 border-white px-4 py-2 pixel-corners hover:bg-white hover:text-black transition-colors pixel-text text-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

