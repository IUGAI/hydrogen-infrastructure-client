import { styled } from "@mui/material";
import Button from "@mui/material/Button";

const StyledButtonCustum = styled(Button)`
  margin: 10px;
  border: 2px solid #1c2641;
  padding: 0 30px;
  border-radius: 20px;
  font-family: "gothic 12";
  background-color: #253255;
  color: #5e76ba;
  font-weight: bold;

  @media (max-width: 1536px) {
    padding: 0 20px;
  }
`;

function ButtonCustum({ children,handleClick }) {
  return (
    <>
      <StyledButtonCustum onClick={handleClick} variant="contained">{children}</StyledButtonCustum>
    </>
  );
}

export default ButtonCustum;
