import styled from "styled-components";

export const CalcBtnLabel = styled.h2``;

export const CalcBtnBox = styled.div`
  grid-column: auto / span 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.key.tertiary};
  color: ${(props) => props.theme.text.secondary};
  border-bottom: 1rem solid ${(props) => props.theme.keyShadow.tertiary};
`;

const CalcBtn = ({ className, label }) => {
  return (
    <CalcBtnBox className={className}>
      <CalcBtnLabel>{label}</CalcBtnLabel>
    </CalcBtnBox>
  );
};

export const DeleteBtn = styled(CalcBtn).attrs({ label: "DEL" })`
  background-color: ${(props) => props.theme.key.primary};
  color: ${(props) => props.theme.text.quarternary};
  border-bottom: 1rem solid ${(props) => props.theme.keyShadow.primary};
`;

export const ResetBtn = styled(CalcBtn).attrs({ label: "RESET" })`
  grid-column: auto / span 2;
  background-color: ${(props) => props.theme.key.primary};
  color: ${(props) => props.theme.text.quarternary};
  border-bottom: 1rem solid ${(props) => props.theme.keyShadow.primary};
`;

export const EqualBtn = styled(CalcBtn).attrs({ label: "=" })`
  grid-column: auto / span 2;
  background-color: ${(props) => props.theme.key.secondary};
  color: ${(props) => props.theme.text.tertiary};
  border-bottom: 1rem solid ${(props) => props.theme.keyShadow.secondary};
`;

export default CalcBtn;
