import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import Calculator from "./components/Calculator";

const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.main};
`;

const App = () => {
  const theme = {
    themeOne: {
      main: "var(--bg-main-1)",
      keypad: "var(--bg-keypad-1)",
      screen: "var(--bg-screen-1)",
      key: {
        primary: "var(--bg-key-blue)",
        secondary: "var(--bg-key-red)",
        tertiary: "var(--bg-key-orange-light)",
      },
      keyShadow: {
        primary: "var(--key-shadow-blue)",
        secondary: "var(--key-shadow-red)",
        tertiary: "var(--key-shadow-orange-light)",
      },
      text: {
        primary: "var(--text-primary-1)",
        secondary: "var(--text-secondary-1)",
        tertiary: "var(--text-tertiary-1)",
        quarternary: "var(--text-quarternary-1)",
      },
    },
    themeTwo: {
      main: "var(--bg-main-2)",
      keypad: "var(--bg-keypad-2)",
      screen: "var(--bg-screen-2)",
      key: {
        primary: "var(--bg-key-cyan-dark)",
        secondary: "var(--bg-key-orange-dark)",
        tertiary: "var(--bg-key-gray-yellow)",
      },
      keyShadow: {
        primary: "var(--key-shadow-cyan-dark)",
        secondary: "var(--key-shadow-orange-dark)",
        tertiary: "var(--key-shadow-gray-orange)",
      },
      text: {
        primary: "var(--text-primary-2)",
        secondary: "var(--text-secondary-2)",
        tertiary: "var(--text-tertiary-1)",
        quarternary: "var(--text-quarternary-1)",
      },
    },
    themeThree: {
      main: "var(--bg-main-3)",
      keypad: "var(--bg-keypad-3)",
      screen: "var(--bg-keypad-3)",
      key: {
        primary: "var(--bg-key-violet-light)",
        secondary: "var(--bg-key-cyan-light)",
        tertiary: "var(--bg-key-violet-dark)",
      },
      keyShadow: {
        primary: "var(--key-shadow-magenta-light)",
        secondary: "var(--key-shadow-cyan-light)",
        tertiary: "var(--key-shadow-magenta-dark)",
      },
      text: {
        primary: "var(--text-primary-3)",
        secondary: "var(--text-secondary-3)",
        tertiary: "var(--text-tertiary-3)",
        quarternary: "var(--text-quarternary-3)",
      },
    },
  };

  return (
    <ThemeProvider theme={theme.themeOne}>
      <AppContainer>
        <GlobalStyle />
        <Calculator />
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
