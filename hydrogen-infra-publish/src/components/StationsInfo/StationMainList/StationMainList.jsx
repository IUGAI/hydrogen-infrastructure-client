import { IoMdSearch } from "react-icons/io";
import { DiMootoolsBadge } from "react-icons/di";
import { IoSaveOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { SiMicrosoftexcel } from "react-icons/si";
import "./StationMainList.scss";
import { DataGrid } from "@mui/x-data-grid";
import { stations } from "../../../data/Mapdata";
import { useNavigate } from "react-router-dom";
import { handleItemSelection } from "@mui/base/useList";
import { useEffect, useState } from "react";
import { deleteStation, getStations } from '../../../services/apiStations'
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import ModalDefault from "../../Modal/ModalDefault";



const columns = [
  {
    field: "id",
    headerName: "아이디",
    width: 150,
    sortable: false,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "regist_date",
    headerName: "등록일",
    width: 150,
    sortable: false,
    headerAlign: "center",
    align: "center",
    renderCell: (params) => {
      // Format the date as needed
      var formattedDate = null
      if (params.value !== null){
       formattedDate = new Date(params.value).toLocaleDateString();
      } 
      // Return the formatted date for rendering
      return <span className="custom-datagrid ">{formattedDate}</span>;
    },
  },
  {
    field: "district",
    headerName: "시도",
    width: 150,
    sortable: false,
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    align: "center",
  },
  {
    field: "business",
    headerName: "사업자",
    width: 150,
    headerAlign: "center",
    align: "center",
    valueGetter: (params) => {
      // Convert the decimal value to a percentage
      return params.value === 10000001 ? "남부사전" : "";
    },
  },
  {
    field: "station_name",
    headerName: "사업소",
    width: 150,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "commencement_date",
    headerName: "개시일",
    description: "This column has a value getter and is not sortable.",
    align: "center",
    headerAlign: "center",
    width: 200,
    renderCell: (params) => {
      // Format the date as needed
      var formattedDate = null
      if (params.value !== null){
       formattedDate = new Date(params.value).toLocaleDateString();
      } 
      // Return the formatted date for rendering
      return <span className="custom-datagrid ">{formattedDate}</span>;
    },
  },
  {
    field: "station_type",
    headerName: "사업소 종류",
    width: 150,
    align: "center",
    headerAlign: "center",
    renderCell: (params) => {
      return params.value === 1 ? (
        <span className="prod-text-value production">생산</span>
      ) : params.value === 2 ? (
        <span className="prod-text-value storaging">저장</span>
      ) : (
        <span className="prod-text-value charging">충전</span>
      );
    },
  },
  {
    field: "production_cnt",
    headerName: "생상시설",
    align: "center",
    headerAlign: "center",
    width: 120,
  },
  {
    field: "storage_cnt",
    headerName: "저장시설",
    align: "center",
    headerAlign: "center",
    width: 120,
  },
  {
    field: "charging_cnt",
    headerName: "충전시설",
    align: "center",
    headerAlign: "center",
    width: 120,
  },
];


function StationMainList() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  


  const {isLoading,error,data } = useQuery({
    queryKey:['stations'],
    queryFn: () => getStations()
  });

  const mutation = useMutation({
    mutationFn: deleteStation,
    onSuccess: () => {
      console.log("delete successfuly")
      queryClient.invalidateQueries({
        queryKey: ['stations'],
      });
    }
  })

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  // console.log("datas : ", data);


  const rows =  data &&  Array.isArray(data) ?  data.map((item) => ({
    id: item.id,
    regist_date: item.autharization_date,
    // business: item.buisness_no,
    district: item.district,
    station_name: item.name,
    commencement_date: item.start_date,
    station_type: item.group,
    production_cnt: item.equipmentsProduction,
    storage_cnt: item.equipmentsStrorage,
    charging_cnt: item.equipmentsCharging,
  })) : [];
  


  const handleItemSelection = (selectionModel) => {
    setSelectedItems(selectionModel);
  };
  const handleHover = (index) => {
    setHoveredIcon(index);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleNavigatetoDetail = () => {
    if (selectedItems.length > 1) {
      alert("한개 만 선택해주세요!");
    } else if (selectedItems.length === 0) {
      alert("사업소 선택해 주세요");
    } else {
      navigate(`/stations/${selectedItems[0]}`);
    }
  };

  const handleClickDelete = () => {
      mutation.mutate(selectedItems[0]);
      setOpen(false)
  }

  const handleClickGotoEditPAge = () => {
    if (selectedItems.length > 1) {
      alert("한개 만 선택해주세요!");
    } else if (selectedItems.length === 0) {
      alert("사업소 선택해 주세요");
    } else {
      setOpen(true);
    }
  }

  const iconDataRight = [
    {
      icon: (
        <SiMicrosoftexcel
          size={24}
          color={hoveredIcon === 4 ? "#fff" : "#8da7d9"}
        />
      ),
      text: "엑셀 출력",
    },
  ];

  const iconData = [
    {
      icon: (
        <IoMdSearch
          size={24}
          style={{ cursor: "pointer" }}
          color={hoveredIcon === 0 ? "#fff" : "#576dad"}
        />
      ),
      text: "상세 정보",
      onClick: handleNavigatetoDetail,
    },
    {
      icon: (
        <IoSaveOutline
          size={24}
          style={{ cursor: "pointer" }}
          color={hoveredIcon === 1 ? "#fff" : "#576dad"}
        />
      ),
      text: "저장",
      // onClick: handleGrEditClick,
    },
    {
      icon: (
        <RiDeleteBin6Line
          style={{ cursor: "pointer" }}
          size={24}
          color={hoveredIcon === 2 ? "#fff" : "#576dad"}
        />
      ),
      text: "삭제",
      onClick: handleClickGotoEditPAge,
    },
  ];

  return (
    <div className="station-list">
    <ModalDefault
        open={open}
        state="delete"
        handleClose={handleClose}
        modalTitle={'사업소 삭제'}
        modalDsecriptions={
          <div dangerouslySetInnerHTML={{ __html: "선택한 사업소  </p> 삭제하시겠습니까?" }} />
        }
        handleClickGoToLogin={handleClickDelete}
      />
      <div className="header-table">
        <div className="left">
          {iconData.map((data, index) => (
            <div
              key={index}
              className="icon-header"
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
              onClick={data.onClick}
            >
              {hoveredIcon === index && (
                <span className="tooltip">{data.text}</span>
              )}
              {data.icon}
            </div>
          ))}
        </div>
        <div className="right">
          <div className="icon-header">
            {iconDataRight.map((data, index) => (
              <div
                key={4}
                className="icon-header"
                onMouseEnter={() => handleHover(4)}
                onMouseLeave={() => handleHover(null)}
                onClick={data.onClick}
              >
                {hoveredIcon === 4 && (
                  <span className="tooltip">{data.text}</span>
                )}
                {data.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="table">
        <DataGrid
          rows={rows}
          rowHeight={40}
          //   autoHeight
          columnHeaderHeight={40}
          columns={columns}
          onRowSelectionModelChange={handleItemSelection}
          localeText={{ noRowsLabel: "데이터가 존재하지 않습니다." }}
          className="custom-datagrid"
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </div>
  );
}

export default StationMainList;
