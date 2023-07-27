import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { styled } from "styled-components";
import { SelectValueContext } from "./selectValueContext";

const AnimatedSelect = ({ values }) => {
  const { selectedValue, setSelectedValue } = useContext(SelectValueContext);
  return (
    <Wrapper>
      {values.map((value) => (
        <Button
          key={value.id}
          onClick={() => setSelectedValue(value.id)}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {selectedValue === value.id && (
            <StyledMotionSpan
              layoutId="bubble"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          {value.label}
        </Button>
      ))}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  background: #f5f5f5;
  padding: 8px;
  border-radius: 6px;
`;

const Button = styled.button`
  border-radius: 6px;
  position: relative;
  padding: 0.375rem 0.75rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition: color 0.2s;
  transition-property: color, background-color, border-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 250ms;
  &:focus-visible {
    outline: 2px solid transparent;
  }
  &:hover {
    color: black;
  }
  font-size: large;
`;

const StyledMotionSpan = styled(motion.span)`
  position: absolute;
  inset: 0;
  z-index: 10;
  background: white;
  mix-blend-mode: difference;
  border-radius: 6px;
  border-width: 3px;
`;

export default AnimatedSelect;
