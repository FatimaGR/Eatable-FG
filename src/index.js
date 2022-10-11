import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import styled from "@emotion/styled";
import { Global } from '@emotion/react';
import { global, reset } from './styles/global';
import { colors } from './styles/colors';
import { WhiteBackground, OrangeBackground } from './styles/utils';

const Background = styled.div`
  margin: auto;
  width: 414px;
  height: 896px;
  padding: 48px 21px 12px 21px;
  background: ${colors.lightgray};
  border-radius: 20px;
  box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.9);
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Global styles={reset} />
    <Global styles={global} />
    <OrangeBackground>
    <Background>
      <App />
    </Background>
    </OrangeBackground>
  </React.StrictMode>
);
