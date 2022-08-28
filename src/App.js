import styled from "styled-components";
import Calculator from "./components/Calculator";

const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`;

const App = () => {
  return (
    <AppContainer>
      <Calculator />
    </AppContainer>
  );
};

export default App;
