import React from 'react';
import styled from "@emotion/styled";
import { CancelBtn } from '../styles/buttons';
import { colors } from '../styles/colors';

const ConfirmBackground = styled.div`
  background-color: rgb(51, 51, 51, 0.8);
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  right: 0;
  top: 0;
  left: 0;
  bottom: 0;
`;

const ConfirmCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  gap: 16px;
  width: 301px;
  height: 218px;
  background: ${colors.lightgray};
  border-radius: 20px;
`;

export default function Modal({children, open, close}) {
  if (!open) return null

  return (
    <div>
      <ConfirmBackground>
        <ConfirmCard>
          {children}  
          <CancelBtn onClick={close}>No, cancel!</CancelBtn>
        </ConfirmCard>
      </ConfirmBackground>
    </div>
  )
}