import styled from "styled-components";

export const CalcBtnBox = styled.div``;

export const CalcBtnLabel = styled.h2``;

const CalcBtn = ({ className, label }) => {
  return (
    <CalcBtnBox className={className}>
      <CalcBtnLabel>{label}</CalcBtnLabel>
    </CalcBtnBox>
  );
};

export const DeleteBtn = styled(CalcBtn).attrs({ label: "DEL" })``;

export const ResetBtn = styled(CalcBtn).attrs({ label: "RESET" })``;

export const EqualBtn = styled(CalcBtn).attrs({ label: "=" })``;

export default CalcBtn;
