import "./StationList.scss";
import Button from "@mui/material/Button";
import { RiRefreshLine } from "react-icons/ri";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoIosSearch } from "react-icons/io";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("사울", "생산", "서울 B 사업소", "1/1", "중단"),
  createData("부산", "충전", "부산 A 사업소", "3/4", "가동중"),
  createData("사울", "생산", "서울 A 사업소", "2/2", "점검중"),
  createData("광주", "생산", "광주 C 사업소", "3/4", "가동중"),
  createData("사울", "저장", "서울 C 사업소", "2/4", "점검중"),
  createData("사울", "생산", "서울 C 사업소", "1/4", "가동중"),
  createData("대구", "충전", "대구 B 사업소", "4/4", "중단"),
  createData("사울", "생산", "서울 A 사업소", "4/4", "가동중"),
  createData("사울", "생산", "서울 A 사업소", "0/3", "가동중"),
  createData("울산", "충전", "울산 C 사업소", "3/4", "점검중"),
  createData("사울", "생산", "서울 C 사업소", "3/4", "가동중"),
  createData("사울", "생산", "서울 C 사업소", "3/4", "중단"),
  createData("사울", "충전", "서울 C 사업소", "4/4", "중단"),
  createData("사울", "충전", "서울 C 사업소", "4/4", "가동중"),
  createData("제주", "생산", "제주 A 사업소", "3/4", "가동중"),
  createData("사울", "생산", "서울 C 사업소", "3/4", "가동중"),
  createData("부산", "충존", "부산 C 사업소", "4/4", "중단"),
  createData("사울", "충전", "서울 C 사업소", "4/4", "가동중"),
  createData("남양주", "충전", "남양주 C 사업소", "3/4", "중단"),
];


const StyledTableHeader = styled(TableRow)`
  background-color: #212c4b;
`;

const StyledTableContent = styled(TableRow)`
  background-color: #1c2641;
`;

const StyledTable = styled(Table)`
  overflow: scroll;
`;

const StyledTableCellHeader = styled(TableCell)`
font-family: "gothic 12";
  color: #8faadc;
  border: 0;
  @media (max-width: 1536px) {
    font-size: 10px;
  }
`;

const StyledTableCellContent = styled(TableCell)`
  font-family: "gothic 12";
  border-bottom: 1px solid #253255;
  color: white;

  @media (max-width: 1536px) {
    font-size: 12px;
  }
`;

const CellType = styled(TableCell)`
  font-family: "gothic 12";
  color: ${(props) =>
    props.type === "생산"
      ? "#00B0F0 "
      : props.type === "충전"
      ? "#92D050 "
      : "#FFC000  "};
  border-bottom: 1px solid #253255;
  @media (max-width: 1536px) {
    font-size: 12px;
  }
`;

const CellState = styled(TableCell)`
  font-family: "gothic 12";
  color: ${(props) =>
    props.state === "중단"
      ? "#FE609A"
      : props.state === "점검중"
      ? "#8497B0"
      : "#fff"};
  border-bottom: 1px solid #253255;
  @media (max-width: 1536px) {
    font-size: 12px;
  }
`;

const ScrollableContainer = styled(Paper)({
  maxHeight: "450px",
  overflowY: "auto",
  overflowX: "auto",
  "&::-webkit-scrollbar": {
    width: "5px",
  },
  "&::-webkit-scrollbar-track": {
    background: "#1c2641",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "#253255",
    borderRadius: "1px",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    background: "#1c2641",
  },
});

function StationList() {
  return (
    <div className="station-list-content">
      <div className="top">
        <img src="./img/marker.png" className="" />
        <div className="left">
          <span className="title-text">사업소 목록</span>
        </div>
        <div className="right">
          <RiRefreshLine size={28} color="#00B0F0" />
          <TfiMenuAlt size={28} color="#00B0F0" />
        </div>
      </div>
      <div className="bottom">
        <div className="header-search">
          <Button variant="contained" className="button-reset">
            초기화
          </Button>
          <input type="text" placeholder="검색" className="input-search" />
          <IoIosSearch size={24} color="#00B0F0" className="search-icon" />
        </div>
        <div className="station-table">
          <ScrollableContainer>
            <TableContainer component={Paper}>
              <StyledTable size="small" aria-label="a dense table">
                <TableHead>
                  <StyledTableHeader>
                    <StyledTableCellHeader>지역</StyledTableCellHeader>
                    <StyledTableCellHeader align="center">
                      종류
                    </StyledTableCellHeader>
                    <StyledTableCellHeader align="center">
                      사업소명
                    </StyledTableCellHeader>
                    <StyledTableCellHeader align="center">
                      시설물
                    </StyledTableCellHeader>
                    <StyledTableCellHeader align="center">
                      상태
                    </StyledTableCellHeader>
                  </StyledTableHeader>
                </TableHead>
                <TableBody>
                  {rows.map((row, index) => (
                    <StyledTableContent key={index}>
                      <StyledTableCellContent component="th" scope="row">
                        {row.name}
                      </StyledTableCellContent>
                      <CellType align="center" type={row.calories}>
                        {row.calories}
                      </CellType>
                      <StyledTableCellContent align="center">
                        {row.fat}
                      </StyledTableCellContent>
                      <StyledTableCellContent align="center">
                        {row.carbs}
                      </StyledTableCellContent>
                      <CellState align="center" state={row.protein}>
                        {row.protein}
                      </CellState>
                    </StyledTableContent>
                  ))}
                </TableBody>
              </StyledTable>
            </TableContainer>
          </ScrollableContainer>
        </div>
      </div>
    </div>
  );
}

export default StationList;
