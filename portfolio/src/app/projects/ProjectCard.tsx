'use client'

import Image from 'next/image'
import { Package, Wifi, BotIcon as Robot } from 'lucide-react'
import { Project, ProjectCategory } from './types'
import { getTagInfo, getCategoryColor } from './utils'
import Tag from './Tag'

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

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div 
      className="pixel-card cursor-pointer hover:scale-[1.02] transition-transform duration-200"
      onClick={onClick}
    >
      <div className="relative h-48">
        <Image 
          src={project.images[0]?.src || "/placeholder.svg?height=300&width=300"}
          alt={project.images[0]?.alt || project.titleEn}
          fill
          className="object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-10"></div>
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
      <div className="p-4 border-t-2 border-white">
        <h3 className="text-white text-sm font-bold mb-1 pixel-text">{project.titleKo}</h3>
        <h4 className="text-xs pixel-text mb-2 text-[var(--accent-color)]">{project.titleEn}</h4>
        <p className="text-[10px] text-white mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map(tag => (
            <Tag key={tag} tag={tag} />
          ))}
          {project.tags.length > 3 && (
            <span className="px-2 py-1 text-[10px] pixel-corners border border-white">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

