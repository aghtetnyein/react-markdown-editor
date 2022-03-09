import React, { useState } from "react";

// components
import MarkDownInput from "./components/MarkDownInput";
import MarkDownResult from "./components/MarkDownResult";

const App = () => {
  const [markdownText, setMarkdownText] = useState("");

  const onChangeMarkdownText = (newValue) => {
    setMarkdownText(newValue);
  };

  return (
    <div className="w-screen h-screen bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1773&q=80')]">
      <div className="grid grid-cols-2 gap-8 p-8">
        <MarkDownInput
          markdownText={markdownText}
          onChangeMarkdownText={onChangeMarkdownText}
        />
        <MarkDownResult markdownText={markdownText} />
      </div>
    </div>
  );
};

export default App;
