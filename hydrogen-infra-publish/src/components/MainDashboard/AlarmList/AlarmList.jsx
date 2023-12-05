import "./AlarmList.scss";
import { TfiMenuAlt } from "react-icons/tfi";
import ButtonOutline from "../../Buttons/ButtonOutline";
import AlarmWidgets from "./AlarmWidgets/AlarmWidgets";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(type, station, failure, content, checked) {
  return { type, station,failure, content, checked };
}

const rows = [
  createData("중요", "부산 A 사업소",1, "설비 온도 이상", "미확인"),
  createData("일반", "서울 A 사업소",0, "외부 충격", "확인"),
  createData("일반", "나주 A 사업소",1, "점검 알림", "확인"),
  createData("중요", "부산 A 사업소",1, "압력 이상", "확인"),
  createData("일반", "서울 A 사업소",0, "가동중단", "확인"),
  createData("중요", "광주 A 사업소",0, "설비 온도 이상", "확인"),
  createData("일반", "나주 A 사업소",1, "점검 알림", "확인"),
  createData("중요", "부산 A 사업소",1, "압력 이상", "확인"),
  createData("일반", "서울 A 사업소",0, "가동중단", "확인"),
  createData("중요", "광주 A 사업소",0, "설비 온도 이상", "확인"),
  createData("일반", "나주 A 사업소",1, "점검 알림", "확인"),
  createData("일반", "서울 A 사업소",0, "가동중단", "확인"),
  createData("중요", "광주 A 사업소",0, "설비 온도 이상", "확인"),
  createData("일반", "나주 A 사업소",1, "점검 알림", "확인"),
  createData("중요", "부산 A 사업소",1, "압력 이상", "확인"),
  createData("일반", "서울 A 사업소",0, "가동중단", "확인"),
  createData("중요", "광주 A 사업소",0, "설비 온도 이상", "확인"),
  createData("일반", "나주 A 사업소",1, "점검 알림", "확인"),

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
    font-size: 12px;
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
    props.type === "중요"
      ? "#00B0F0 "
      : "#fff  "};
  border-bottom: 1px solid #253255;
  @media (max-width: 1536px) {
    font-size: 12px;
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
          <ButtonOutline>미확인 1건</ButtonOutline>
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
                  {rows.map((row, index) => (
                    <StyledTableContent key={index}>
                      <CellType   type={row.type}>
                        {row.type}
                      </CellType>
                      <StyledTableCellContent align="center">
                        {row.station}
                      </StyledTableCellContent>
                      <CellTypeContent align="center" code = {row.failure}>
                        {row.content}
                      </CellTypeContent>
                      <CellTypeChecked align="center" checked={row.checked} >
                        {row.checked}
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
