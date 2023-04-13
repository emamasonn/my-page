import { Box, CircularProgress, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Markdown from "markdown-to-jsx";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Code from "../components/markdown/Code";
import TitleH3 from "../components/markdown/TitleH3";
import TitleH5 from "../components/markdown/TitleH5";
import Note from "../components/markdown/Note";
import UnorderedList from "../components/markdown/UnorderedList";
import Section from "../components/markdown/Section";
import TitleH1 from "../components/markdown/TitleH1";
import MainImage from "../components/markdown/MainImage";

import Image from "../components/markdown/Image";
import { I18nProviderContext } from "../intl/IntlProvider";

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
    Image: {
      component: Image,
    },
  },
};

const Post = () => {
  const { key } = useParams();
  const [markdown, setMarkdown] = useState<string>();
  const [isLoading, setIsLoading] = useState<"loading" | "error" | "success">(
    "loading"
  );
  const { language } = useContext(I18nProviderContext);

  useEffect(() => {
    setIsLoading("loading");
    import(`../posts/${key}-${language}.md`)
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
      .catch((err) => {
        console.log(err);
        setIsLoading("error");
      });
  }, [key, language]);

  if (isLoading === "loading") {
    return (
      <Flex justifyContent="center" alignItems="center" h="200px">
        <CircularProgress isIndeterminate color="#fb5607" />
      </Flex>
    );
  }

  if (isLoading === "error") {
    return (
      <Flex justifyContent="center" alignItems="center">
        An error occurred while loading the post.
      </Flex>
    );
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
