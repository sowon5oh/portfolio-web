import { getTagInfo } from './utils'

export default function Tag({ tag }: { tag: string }) {
  const { icon: Icon } = getTagInfo(tag);

  return (
    <span 
      className="inline-flex items-center px-2 py-1 text-[10px] pixel-corners border border-white"
    >
      <Icon size={12} className="mr-1" />
      {tag}
    </span>
  );
}

