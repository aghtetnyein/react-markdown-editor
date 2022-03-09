import React, { useContext } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const MarkDownResult = ({ markdownText }) => {
  return (
    <div>
      <div
        className="w-full bg-primary_black backdrop-blur bg-opacity-50 rounded-xl py-6 px-8 text-md overflow-auto text-white"
        style={{
          height: `calc(${window.innerHeight}px - 4rem)`,
          fontFamily: `source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace`,
        }}
      >
        <ReactMarkdown children={markdownText} remarkPlugins={[remarkGfm]} />
      </div>
    </div>
  );
};

export default MarkDownResult;
