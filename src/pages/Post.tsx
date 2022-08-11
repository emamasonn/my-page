import { Box } from "@chakra-ui/react";
import Markdown from "markdown-to-jsx";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Code from "../components/Code";

const options = {
  overrides: {
    Code: {
      component: Code,
    },
  },
};

const Post = () => {
  const { key } = useParams();
  const [markdown, setMarkdown] = useState<string>();

  useEffect(() => {
    import(`../posts/${key}.md`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setMarkdown(res))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  });

  if (!markdown) {
    return <>Not Post</>;
  }

  return (
    <Box>
      <Markdown options={options}>{markdown}</Markdown>
    </Box>
  );
};

export default Post;
