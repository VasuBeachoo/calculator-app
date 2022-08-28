import styled from "styled-components";

export const ToggleCircle = styled.div``;

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
`;

export const ThemeLabel = styled.p``;

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
