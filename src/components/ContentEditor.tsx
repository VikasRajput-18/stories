// import JoditEditor from "jodit-react";
import { useTheme } from "next-themes";
import { useMemo, useRef } from "react";

type ContentEditorProps = {
  value: string;
  onChange: (value: string) => void;
};

const ContentEditor = ({ value, onChange }: ContentEditorProps) => {
  const editor = useRef(null);
  const { theme } = useTheme();

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: "Start typing...",
      theme: theme === "dark" ? "dark" : "default", // Toggle dark mode based on prop
      style: {
        background: theme === "dark" ? "#020817" : "#FFFFFF", // Background color for dark and light modes
        color: theme === "dark" ? "#fff" : "#000000", // Text color for dark and light modes
        border: "1px solid #020817",
        borderColor: theme === "dark" ? "#020817" : "#D8DEE9", // Border color for dark and light modes
        height: "300px",
        maxHeight: "300px",
      },
    }),
    [theme]
  );

  return (
    // <JoditEditor
    //   ref={editor}
    //   value={value}
    //   config={config}
    //   onBlur={(newContent) => onChange(newContent)}
    //   onChange={() => {}}
    // />
    <></>
  );
};

export default ContentEditor;
