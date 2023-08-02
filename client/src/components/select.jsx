import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { SelectValueContext } from "./selectValueContext";
import styles from "./select.module.css";

const AnimatedSelect = ({ values }) => {
  const { selectedValue, setSelectedValue } = useContext(SelectValueContext);
  return (
    <div className={styles.wrapper}>
      {values.map((value) => (
        <button
          className={styles.button}
          key={value.id}
          onClick={() => setSelectedValue(value.id)}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {selectedValue === value.id && (
            <motion.div
              className={styles.styledMotionDiv}
              layoutId="bubble"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          {value.label}
        </button>
      ))}
    </div>
  );
};

export default AnimatedSelect;
