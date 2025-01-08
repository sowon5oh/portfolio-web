'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Linkedin, GitlabIcon as GitHub, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

interface Skill {
  category: string;
  items: string[];
}

interface Profile {
  name: string;
  role: string;
  image: string;
  description: string;
}

interface JourneyItem {
  year: string;
  event: string;
  description?: string;
}

const profile: Profile = {
  name: "오소원: Sowon Oh",
  role: "Embedded Firmware Engineer",
  image: "/profile.jpg",
  description: "제조업과 스타트업에서 다양한 제품의 기획 설계, 개발, 양산까지 주도적으로 참여하며 제품 개발 전 과정을 직접 경험하고 성장한 **펌웨어 개발자**입니다.\n\n" +
    "이러한 경험을 바탕으로 **IoT 디바이스 및 플랫폼 회사에서도 핵심적인 역할을 맡아 펌웨어 개발**을 주도적으로 이끌어 왔습니다. 빠른 속도의 개발 로드맵에 익숙해지다 보니 항상 새로운 기술과 만남을 유연하게 받아들이는 스타일을 가지고 있습니다. 특히 빠르게 배우고 적응하는 것은 제 자신 있는 부분 중 하나입니다.\n" +
    "항상 친근한 동료가 되고자 하며, 팀과 함께 목표를 이루는 순간에 가장 큰 보람을 느낍니다. 물론, 스타트업 환경에서 쌓아온 경험 덕분에 독립적으로 일하며 폭발적인 집중력을 통해 빠른 결과를 도출하는 것에도 자신 있습니다.\n\n" +
    "개발은 누구나 할 수 있다고 생각합니다. 다만, **그것을 즐기고 확실한 성과를 만들어 낼 수 있는 방안을 고민하는 것이 진정한 도전**이라고 생각합니다. 저는 일에 대해 많은 고민을 하고, 일을 사랑하는 스타일이기에 항상 사명감을 가지고 임해왔습니다. 프로젝트를 완성해 나가는 과정을 단순한 작업이 아니라, 더 멋진 사람이 되기 위한 끊임없는 도전과 성장의 기회로 삼고 싶습니다.\n\n" +
    "현재는 **로보틱스와 AI 분야**에 깊은 관심을 가지고 있으며, 앞으로 이 분야에서 더 많은 펌웨어 개발 경험을 쌓고, 제 능력을 확장시켜 나가고 싶습니다.",
};

const skills: Skill[] = [
  {
    category: "Programming Languages",
    items: ["C", "Python"]
  },
  {
    category: "Embedded Systems",
    items: ["ARM Cortex-M", "nRF52", "nRF91", "STM32"]
  },
  {
    category: "Operating Systems",
    items: ["FreeRTOS", "Zephyr RTOS"]
  },
  {
    category: "IoT Protocols",
    items: ["BLE", "LTE-CAT.M1", "LTE-CAT.1", "NB-IoT", "Sigfox"]
  },
  {
    category: "Tools & Technologies",
    items: ["Git", "JIRA", "Confluence"]
  },
  {
  category: "Soft Skills",
  items: ["TOEIC Speaking IH", "Excellent technical documentation skills"]
  },
];

const journeyItems: JourneyItem[] = [
  { year: "2020 - 현재", event: "C&Tech 선임/책임연구원 근무", description: "다양한 IoT 디바이스의 펌웨어를 개발하고 상용 서비스를 성공적으로 출시." },
  { year: "2017", event: "서울과학기술대학교 전기정보공학 학사학위 취득", description: "실무 경험과 병행하여 학업을 꾸준히 이어가며 전공 지식을 심화하고 학위를 취득."  },
  { year: "2016", event: "Bluereo Inc. - 사명 변경 및 법인전환, 연구개발팀 담당", description: "제품 양산을 본격적으로 시작하고, 다양한 사용자 환경을 고려한 구강관리 제품과 연동 가능한 앱 서비스 출시." },
  { year: "2015", event: "서울지역 대학 최고창업동아리 사업분야 대상 1위 입상", description: "미래창조 과학부, 중소기업청 공동 주최 대회 수상." },
  { year: "2015", event: "Bloreo - 스타트업 설립 멤버", description: "제조업 스타트업에서 제품 개발의 전 과정을 경험하며 기초 역량을 다짐. 제품 설계, 프로토타이핑, 양산까지 직접 참여." },
  { year: "2013", event: "서울과학기술대학교 전기정보공학과 입학" },
];

