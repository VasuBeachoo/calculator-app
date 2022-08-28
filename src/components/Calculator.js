import styled from "styled-components";
import ThemeSwitcher from "./ThemeSwitcher";
import CalcBtn, { DeleteBtn, ResetBtn, EqualBtn } from "./CalcBtn";

export const BtnsBox = styled.div`
  display: grid;
  grid-template: auto / repeat(4, 1fr);
  width: 100%;
`;

export const Value = styled.h1``;

export const ValueBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

export const SwitcherLabel = styled.p`
  margin: 0 0 0 auto;
`;

export const Label = styled.h3``;

export const TopBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

export const CalculatorBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Calculator = ({ className }) => {
  return (
    <CalculatorBox className={className}>
      <TopBox>
        <Label>calc</Label>
        <SwitcherLabel>Theme</SwitcherLabel>
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
