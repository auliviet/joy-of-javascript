/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    height: 8,
    radius: 4,
    padding: 0,
  },
  medium: {
    height: 12,
    radius: 4,
    padding: 0,
  },
  large: {
    height: 24,
    radius: 8,
    padding: 4,
  },
};

const ProgressBar = ({ value, size }) => {
  const MIN = 0;
  const MAX = 100;
  const styles = SIZES[size];

  console.log(styles);

  if (value < MIN) {
    value = MIN;
  } else if (value > MAX) {
    value = MAX;
  }
  return (
    <Component
      role="progressbar"
      style={{
        "--padding": styles.padding + "px",
        "--radius": styles.radius + "px",
      }}
      aria-valuenow={value}
    >
      <ProgressWrapper>
        <Progress
          style={{
            "--progress": value + "%",
            "--height": styles.height + "px",
          }}
        ></Progress>
      </ProgressWrapper>
    </Component>
  );
};

const Component = styled.div`
  padding: var(--padding);
  border-radius: var(--radius);
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const ProgressWrapper = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
`;

const Progress = styled.div`
  background-color: ${COLORS.primary};
  width: var(--progress);
  height: var(--height);
`;

export default ProgressBar;