function ProfileCard({ profile }: { profile: Profile }) {
  const renderDescription = (text: string) => {
    return text.split(/(\*\*.*?\*\*)/).map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong 
            key={index} 
            className="text-[var(--accent-color)] font-bold"
          >
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6 mb-8">
      <div className="relative w-60 h-60 flex-shrink-0">
        <Image 
          src={profile.image}
          alt={`${profile.name} 프로필 사진`}
          fill
          className="object-cover rounded-full"
        />
      </div>
      <div className="flex-grow px-5">
        <h2 className="text-xl font-bold mb-2 text-white">{profile.name}</h2>
        <p className="text-[var(--accent-color)] text-sm mb-3">{profile.role}</p>
        <p className="text-gray-300 text-sm mb-4 whitespace-pre-wrap">
          {renderDescription(profile.description)}
        </p>
        <div className="flex space-x-4">
          <Link href="https://www.linkedin.com/in/sowon-oh" className="text-gray-400 hover:text-[var(--accent-color)] transition-colors">
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link href="https://github.com/sowon5oh" className="text-gray-400 hover:text-[var(--accent-color)] transition-colors">
            <GitHub className="w-5 h-5" />
          </Link>
          <Link href="mailto:sowon5oh@gmail.com" className="text-gray-400 hover:text-[var(--accent-color)] transition-colors">
            <Mail className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

function SkillsSection({ skills }: { skills: Skill[] }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <h2 className="text-xl pixel-text mb-8">SKILLS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skillCategory, index) => (
          <div key={index} className="pixel-card cursor-pointer hover:scale-[1.02] transition-transform duration-200">
            <div className="p-4 border-b-2 border-white">
              <h3 className="text-sm pixel-text mb-2 text-[var(--accent-color)]">{skillCategory.category}</h3>
            </div>
            <div className="p-4">
              <div className="flex flex-wrap gap-2">
                {skillCategory.items.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="inline-flex items-center px-2 py-1 text-[11px] pixel-corners border border-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function JourneySection({ journeyItems }: { journeyItems: JourneyItem[] }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="mb-12"
    >
      <h2 className="text-xl pixel-text mb-8">JOURNEY</h2>
      <div className="relative pl-8 border-l-2 border-[var(--accent-color)]">
        {journeyItems.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-8 relative"
          >
            <div className="absolute -left-[25px] w-4 h-4 bg-[var(--accent-color)]"></div>
            <div className="absolute -left-[17px] w-2 h-2 bg-black"></div>
            <div className="pixel-card p-4">
              <h3 className="text-sm pixel-text text-[var(--accent-color)] mb-2">{item.year}</h3>
              <h4 className="text-white text-sm font-bold mb-2">{item.event}</h4>
              {item.description && (
                <p className="text-gray-300 text-sm">{item.description}</p>
              )}
            </div>
            {index < journeyItems.length - 1 && (
              <div className="absolute left-[-25px] top-[32px] w-4 bg-[var(--accent-color)]" style={{height: 'calc(100% + 32px)'}}></div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default function About() {
  return (
    <div className="bg-black min-h-screen pixel-dots">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-xl pixel-text mb-8">ABOUT ME</h1>
          <ProfileCard profile={profile} />
        </motion.div>
        <SkillsSection skills={skills} />
        <JourneySection journeyItems={journeyItems} />
      </div>
    </div>
  )
}

