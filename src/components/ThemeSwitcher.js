import styled from "styled-components";

export const ToggleCircle = styled.div`
  width: 1rem;
  height: 1rem;
  background-color: ${(props) => props.theme.key.secondary};
  border-radius: 100%;
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
  width: 100%;
  background-color: ${(props) => props.theme.keypad};
  border-radius: 2rem;
  padding: 0.35rem;
  transition: 0.25s;

  &:hover {
    cursor: pointer;
    filter: brightness(1.25);
  }
`;

export const ThemeLabel = styled.p`
  color: ${(props) => props.theme.text.primary};
  margin: 0;
`;

export const ThemesBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

export const SwitcherBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  width: 5rem;
  user-select: none;
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
