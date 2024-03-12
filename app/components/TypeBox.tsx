"use client";
import { useState, useEffect, useRef } from "react";

const placeholderText = `good give eye these without move life also part even what who high much present mean man little to open school mean there see few these no there real keep which more state govern from just look at`;

const TypeBox = () => {
  const [typedText, setTypedText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentText = event.target.value;
    setTypedText(currentText);
  };

  const getHighlightedText = () => {
    return placeholderText.split("").map((char, index) => {
      let colorClass;
      if (index < typedText.length) {
        colorClass = char === typedText[index] ? "text-white" : "text-red-500";
      } else {
        colorClass = "text-gray-400";
      }
      return (
        <span key={index} className={colorClass}>
          {char}
        </span>
      );
    });
  };

  return (
    <div>
      <div className="mb-4 text-2xl font-mono">{getHighlightedText()}</div>
      <input
        ref={inputRef}
        type="text"
        className="opacity-0 absolute w-0 h-0"
        onChange={handleChange}
        value={typedText}
        aria-label="Type the text here"
      />
    </div>
  );
};

export default TypeBox;
