import "./StationList.scss";
import Button from "@mui/material/Button";
import { RiRefreshLine } from "react-icons/ri";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoIosSearch } from "react-icons/io";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";

import TableBody from "@mui/material/TableBody";
import {stations} from '../../../data/Mapdata';
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useMediaQuery } from "react-responsive";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}


console.log(stations);


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
    font-size: 10px;
  }
`;

const CellType = styled(TableCell)`
  font-family: "gothic 12";
  color: ${(props) =>
    props.type === 1
      ? "#00B0F0 "
      : props.type === 3
      ? "#92D050 "
      : "#FFC000  "};
  border-bottom: 1px solid #253255;
  @media (max-width: 1536px) {
    font-size: 10px;
  }
`;

const CellState = styled(TableCell)`
  font-family: "gothic 12";
  color: ${(props) =>
    props.state === 0
      ? "#FE609A"
      : props.state === 2
      ? "#8497B0"
      : "#fff"};
  border-bottom: 1px solid #253255;
  @media (max-width: 1536px) {
    font-size: 10px;
  }
`;



function StationList() {

  const isSmallScreen = useMediaQuery({ maxWidth: 1536 });

  const ScrollableContainer = styled(Paper)({
  
    maxHeight: isSmallScreen ? "450px"  : "490px",
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
  return (
    <div className="station-list-content">
      <div className="top">
        <img src="./img/marker.png" className="" />
        <div className="left">
          <span className="title-text">사업소 목록</span>
        </div>
        <div className="right">
          <RiRefreshLine size={isSmallScreen ? 20 :28} color="#00B0F0" />
          <TfiMenuAlt size={isSmallScreen ? 20 :28} color="#00B0F0" />
        </div>
      </div>
      <div className="bottom">
        <div className="header-search">
          <Button variant="contained" className="button-reset">
            초기화
          </Button>
          <input type="text" placeholder="검색" className="input-search" />
          {/* <IoIosSearch size={24} color="#00B0F0" className="search-icon" /> */}
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
                  {stations.map((row, index) => (
                    <StyledTableContent key={index}>
                      <StyledTableCellContent component="th" scope="row">
                        {row.district}
                      </StyledTableCellContent>
                      <CellType align="center" type={row.type}>
                        {row.type === 1 ? "생산" : row.type === 2 ? "저장" : "충전"}
                      </CellType>
                      <StyledTableCellContent align="center">
                        {row.name}
                      </StyledTableCellContent>
                      <StyledTableCellContent align="center">
                        {row.equipments.length}/{row.max_capacity} 
                      </StyledTableCellContent>
                      <CellState align="center" state={row.state}>
                        {row.state === 1 ? "가동중" : row.state === 0 ? "중단" :  "점검중"}
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
