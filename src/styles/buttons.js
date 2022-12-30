import styled from "@emotion/styled";
import { colors } from "./colors";
import { typography } from "./typography";

export const Button = styled.button`
  width: 310px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.orange};
  border-radius: 30px;
  border: none;
  color: ${colors.white};
  ${typography.semibold.md};
  cursor: pointer;
`;

export const ConfirmBtn = styled.button`
  width: 262px;
  height: 47px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: ${colors.orange};
  border-radius: 30px;
  color: ${colors.white};
  ${typography.semibold.md};
  cursor: pointer;
`;

export const CancelBtn = styled.button`
  width: 262px;
  height: 47px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: ${colors.yellow};
  border-radius: 30px;
  color: ${colors.white};
  ${typography.semibold.md};
  cursor: pointer;
`;