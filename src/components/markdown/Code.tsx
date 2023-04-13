import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import CopyToClipboard from "react-copy-to-clipboard";
import { Box, Button } from "@chakra-ui/react";
import { useCallback, useState } from "react";

type TCodeProps = {
  children: string;
  language: string;
  enableCopyToClipboard?: boolean;
  showLineNumbers: boolean;
};

const Code = ({
  children,
  language,
  enableCopyToClipboard = true,
  showLineNumbers,
}: TCodeProps) => {
  const [copy, setCopy] = useState(false);

  const handleCopy = useCallback(() => {
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 1500);
  }, []);

  return (
    <Box position="relative" borderRadius="20px">
      {enableCopyToClipboard && (
        <CopyToClipboard text={children} onCopy={() => handleCopy()}>
          <Button
            colorScheme="teal"
            size="xs"
            position="absolute"
            zIndex={1}
            right="8px"
            top="8px"
          >
            {copy ? "Copied" : "Copy"}
          </Button>
        </CopyToClipboard>
      )}
      <SyntaxHighlighter
        language={language}
        style={materialDark}
        customStyle={{ borderRadius: "6px", margin: "30px 0" }}
        showLineNumbers={showLineNumbers}
      >
        {children}
      </SyntaxHighlighter>
    </Box>
  );
};

export default Code;
