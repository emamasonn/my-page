import {
  ListItem,
  UnorderedList as UnorderedListChakra,
} from "@chakra-ui/react";
import React, { useCallback, useMemo } from "react";

type TTitleH5Props = {
  items: string;
};

const UnorderedList = ({ items }: TTitleH5Props) => {
  const parsedItems = JSON.parse(items);

  const e = useCallback((s: string[] | string): any => {
    let result = [];
    for (let i = 0; i < s.length; i++) {
      if (typeof s[i] === "string") {
        result.push(<ListItem key={s[i]}>{s[i]}</ListItem>);
      }
      if (typeof s[i] === "object") {
        result.push(
          <UnorderedListChakra key={`${i}`}>{e(s[i])}</UnorderedListChakra>
        );
      }
    }
    return result;
  }, []);

  const elements = useMemo(() => e(parsedItems), [parsedItems, e]);

  if (typeof parsedItems !== "object") {
    return <>The items is not correct type.</>;
  }

  return (
    <UnorderedListChakra fontSize={["md", "lg", "xl"]}>
      {elements}
    </UnorderedListChakra>
  );
};

export default UnorderedList;
