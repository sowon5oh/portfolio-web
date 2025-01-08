import { getTagInfo } from './utils'

interface TagProps {
  tag: string;
}

export default function Tag({ tag }: TagProps) {
  const { icon: TagIcon } = getTagInfo(tag);
  return (
    <span 
      className="inline-flex items-center px-2 py-1 text-[10px] pixel-corners border border-white"
    >
      <TagIcon size={12} className="mr-1" />
      {tag}
    </span>
  );
}

