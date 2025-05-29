import {
  PlayIcon,
  StopIcon,
  CodeBracketIcon,
  PuzzlePieceIcon,
  SparklesIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

const SidebarIcon = ({ Icon }: { Icon: React.ElementType }) => (
  <button className="p-3 hover:bg-gray-700 rounded-lg transition">
    <Icon className="h-6 w-6 text-gray-400" />
  </button>
);

export default function Sidebar() {
  return (
    <div className="flex flex-col items-center w-16 bg-gray-900 py-4 space-y-4 border-r border-gray-800">
      <SidebarIcon Icon={PlayIcon} />
      <SidebarIcon Icon={StopIcon} />
      <SidebarIcon Icon={CodeBracketIcon} />
      <SidebarIcon Icon={PuzzlePieceIcon} />
      <SidebarIcon Icon={SparklesIcon} />
      <div className="flex-grow" />
      <SidebarIcon Icon={Cog6ToothIcon} />
    </div>
  );
}
