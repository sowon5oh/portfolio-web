import { Cpu, Bluetooth, Wifi, Radio, Users, Usb, Code, Layers, Activity } from 'lucide-react';
import { LucideProps } from 'lucide-react';

type TagCategory = 'mcu' | 'os' | 'wan' | 'other';

export const getTagInfo = (tag: string): { icon: React.ComponentType<LucideProps>; category: TagCategory } => {
  const lowercaseTag = tag.toLowerCase();
  switch (lowercaseTag) {
    case 'nrf52':
    case 'nrf91':
    case 'stm32':
      return { icon: Cpu, category: 'mcu' };
    case 'freertos':
    case 'zephyr':
      return { icon: Layers, category: 'os' };
    case 'ble':
      return { icon: Bluetooth, category: 'other' };
    case 'sigfox':
    case 'lte':
      return { icon: Radio, category: 'wan' };
    case 'wifi':
      return { icon: Wifi, category: 'wan' };
    case 'disabled':
    case 'senior':
      return { icon: Users, category: 'other' };
    case 'motor':
    case 'sensors':
      return { icon: Activity, category: 'other' };
    case 'serial':
      return { icon: Usb, category: 'other' };
    default:
      return { icon: Code, category: 'other' };
  }
};

export const getCategoryColor = (category: TagCategory): string => {
  switch (category) {
    case 'mcu':
      return 'bg-red-700 text-red-100';
    case 'os':
      return 'bg-blue-700 text-blue-100';
    case 'wan':
      return 'bg-yellow-700 text-yellow-100';
    default:
      return 'bg-gray-700 text-gray-300';
  }
};

