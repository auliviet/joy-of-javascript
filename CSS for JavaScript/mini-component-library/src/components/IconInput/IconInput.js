import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    fontSize: 14,
    height: 24,
    stroke: 1,
    iconSize: 16,
  },
  large: {
    fontSize: 18,
    height: 36,
    stroke: 2,
    iconSize: 24,
  },
};
const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const style = SIZES[size];

  return (
    <Wrapper>
      <InputIcon
        id={icon}
        size={style.iconSize}
        strokeWidth={style.stroke}
      ></InputIcon>
      <Input
        placeholder={placeholder}
        style={{
          "--width": width + "px",
          "--fontSize": style.fontSize + "px",
          "--height": style.height + "px",
          "--border": style.stroke + "px",
        }}
      ></Input>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const Input = styled.input`
  appearance: none;
  width: var(--width);
  height: var(--height);
  padding-left: var(--height);
  font-size: var(--fontSize);
  font-weight: bold;
  color: ${COLORS.gray700};
  border: none;
  border-bottom: var(--border) solid ${COLORS.black};

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: normal;
  }

  &:hover {
    color: ${COLORS.black};
  }

  &:focus {
    outline-offset: 2px;
  }
`;

const InputIcon = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  height: fit-content;
  margin: auto;
  pointer-events: none;
  color: ${COLORS.gray700};

  ${Wrapper}:hover > & {
    color: ${COLORS.black};
  }
`;

export default IconInput;
