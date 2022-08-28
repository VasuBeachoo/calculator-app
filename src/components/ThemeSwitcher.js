import styled from "styled-components";

export const ToggleCircle = styled.div``;

export const ClickBox = styled.div``;

export const ToggleBox = styled.div``;

export const ThemeLabel = styled.p``;

export const ThemesBox = styled.div``;

export const SwitcherBox = styled.div``;

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
