import styled from "styled-components";
import ThemeSwitcher from "./ThemeSwitcher";
import CalcBtn, { DeleteBtn, ResetBtn, EqualBtn } from "./CalcBtn";

export const BtnsBox = styled.div`
  display: grid;
  grid-template: auto / repeat(4, 1fr);
  gap: 1.5rem;
  width: 100%;
  background-color: ${(props) => props.theme.keypad};
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  padding: 2rem;
`;

export const Value = styled.h1`
  color: ${(props) => props.theme.text.primary};
  font-size: 2.5rem;
  margin: 0;
`;

export const ValueBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  background-color: ${(props) => props.theme.screen};
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  padding: 2rem;
`;

export const SwitcherLabel = styled.p`
  transform: translateY(-0.3rem);
  color: ${(props) => props.theme.text.primary};
  font-size: 0.85rem;
  letter-spacing: 0.1ch;
  margin: 0 0 0 auto;
`;

export const Label = styled.h3`
  color: ${(props) => props.theme.text.primary};
  font-size: 1.85rem;
  margin: 0;
`;

export const TopBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 1rem;
  width: 100%;
`;

export const CalculatorBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  width: clamp(10rem, 80vw, 35rem);
`;

const Calculator = ({ className }) => {
  return (
    <CalculatorBox className={className}>
      <TopBox>
        <Label>calc</Label>
        <SwitcherLabel>THEME</SwitcherLabel>
        <ThemeSwitcher />
      </TopBox>
      <ValueBox>
        <Value>399,981</Value>
      </ValueBox>
      <BtnsBox>
        <CalcBtn label="7" />
        <CalcBtn label="8" />
        <CalcBtn label="9" />
        <DeleteBtn />
        <CalcBtn label="4" />
        <CalcBtn label="5" />
        <CalcBtn label="6" />
        <CalcBtn label="+" />
        <CalcBtn label="1" />
        <CalcBtn label="2" />
        <CalcBtn label="3" />
        <CalcBtn label="-" />
        <CalcBtn label="." />
        <CalcBtn label="0" />
        <CalcBtn label="/" />
        <CalcBtn label="x" />
        <ResetBtn />
        <EqualBtn />
      </BtnsBox>
    </CalculatorBox>
  );
};

export default Calculator;
