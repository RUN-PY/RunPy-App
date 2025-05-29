import Sidebar from "./Sidebar";
import MyEditor from "../editor/MyEditor";
import Preview from "../components/Preview";

export default function EditorLayout() {
  return (
    <div className="flex h-screen bg-gray-950 text-white">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <div className="h-10 bg-gray-900 border-b border-gray-800 flex items-center px-4 text-sm space-x-4">
          <div className="text-gray-300">//code</div>
          <button className="text-xl font-bold text-gray-400 hover:text-white">+</button>
        </div>
        <div className="flex flex-grow">
          <div className="w-1/2 p-4 border-r border-gray-800">
            <MyEditor />
          </div>
          <div className="w-1/2 p-4">
            <Preview />
          </div>
        </div>
      </div>
    </div>
  );
}
