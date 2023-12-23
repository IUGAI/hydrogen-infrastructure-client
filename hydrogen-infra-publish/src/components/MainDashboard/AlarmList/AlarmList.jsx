import "./AlarmList.scss";
import { TfiMenuAlt } from "react-icons/tfi";
import ButtonOutline from "../../Buttons/ButtonOutline";
import AlarmWidgets from "./AlarmWidgets/AlarmWidgets";
import { styled } from "@mui/material/styles";
import { stations } from "../../../data/Mapdata";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


const alarm = stations.flatMap((obj) => obj.alarms).filter((obj) => obj !== undefined);
const alarm_notChecked = alarm.filter((obj) => obj.checked === false).length



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
    props.type === 2
      ? "#00B0F0 "
      : "#fff  "};
  border-bottom: 1px solid #253255;
  @media (max-width: 1536px) {
    font-size: 10px;
  }
`;


const CellTypeContent = styled(TableCell)`
  font-family: "gothic 12";
  color: ${(props) =>
    props.code === 1
      ? "#FE609A "
      : "#fff  "};
  border-bottom: 1px solid #253255;
  @media (max-width: 1536px) {
    font-size: 12px;
  }
`;


const CellTypeChecked = styled(TableCell)`
font-family: "gothic 12";
color: ${(props) =>
  props.checked === "확인"
    ? "#92D050 "
    : "#FFC000  "};
border-bottom: 1px solid #253255;
@media (max-width: 1536px) {
  font-size: 12px;
}
`


const ScrollableContainer = styled(Paper)({
  maxHeight: "450px",
  overflowY: "auto",
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



const widgets = [
  {
    id: 1,
    title: "전체",
    value: 12,
  },
  {
    id: 2,
    title: "중요",
    value: 3,
  },
  {
    id: 3,
    title: "일반",
    value: 9,
  },
];
function AlarmList() {
  return (
    <div className="alarm-list-content">
      <div className="top">
        <img src="./img/marker.png" className="" />
        <div className="left">
          <span className="title-text">알람</span>
          <ButtonOutline>미확인 {alarm_notChecked}건</ButtonOutline>
        </div>
        <div className="right">
          <TfiMenuAlt size={28} color="#00B0F0" />
        </div>
      </div>
      <div className="bottom">
        <div className="widgets">
          {widgets.map((items) => (
            <AlarmWidgets key={items.id} item={items} />
          ))}
        </div>
        <div className="table">
        <ScrollableContainer>
            <TableContainer component={Paper}>
              <StyledTable size="small" aria-label="a dense table">
                <TableHead>
                  <StyledTableHeader>
                    <StyledTableCellHeader>구분</StyledTableCellHeader>
                    <StyledTableCellHeader align="center">
                      사업소
                    </StyledTableCellHeader>
                    <StyledTableCellHeader align="center">
                      내용
                    </StyledTableCellHeader>
                    <StyledTableCellHeader align="center">
                      확인
                    </StyledTableCellHeader>
                  </StyledTableHeader>
                </TableHead>
                <TableBody>
                  {alarm.map((row, index) => (
                    <StyledTableContent key={index}>
                      <CellType   type={row.importance}>
                        {row.importance === 2 ? "중요" : "일반"}
                      </CellType>
                      <StyledTableCellContent align="center">
                        {row.name}
                      </StyledTableCellContent>
                      <CellTypeContent align="center" code = {row.type}>
                        {row.content}
                      </CellTypeContent>
                      <CellTypeChecked align="center" checked={row.checked} >
                        {row.checked ? "확인" : "미확인"}
                      </CellTypeChecked>
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

export default AlarmList;
