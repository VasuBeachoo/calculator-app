import { useDispatch } from "react-redux";
import { switchTheme } from "../calcSlice";
import styled from "styled-components";

export const ToggleCircle = styled.div`
  position: absolute;
  top: 0.275rem;
  ${(props) => props.theme.togglePosition}
  width: 1rem;
  height: 1rem;
  pointer-events: none;
  background-color: ${(props) => props.theme.key.secondary};
  border-radius: 100%;
`;

export const ClickBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 33.333%;
`;

export const ToggleBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  height: 1.5rem;
  background-color: ${(props) => props.theme.keypad};
  border-radius: 1rem;
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
  const dispatch = useDispatch();

  return (
    <SwitcherBox className={className}>
      <ThemesBox>
        <ThemeLabel>1</ThemeLabel>
        <ThemeLabel>2</ThemeLabel>
        <ThemeLabel>3</ThemeLabel>
      </ThemesBox>
      <ToggleBox>
        <ToggleCircle />
        <ClickBox
          onClick={() => dispatch(switchTheme({ theme: "1" }))}
        ></ClickBox>
        <ClickBox
          onClick={() => dispatch(switchTheme({ theme: "2" }))}
        ></ClickBox>
        <ClickBox
          onClick={() => dispatch(switchTheme({ theme: "3" }))}
        ></ClickBox>
      </ToggleBox>
    </SwitcherBox>
  );
};

export default ThemeSwitcher;
