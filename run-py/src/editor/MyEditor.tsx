import { useState } from "react";

export default function MyEditor() {
  const [code, setCode] = useState("// Start typing your code here...");

  return (
    <div className="flex flex-col h-full w-full bg-gray-900 text-white p-4 rounded-2xl shadow-lg">
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        spellCheck={false}
        className="w-full h-full resize-none bg-gray-800 text-sm font-mono text-white p-4 rounded-xl outline-none border border-gray-700 focus:ring-2 focus:ring-cyan-500"
      />
    </div>
  );
}
