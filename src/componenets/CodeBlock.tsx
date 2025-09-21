import { CopyBlock, dracula } from "react-code-blocks";

type CodeBlockProps = {
  code: string;
  showLineNumbers?: boolean;
};

function PythonCodeBlock({ code, showLineNumbers = true }: CodeBlockProps) {
  return (
    <CopyBlock
      text={code}
      language="python"
      showLineNumbers={showLineNumbers}
      theme={dracula}
    />
  );
}

export default PythonCodeBlock;
