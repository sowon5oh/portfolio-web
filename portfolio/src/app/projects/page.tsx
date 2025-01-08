'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Package, Wifi, BotIcon as Robot } from 'lucide-react'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import { projects } from './data'
import { ProjectCategory, Project } from './types'

const getCategoryIcon = (category: ProjectCategory) => {
  switch (category) {
    case 'Product':
      return <Package className="w-4 h-4 mr-2" />;
    case 'IoT':
      return <Wifi className="w-4 h-4 mr-2" />;
    case 'Robotics':
      return <Robot className="w-4 h-4 mr-2" />;
  }
};

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const categories: ProjectCategory[] = ['Product', 'IoT', 'Robotics'];

  const filteredProjects = useMemo(() => {
    const filtered = selectedCategory
      ? projects.filter(project => project.category === selectedCategory)
      : projects;
    // return filtered.sort((a, b) => b.year - a.year);
    return filtered;
  }, [selectedCategory]);

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-black pixel-dots">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-xl pixel-text mb-8">PROJECTS</h1>
        <div className="mb-8">
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`pixel-button ${!selectedCategory ? 'bg-[#00e3b2] text-black' : ''} hover:bg-[#00e3b2] hover:text-black hover:border-white transition-colors flex items-center`}
            >
              <span className="text-sm">ALL</span>
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`pixel-button ${selectedCategory === category ? 'bg-[#00e3b2] text-black' : ''} hover:bg-[#00e3b2] hover:text-black hover:border-white transition-colors flex items-center`}
              >
                {getCategoryIcon(category)}
                <span className="text-xs">{category}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ProjectCard
                project={project}
                onClick={() => openModal(project)}
              />
            </motion.div>
          ))}
        </div>
      </div>
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </div>
  )
}

