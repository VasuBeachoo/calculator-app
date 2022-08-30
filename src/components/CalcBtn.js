import styled from "styled-components";

export const CalcBtnLabel = styled.h2`
  font-size: clamp(1rem, 10vw, 2.5rem);
  letter-spacing: 0.035ch;
  margin: 0;
`;

export const CalcBtnBox = styled.div`
  grid-column: auto / span 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  user-select: none;
  background-color: ${(props) => props.theme.key.tertiary};
  color: ${(props) => props.theme.text.secondary};
  font-size: 1.5rem;
  border-bottom: 0.25rem solid ${(props) => props.theme.keyShadow.tertiary};
  border-radius: 0.5rem;
  padding: clamp(0.5rem, 3vw, 1rem);
  transition: 0.25s;

  &:hover {
    cursor: pointer;
    filter: brightness(1.5);
  }
`;

const CalcBtn = ({ className, label, onClick }) => {
  return (
    <CalcBtnBox className={className} onClick={onClick}>
      <CalcBtnLabel>{label}</CalcBtnLabel>
    </CalcBtnBox>
  );
};

export const DeleteBtn = styled(CalcBtn).attrs({ label: "DEL" })`
  background-color: ${(props) => props.theme.key.primary};
  color: ${(props) => props.theme.text.quarternary};
  border-color: ${(props) => props.theme.keyShadow.primary};

  ${CalcBtnLabel} {
    font-size: clamp(1rem, 8vw, 2rem);
  }
`;

export const ResetBtn = styled(CalcBtn).attrs({ label: "RESET" })`
  grid-column: auto / span 2;
  background-color: ${(props) => props.theme.key.primary};
  color: ${(props) => props.theme.text.quarternary};
  font-size: 1.1rem;
  border-color: ${(props) => props.theme.keyShadow.primary};

  ${CalcBtnLabel} {
    font-size: clamp(1rem, 8vw, 2rem);
  }
`;

export const EqualBtn = styled(CalcBtn).attrs({ label: "=" })`
  grid-column: auto / span 2;
  background-color: ${(props) => props.theme.key.secondary};
  color: ${(props) => props.theme.text.tertiary};
  border-color: ${(props) => props.theme.keyShadow.secondary};
`;

export default CalcBtn;
