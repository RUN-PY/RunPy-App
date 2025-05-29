import React, { useState } from "react";
import { 
  Play, 
  File, 
  Search, 
  GitBranch, 
  Bug, 
  Package, 
  Settings,
  ChevronDown,
  ChevronRight,
  FolderOpen,
  Folder,
  X,
  Plus,
  Menu
} from "lucide-react";

export default function App() {
  const [code, setCode] = useState('console.log("Here I can see my result :)")');
  const [output, setOutput] = useState('Here I can see my result :)');
  const [isRunning, setIsRunning] = useState(false);
  const [explorerOpen, setExplorerOpen] = useState(true);
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { name: "code.js", path: "//code", modified: false },
    { name: "preview.txt", path: "//preview", modified: true }
  ];

  const runCode = async () => {
    setIsRunning(true);
    setTimeout(() => {
      if (code.includes('console.log')) {
        const match = code.match(/console\.log\(["'](.*)["']\)/);
        setOutput(match ? match[1] : "Here I can see my result :)");
      } else {
        setOutput("Code executed successfully!");
      }
      setIsRunning(false);
    }, 1000);
  };

  return (
    <div className="h-screen w-screen bg-[#1e1e1e] text-[#d4d4d4] font-mono flex flex-col overflow-hidden">
      {/* Title Bar */}
      <div className="h-8 bg-[#323233] flex items-center justify-between px-2 text-xs border-b border-[#2d2d2d]">
        <div className="flex items-center gap-2">
          <Menu className="w-4 h-4 text-[#cccccc]" />
          <span className="text-[#cccccc]">Visual Studio Code</span>
        </div>
        <div className="flex items-center gap-1">
          <button className="w-8 h-6 flex items-center justify-center hover:bg-[#404040] text-white">_</button>
          <button className="w-8 h-6 flex items-center justify-center hover:bg-[#404040] text-white">□</button>
          <button className="w-8 h-6 flex items-center justify-center hover:bg-[#e81123] hover:text-white text-white">×</button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Activity Bar */}
        <div className="w-12 bg-[#333333] flex flex-col border-r border-[#2d2d2d]">
          {[
            { icon: File, active: true },
            { icon: Search, active: false },
            { icon: GitBranch, active: false },
            { icon: Bug, active: false },
            { icon: Package, active: false }
          ].map((item, i) => (
            <button
              key={i}
              className={`h-12 flex items-center justify-center hover:bg-[#2a2d2e] ${
                item.active ? 'bg-[#37373d] border-l-2 border-[#007acc]' : ''
              }`}
            >
              <item.icon className="w-6 h-6 text-[#cccccc]" />
            </button>
          ))}
          <div className="flex-1" />
          <button className="h-12 flex items-center justify-center hover:bg-[#2a2d2e]">
            <Settings className="w-5 h-5 text-[#cccccc]" />
          </button>
        </div>

        {/* Side Panel */}
        {explorerOpen && (
          <div className="w-64 bg-[#252526] border-r border-[#2d2d2d] flex flex-col">
            <div className="h-9 flex items-center justify-between px-3 text-xs font-semibold text-[#cccccc] bg-[#2d2d2d]">
              <span>EXPLORER</span>
              <button onClick={() => setExplorerOpen(false)}>
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="flex-1 p-2">
              <div className="flex items-center gap-1 text-xs font-semibold text-[#cccccc] mb-2">
                <ChevronDown className="w-4 h-4" />
                <FolderOpen className="w-4 h-4 text-[#dcb67a]" />
                <span>EVOREN-CODE</span>
              </div>
              <div className="ml-4 space-y-1">
                <div className="flex items-center gap-1 text-xs hover:bg-[#2a2d2e] px-1 py-0.5 rounded cursor-pointer">
                  <File className="w-4 h-4 text-[#519aba]" />
                  <span>code.js</span>
                </div>
                <div className="flex items-center gap-1 text-xs font-semibold text-[#cccccc] mt-4 mb-2">
                  <ChevronRight className="w-4 h-4" />
                  <Folder className="w-4 h-4 text-[#dcb67a]" />
                  <span>snippets</span>
                </div>
                <div className="flex items-center gap-1 text-xs font-semibold text-[#cccccc] mt-2 mb-2">
                  <ChevronRight className="w-4 h-4" />
                  <Folder className="w-4 h-4 text-[#dcb67a]" />
                  <span>packages</span>
                </div>
                <div className="flex items-center gap-1 text-xs font-semibold text-[#cccccc] mt-2 mb-2">
                  <ChevronRight className="w-4 h-4" />
                  <Folder className="w-4 h-4 text-[#dcb67a]" />
                  <span>AIML</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main Editor Area */}
        <div className="flex-1 flex flex-col">
          {/* Tab Bar */}
          <div className="h-9 bg-[#2d2d2d] flex items-center border-b border-[#2d2d2d]">
            {tabs.map((tab, i) => (
              <div
                key={i}
                className={`h-full flex items-center gap-2 px-3 text-xs cursor-pointer border-r border-[#2d2d2d] ${
                  activeTab === i ? 'bg-[#1e1e1e] text-white' : 'text-[#969696] hover:text-white'
                }`}
                onClick={() => setActiveTab(i)}
              >
                <File className="w-4 h-4" />
                <span>{tab.name}</span>
                {tab.modified && <div className="w-2 h-2 rounded-full bg-white" />}
                <X className="w-4 h-4 hover:bg-[#4c4c4c] rounded" />
              </div>
            ))}
            <button className="h-full px-2 hover:bg-[#37373d]">
              <Plus className="w-4 h-4 text-[#cccccc]" />
            </button>
          </div>

          {/* Editor Content */}
          <div className="flex-1 flex">
            {/* Code Editor */}
            <div className="flex-1 flex flex-col bg-[#1e1e1e]">
              <div className="flex-1 relative">
                <textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full h-full bg-transparent text-[#d4d4d4] p-4 resize-none outline-none font-mono text-sm leading-relaxed"
                  style={{ tabSize: 2 }}
                  spellCheck={false}
                />
                {/* Line numbers would go here in a real implementation */}
              </div>
              
              {/* Status Bar */}
              <div className="h-6 bg-[#007acc] flex items-center justify-between px-4 text-xs text-white">
                <div className="flex items-center gap-4">
                  <span>JavaScript</span>
                  <span>UTF-8</span>
                  <span>LF</span>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={runCode}
                    disabled={isRunning}
                    className="flex items-center gap-1 px-2 py-0.5 bg-[#0e639c] hover:bg-[#1177bb] rounded text-xs transition-colors"
                  >
                    <Play className="w-3 h-3" />
                    {isRunning ? 'Running...' : 'Run'}
                  </button>
                  <span>Ln 1, Col 1</span>
                </div>
              </div>
            </div>

            {/* Preview Panel */}
            <div className="w-1/2 bg-[#1e1e1e] border-l border-[#2d2d2d] flex flex-col">
              <div className="h-9 bg-[#2d2d2d] flex items-center px-3 text-xs text-[#cccccc] border-b border-[#2d2d2d]">
                <span>Preview</span>
              </div>
              <div className="flex-1 p-4">
                <div className="bg-[#0c0c0c] border border-[#2d2d2d] rounded p-4 h-full overflow-auto font-mono text-sm">
                  <div className="text-[#569cd6] mb-2">Output:</div>
                  <div className="text-[#4ec9b0]">
                    {output || "Run your code to see output..."}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}