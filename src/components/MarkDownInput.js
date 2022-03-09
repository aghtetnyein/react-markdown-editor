import React, { useContext } from "react";

const MarkDownInput = ({ markdownText, onChangeMarkdownText }) => {
  return (
    <textarea
      className="w-full resize-none border-none outline-none bg-primary_white backdrop-blur bg-opacity-50 rounded-xl py-6 px-8 text-md"
      style={{
        height: `calc(${window.innerHeight}px - 4rem)`,
        fontFamily: `source-code-pro, Menlo, Monaco, Consolas, "Courier New",
        monospace`,
      }}
      onChange={(e) => onChangeMarkdownText(e.target.value)}
    />
  );
};

export default MarkDownInput;
