import React, { useContext } from "react";
import { Button, Tooltip } from "@chakra-ui/react";
import { I18nProviderContext } from "../intl/IntlProvider";

const ButtonLanguage = () => {
  const { language, changeLanguage } = useContext(I18nProviderContext);

  return (
    <Tooltip label="Change the language" hasArrow>
      <Button
        onClick={() => changeLanguage(language === "es" ? "en" : "es")}
        size={["xs"]}
        bg="#fc0283"
        variant="solid"
        textTransform="uppercase"
        _hover={{
          bg: "#fc0283",
        }}
        _active={{
          bg: "#fc0283",
          transform: "scale(0.98)",
        }}
      >
        {language}
      </Button>
    </Tooltip>
  );
};

export default ButtonLanguage;
