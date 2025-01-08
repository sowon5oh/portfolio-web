import { Project } from './types';

export const projects: Project[] = [
  {
    id: 1,
    titleKo: "자동차 금형 관리 시스템",
    titleEn: "Automotive Mold Management Tracker",
    description: "신뢰성 있는 프레스기 타수감지 알고리즘 및 금형 도난 방지 시스템",
    images: [
      { 
        src: "/project-images/mold-tracker-1.jpg", 
        alt: "mold-tracker-overview",
        description: "Sigfox 통신을 사용한 금형 도난 방지 및 모니터링 시스템"
      },
      { 
        src: "/project-images/mold-tracker-2.jpg", 
        alt: "mold-tracker-architecture",
        description: "nRF52, Sigfox Monarch Module, GNSS Module 적용 및 Sigfox Ready 인증 완료"
      },
      { 
        src: "/project-images/mold-tracker-3.gif", 
        alt: "mold-tracker-tracking",
        description: "Sigfox, GNSS 통신을 통한 위치 추적 및 모니터링 시스템"
      },
      { 
        src: "/project-images/mold-tracker-4.gif", 
        alt: "mold-tracker-stroke",
        description: "가속도 센서 데이터를 필터링하여 프레스기 타수 감지 알고리즘 개발"
      },
      { 
        src: "/project-images/mold-tracker-5.jpg", 
        alt: "mold-tracker-filter",
        description: "Python 기반의 타수감지 알고리즘 모니터링 프로그램 개발 및 사용"
      },
      { 
        src: "/project-images/mold-tracker-6.jpg", 
        alt: "mold-tracker-web",
        description: "사용자에게 제공되는 모니터링 웹페이지 연동 및 제품-웹 동작 시나리오 설계"
      }
    ],
    year: 2020,
    content: `
      <p>IoT 디바이스 개발 경험의 시작이 되는 프로젝트로, 현대자동차 1차 벤더의 금형 관리 시스템을 개발하였습니다. 자동차용 금형의 무단 반출 또는 도난 방지를 위하여, Sigfox 통신을 이용한 모니터링 시스템을 개발하였습니다.<br /><br />
      <p>특히 Sigfox 통신의 장/단점을 분석하여, 패킷 전송의 신뢰성을 보존하기 위해 다양한 해결 방안을 적용하였습니다. 금형 보관 방식등으로 인하여 디바이스 충전이 불가능했기 때문에, 제품 기대 수명을 만족시키기 위해 다양한 상황을 고려한 동작 시나리오를 설계 및 적용하였습니다.<br /><br />
      <p>Acc Sensor Data를 Filtering 하여 공장 내 프레스기 타수감지 알고리즘 개발하였고, 각 프레스기 모델 별로 조정 가능한 파라미터를 적용하여 98% 이상의 정확도를 만족하였습니다.</p>
    `,
    tags: ["nRF52", "Sigfox", "GNSS", "BLE", "Sensors"],
    category: 'IoT'
  },
  {
    id: 3,
    titleKo: "동산 담보 추적 및 모니터링 시스템 [기업/국민 은행]",
    titleEn: "Movable Collateral Asset Tracker",
    description: "국내 유일, 동산담보 대출 상용화 모니터링용 IoT 디바이스 개발",
    images: [
      { 
        src: "/project-images/asset-pro-1.jpg", 
        alt: "asset-pro-overview",
        description: "기업/신한/국민/부산 은행 등의 동산 담보 대출을 위한 IoT 디바이스 개발"
      },
      { 
        src: "/project-images/asset-pro-2.gif", 
        alt: "asset-pro-gif",
        description: "담보물 모니터링, 디바이스 무단 탈착 방지, 도난 방지, 위치 추적 모니터링 기능 구현"
      },
      { 
        src: "/project-images/asset-pro-3.jpg", 
        alt: "asset-pro-feature-test",
        description: "PyQT를 활용한 기능 설계 검증 및 테스트 프로그램 개발 및 사용"
      }      ,
      { 
        src: "/project-images/asset-pro-4.jpg", 
        alt: "asset-pro-scenario",
        description: "자사 플랫폼 연동 및 안정성과 신뢰성을 고려한 제품 동작 시나리오 설계 및 개발"
      }
    ],
    year: 2022,
    content: `
      <p>부동산이 아닌 움직이는 자산 동산을 담보물로 대출 승인을 받을 수 있도록 각종 센서 데이터와 위치 정보를 모니터링하는 서비스를 개발하였습니다. 특히 국내에서 최초로 Nordic Semiconductor의 nRF9160 IC를 양산에 적용한 프로젝트로, 다양한 시행착오를 통해 깊이 있는 개발 경험을 쌓을 수 있었습니다.<br /><br />
      <p>은행 상품에 사용되는 디바이스인 만큼, 담보물의 도난/이동/가동상태 등을 정확하게 판별할 수 있도록 신뢰성 높은 펌웨어를 개발하였습니다.</p>
      <p>ALS, Accelerometer, Magnetometer 등의 센서 데이터를 통해 각종 이벤트를 판별하여 최종적으로 담보물의 상태를 판별하는 알고리즘을 개발하였습니다.<br /><br />
      <p>LG U+ 망연동 인증을 완료하여 국내 통신 망에서 서비스를 제공할 수 있으며, 타사 동산담보 관리용 IoT 디바이스 대비 뛰어난 성능과 서비스로 현재 국내 대부분의 동산담보대출 상품에 적용되고 있습니다.</p>
    `,
    tags: ["nRF52", "nRF91", "FreeRTOS", "LTE", "GNSS", "BLE", "Sensors"],
    category: 'IoT'
  },
  {
    id: 7,
    titleKo: "초소형 철새 및 야생동물 추적기",
    titleEn: "Ultra-compact Migratory Bird and Wildlife Tracker",
    description: "Zephyr OS 기반의 GNSS 위치 추적 및 Global LTE 통신 기능 개발",
    images: [
      { 
        src: "/project-images/wild-tracker-1.jpg", 
        alt: "wild tracker-overview",
        description: "초소형/초저전력의 철새 및 야생동물 위치추적기 개발"
      },
      { 
        src: "/project-images/wild-tracker-2.jpg", 
        alt: "wild tracker-demo",
        description: "한국/일본 로밍 테스트 완료 및 철새 추적 시운전 준비 중"
      }
    ],
    year: 2024,
    content: `
      <p>Zephyr OS를 기반으로 Custom Device Driver, Device Tree 등의 하드웨어 추상화를 고려한 펌웨어를 개발하였습니다.<br /><br />
      <p>Ublox의 LTE Cat.1 통신 모듈을 사용하여, Global Roaming 통신 기능을 구현하였으며, 각종 센서를 통해 주변 환경정보와 GNSS 위치 데이터를 수집할 수 있습니다. 현재 연구/기타 목적의 야생동물 추적 시스템과 연동하여 시운전 진행중입니다.</p>
    `,
    tags: ["nRF52", "Zephyr", "LTE", "GNSS", "BLE", "Sensors"],
    category: 'IoT'
  },
  {
    id: 2,
    titleKo: "사회적 약자를 위한 전동 흡입 칫솔 및 전동 칫솔",
    titleEn: "Electric Suction Toothbrush for the disabled and the elderly",
    description: "스타트업 설립 후, 제품 기획/개발 및 양산의 전 과정에 참여한 제품 개발 프로젝트",
    images: [
      { 
        src: "/project-images/suction-toothbrush-1.jpg", 
        alt: "suction-toothbrush-g100", 
        description: "거동이 불편한 장애인, 노인 등을 위한 양칫물 흡입이 가능한 석션 칫솔 최초 개발"
      },
      { 
        src: "/project-images/suction-toothbrush-2.gif", 
        alt: "suction-toothbrush-suction", 
        description: "음파 진동, APP 연동, 펌웨어 업데이트 기능 등이 포함된 전동 석션 칫솔"
      },
      { 
        src: "/project-images/suction-toothbrush-3.jpg", 
        alt: "suction-toothbrush-models", 
        description: "국내 사회복지 기관 기부 지원 및 신제품 킥스타터 프로젝트 추진"
      },
      { 
        src: "/project-images/suction-toothbrush-4.jpg", 
        alt: "suction-toothbrush-app", 
        description: "BLE 통신을 통한 스마트폰 앱 연동, 양치 강도 분석 등 다양한 기능 구현"
      }
    ],
    year: 2015,
    content: `
      <p>첫번째 실무 프로젝트로, 거동이 불편한 사회적 약자를 위한 전동 흡입 칫솔을 개발하였습니다. 스타트업 특성 상, 제품 기획부터 양산까지 전 과정에 참여하며 제품 개발의 전 과정에 대해 깊이 이해하게 되었습니다.</p>
      <p>제품 디자인, 기구 설계, 회로 설계, 펌웨어 개발, 제조 및 품질 관리까지 전반적인 프로젝트를 리딩하였습니다.<br /><br />
      <p>리튬 배터리로 동작하는 충전식 전동칫솔로, 내부의 Water Pump를 이용하여 구강 내부 양칫물을 흡입할 수 있습니다. 특수 목적의 제품이다 보니, 보호자가 사용하기 편리한 제품 구조를 개발하기 위해 많은 고민을 하고, 다양한 시제품을 거쳐왔습니다.<br /><br />
      <p>전동 석션칫솔 개발 경험을 바탕으로, 구강건강 관리 대상에서 소외되었던 노인 및 애완동물을 위한 다양한 전동칫솔을 기획/개발하였습니다.</p>
      <p>자사 APP과 통신할 수 있도록 Protocol을 정의하고, 외주 개발사와 협업하여 APP 연동을 완료하였습니다.</p>
    `,
    tags: ["nRF52", "BLE", "Motor", "Disabled"],
    category: 'Product'
  },
  {
    id: 4,
    titleKo: "스마트무기고, 스마트빌딩, 강남구청 맨홀 수위감지 시스템",
    titleEn: "Smart Warehouse, Smart Building System",
    description: "대형 병원, 빌딩, 아파트 및 경찰서 무기고 등의 누수/화재감지/출입 감지 등의 시설 관리 디바이스 개발",
    images: [
      { 
        src: "/project-images/smart-sensor-1.jpg", 
        alt: "로봇 프로토타입",
        description: "강남구청 일대 침수 모니터링용 수위 감지 디바이스 개발 및 설치"
      },
      { 
        src: "/project-images/smart-sensor-2.jpg", 
        alt: "smart-sensor-manhole",
        description: "아파트, 대형 빌딩, 충북대 병원 등의 시설 관리용 디바이스 개발 및 설치"
      }
    ],
    year: 2023,
    content: `
      <p>주요 시설에서의 환경 데이터를 모니터링하고 관리 효율성을 높이기 위한 스마트 디바이스를 설계 및 개발하였습니다. 온도, 습도, 누수 감지 등 주요 환경 데이터를 수집할 수 있으며, 클라우드 서버의 관리 시스템과 연동하여 모니터링 및 관제 서비스를 제공합니다.<br /><br />
      <p>현재 대학병원, 경찰청, 아파트 및 대형 빌딩, 강남구청 등 주요 시설에 설치되어 환경 모니터링 및 관제 서비스를 제공하고 있습니다.</p>
    `,
    tags: ["nRF52", "nRF91", "FreeRTOS", "LTE", "GNSS", "BLE", "Sensors"],
    category: 'IoT'
  },
  {
    id: 5,
    titleKo: "사물/산악 수색견 추적 및 차량 관제 시스템",
    titleEn: "Object/Mountain Search Dog Tracking and Vehicle Monitoring System",
    description: "위치 추적 기반, App/Web 플랫폼과 연동되는 모니터링 및 관제 디바이스 개발",
    images: [
      { 
        src: "/project-images/object-tracker-1.jpg", 
        alt: "object-tracker-overview",
        description: "실시간 위치 추적 기반, 각종 환경의 관제용 디바이스 개발"
      },
      { 
        src: "/project-images/object-tracker-2.jpg", 
        alt: "object-tracker-vehicle",
        description: "차량 OBD-II Protocol 기반, 차량 상태 정보 모니터링 및 차량 관제 서비스 개발 및 일본 데모 진행"
      }
    ],
    year: 2023,
    content: `
      <p>SLAM과 컴퓨터 비전을 활용한 실내 자율주행 배송 로봇입니다.</p>
      <h3>주요 기능</h3>
      <ul>
        <li>실시간 SLAM</li>
        <li>장애물 회피</li>
        <li>최적 경로 계획</li>
      </ul>
    `,
    tags: ["nRF52", "nRF91", "FreeRTOS", "LTE", "GNSS", "BLE", "Sensors"],
    category: 'IoT'
  },
  {
    id: 6,
    titleKo: "재활용 플라스틱 순도 측정 기기 프로토타입",
    titleEn: "Recycled Plastic Purity Measurement Prototype",
    description: "플라스틱 재활용 솔루션을 위한 플라스틱 순도 측정 프로토타입 펌웨어 개발",
    images: [
      { 
        src: "/project-images/repla-proto-1.jpg", 
        alt: "로봇 프로토타입",
        description: "Prototype of the device used for measuring plastic purity."
      }
    ],
    year: 2023,
    content: `
      <p>STM32 MCU 기반의 프로토타입 펌웨어 개발을 진행하였습니다. </p>
      <p>서보 모터를 이용하여 플라스틱 이동 컨베이어 벨트 동작을 구현하였으며, Uart Serial 통신을 이용하여 분석용 MMI PC Program과 연동하였습니다.</p>
    `,
    tags: ["STM32", "Serial"],
    category: 'Robotics'
  }
];

