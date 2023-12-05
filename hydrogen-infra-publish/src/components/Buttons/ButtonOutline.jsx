import Button from "@mui/material/Button";
import { styled } from "@mui/material";

const ButtonOutlineStyled = styled(Button)`
  margin: 10px;
  border: 1px solid #253255;
  padding: 0 30px;
  border-radius: 20px;
  font-family: "gothic 12";
  color: #5e76ba;
  font-weight: bold;

  @media (max-width: 1536px) {
    padding: 0 20px;
  }
`;

function ButtonOutline({ children }) {
  return (
    <>
      <ButtonOutlineStyled variant="outlined" className="button-outline">
        {children}
      </ButtonOutlineStyled>
    </>
  );
}

export default ButtonOutline;
