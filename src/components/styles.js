import styled from "@emotion/styled";
import { colors } from "../styles/colors";

const btn = styled.button`
  width: 310px;
  height: 70px;
  display: flex;
  position: absolute;
  background: ${colors.orange};
  border-radius: 30px;
`;

const confirmBtn = styled.button`
  width: 262px;
  height: 47px;
  display: flex;
  background: ${colors.orange};
  border-radius: 30px;
`;

const cancelBtn = styled.button`
  width: 262px;
  height: 47px;
  display: flex;
  background: ${colors.yellow};
  border-radius: 30px;
`;