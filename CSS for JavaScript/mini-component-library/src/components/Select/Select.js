import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <SelectWrapper onChange={onChange}>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <CustomSelect>
        {displayedValue}
        <Chevron id={"chevron-down"}></Chevron>
      </CustomSelect>
    </SelectWrapper>
  );
};

const SelectWrapper = styled.div`
  position: relative;
  width: fit-content;
`;

const NativeSelect = styled.select`
  appearance: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
`;

const CustomSelect = styled.div`
  width: fit-content;
  padding: 12px 1rem;
  padding-right: 52px;
  font-size: 1rem;
  line-height: 1rem;
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  border: none;
  border-radius: 0.5em;
  max-width: fit-content !important;

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }

  ${NativeSelect}:focus-visible + & {
    outline: 2px solid ${COLORS.gray700};
  }
`;

const Chevron = styled(Icon)`
  display: inline-block;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  height: fit-content;
  margin: auto;
  color: inherit;
  pointer-events: none;
`;

export default Select;
