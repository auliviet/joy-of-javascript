import styled from "styled-components";

import { COLORS } from "./constants";

const Button = ({ variant, size, children }) => {
  let baseSize = "1rem";
  switch (size) {
    case "small":
      baseSize = ".75rem";
      break;
    case "large":
      baseSize = "1.5rem";
      break;
    default:
      baseSize = "1rem";
      break;
  }
  switch (variant) {
    case "fill":
      return (
        <FillButton style={{ "--base-size": size }}>{children}</FillButton>
      );

    case "outline":
      return (
        <OutlineButton style={{ "--base-size": size }}>
          {children}
        </OutlineButton>
      );

    case "ghost":
      return (
        <GhostButton style={{ "--base-size": size }}>{children}</GhostButton>
      );

    default:
      break;
  }
};

const BaseButton = styled.button`
  text-transform: uppercase;
  font-size: var(--base-size);
  line-height: 1.5em;
  padding: 8px 20px;
  border: none;
  border-radius: 4px;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline-offset: 2px;
    outline: 2px solid ${COLORS.primary};
  }
`;

const FillButton = styled(BaseButton)`
  background-color: ${COLORS.primary};
  color: ${COLORS.white};

  &:hover {
    background-color: ${COLORS.primaryLight};
  }
`;

const OutlineButton = styled(BaseButton)`
  background-color: ${COLORS.white};
  color: ${COLORS.primary};
  border: 2px solid ${COLORS.primary};

  &:hover {
    background-color: ${COLORS.offwhite};
  }
`;

const GhostButton = styled(BaseButton)`
  background-color: ${COLORS.white};
  color: ${COLORS.transparentGray75};

  &:hover {
    background-color: ${COLORS.transparentGray15};
    color: ${COLORS.black};
  }

  &:focus {
    outline: 2px solid ${COLORS.transparentGray75};
  }
`;

export default Button;
