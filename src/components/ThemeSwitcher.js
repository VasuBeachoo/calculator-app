import styled from "styled-components";

export const ToggleCircle = styled.div`
  width: 1rem;
  height: 1rem;
  background-color: ${(props) => props.theme.key.secondary};
`;

export const ClickBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ToggleBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.keypad};
`;

export const ThemeLabel = styled.p`
  color: ${(props) => props.theme.text.primary};
`;

export const ThemesBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SwitcherBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ThemeSwitcher = ({ className }) => {
  return (
    <SwitcherBox className={className}>
      <ThemesBox>
        <ThemeLabel>1</ThemeLabel>
        <ThemeLabel>2</ThemeLabel>
        <ThemeLabel>3</ThemeLabel>
      </ThemesBox>
      <ToggleBox>
        <ToggleCircle />
        <ClickBox></ClickBox>
        <ClickBox></ClickBox>
        <ClickBox></ClickBox>
      </ToggleBox>
    </SwitcherBox>
  );
};

export default ThemeSwitcher;
