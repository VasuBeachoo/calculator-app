import styled from "styled-components";

export const CalcBtnLabel = styled.h2``;

export const CalcBtnBox = styled.div`
  grid-column: auto / span 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const CalcBtn = ({ className, label }) => {
  return (
    <CalcBtnBox className={className}>
      <CalcBtnLabel>{label}</CalcBtnLabel>
    </CalcBtnBox>
  );
};

export const DeleteBtn = styled(CalcBtn).attrs({ label: "DEL" })``;

export const ResetBtn = styled(CalcBtn).attrs({ label: "RESET" })`
  grid-column: auto / span 2;
`;

export const EqualBtn = styled(CalcBtn).attrs({ label: "=" })`
  grid-column: auto / span 2;
`;

export default CalcBtn;
