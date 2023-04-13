import { motion } from "framer-motion";
import { useMemo } from "react";

type TButtonBurgerProps = {
  handleOpenMenu: () => void;
  isOpen: boolean;
};

const ButtonBurger = ({ handleOpenMenu, isOpen }: TButtonBurgerProps) => {
  const initial = {
    width: "40px",
    background: "linear-gradient(to left, #7928CA, #fc0283)",
    height: "3px",
    marginBottom: "8px",
  };

  const animate = useMemo(() => (isOpen ? "active" : "inactive"), [isOpen]);

  return (
    <motion.button
      onClick={() => handleOpenMenu()}
      initial={{
        background: "#0b192f",
        border: "unset",
        position: "absolute",
        zIndex: 30,
      }}
    >
      <motion.div
        initial={initial}
        variants={{
          active: {
            rotate: 135,
            translateY: 5,
          },
          inactive: {
            rotate: 0,
            translateY: 0,
          },
        }}
        animate={animate}
      />
      <motion.div
        initial={initial}
        variants={{
          active: {
            opacity: 0,
          },
          inactive: {
            opacity: 1,
          },
        }}
        animate={animate}
      />
      <motion.div
        initial={initial}
        variants={{
          active: {
            rotate: -135,
            translateY: -16,
          },
          inactive: {
            rotate: 0,
            translateY: 0,
          },
        }}
        animate={animate}
      />
    </motion.button>
  );
};

export default ButtonBurger;
