import { Box, CircularProgress, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Markdown from "markdown-to-jsx";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Code from "../components/Code";
import TitleH3 from "../components/TitleH3";
import TitleH5 from "../components/TitleH5";
import Note from "../components/Note";
import UnorderedList from "../components/UnorderedList";
import Section from "../components/Section";
import TitleH1 from "../components/TitleH1";
import MainImage from "../components/MainImage";

const options = {
  overrides: {
    Code: {
      component: Code,
    },
    h1: {
      component: TitleH1,
    },
    h3: {
      component: TitleH3,
    },
    h5: {
      component: TitleH5,
    },
    Note: {
      component: Note,
    },
    UnorderedList: {
      component: UnorderedList,
    },
    Section: {
      component: Section,
    },
    MainImage: {
      component: MainImage,
    },
  },
};

const Post = () => {
  const { key } = useParams();
  const [markdown, setMarkdown] = useState<string>();
  const [isLoading, setIsLoading] = useState<"loading" | "error" | "success">(
    "loading"
  );

  useEffect(() => {
    setIsLoading("loading");
    import(`../posts/${key}.md`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => {
            setMarkdown(res);
            setIsLoading("success");
          })
          .catch((err) => {
            console.log(err);
            setIsLoading("error");
          });
      })
      .catch((err) => console.log(err));
  }, [key]);

  if (isLoading === "loading") {
    return (
      <Flex justifyContent="center" alignItems="center" h="200px">
        <CircularProgress isIndeterminate color="#fb5607" />
      </Flex>
    );
  }

  if (isLoading === "error") {
    return <>An error occurred while loading the post.</>;
  }

  if (!markdown && isLoading === "success") {
    return <>Not Post.</>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
    >
      <Box>
        <Markdown options={options}>{markdown || ""}</Markdown>
      </Box>
    </motion.div>
  );
};

export default Post;
