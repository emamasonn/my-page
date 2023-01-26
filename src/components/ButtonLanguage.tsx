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
        bg="#DD6B20"
        variant="solid"
        textTransform="uppercase"
        _hover={{
          bg: "#fb5407de",
        }}
        _active={{
          bg: "#fb5407de",
          transform: "scale(0.98)",
          borderColor: "#bec3c9",
        }}
      >
        {language}
      </Button>
    </Tooltip>
  );
};

export default ButtonLanguage;
