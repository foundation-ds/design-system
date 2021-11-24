import styled from "styled-components";
import { ButtonTypes } from "./button.types";

export const Button = styled.button<ButtonTypes>`
  background-color: ${({ displayType, theme }) =>
    displayType === "primary" ? theme.color.primary : theme.color.secondary};
  border: none;
  border-radius: ${({ theme }) => theme.border.radius};
  box-shadow: ${({ theme }) => theme?.shadow?.one};
  color: ${({ theme }) => theme.color.base.white};
  cursor: pointer;
  display: inline-block;
  font-family: ${({ theme }) => theme.typography.regular.fontName};
  outline: none;
  padding: ${({ theme }) => theme.spacing.group.two}
    ${({ theme }) => theme.spacing.group.four};
`;
