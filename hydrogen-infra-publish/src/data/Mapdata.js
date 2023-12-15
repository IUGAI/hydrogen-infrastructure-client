
export const buisness = [
  {
    id: 10001,
    name: "환경부"
  }
]



export const stations = [
  {
    id: 1001,
    type: 1,
    lat: 37.5665,
    lng: 126.978,
    address: '서울특별시 금천구 시흥대로 321',
    district: '서울',
    state: 1,
    name: "서울 A 사업소",
    max_capacity: 6,
    equipments: [
      {
        id: 10001,
        type: 1,
        failure: false,
        max_capacity: 350,
        procentage: 73.5,
        soundness: 100,
        temperature: 730,
        equipment_name: "생산 1호기",
        current_weight: 220,
      },
      {
        id: 10002,
        type: 1,
        failure: true,
        max_capacity: 300,
        procentage: 58.7,
        soundness: 10,
        temperature: 755,
        equipment_name: "생산 2호기",
        current_weight: 176,
      },
      {
        id: 10003,
        type: 2,
        failure: false,
        max_capacity: 1000,
        procentage: 91.7,
        soundness: 87,
        temperature: -253,
        equipment_name: "저장 1호기",
        current_weight: 486,
      },
      {
        id: 10004,
        type: 3,
        failure: false,
        max_capacity: 900,
        procentage: 34.5,
        soundness: 74,
        temperature: -253,
        equipment_name: "충전 1호기",
        current_weight: 528,
      },
    ],
    equipments_quantity: 5,
  },
  {
    id: 1002,
    type: 2,
    state: 2,
    lat: 35.1796,
    lng: 129.0756,
    address: '부산',
    name: "부산 A 사업소",
    district: '부산',
    max_capacity: 4,
    equipments: [
      {
        id: 20001,
        type: 1,
        failure: false,
        max_capacity: 350,
        procentage: 73.5,
        soundness: 100,
        temperature: 730,
        equipment_name: "생산 1호기",
        current_weight: 220,
      },
      {
        id: 20002,
        type: 2,
        failure: true,
        max_capacity: 300,
        procentage: 58.7,
        soundness: 10,
        temperature: 755,
        equipment_name: "저장 2호기",
        current_weight: 176,
      },
    ],
    equipments_quantity: 3,
    
  },
  {
    id: 1003,
    type: 3,
    lat: 33.49,
    state: 1,
    lng: 126.53,
    address: '제주',
    district: '제주',
    name: "제조 A 사업소",
    max_capacity: 4,
    equipments: [
      {
        id: 30001,
        type: 1,
        failure: false,
        max_capacity: 350,
        procentage: 73.5,
        soundness: 100,
        temperature: 730,
        equipment_name: "생산 1호기",
        current_weight: 220,
      },
    ],
    equipments_quantity: 7,
  },
  {
    id: 1004,
    type: 1,
    lat: 35.8714,
    lng: 128.6014,
    address: '대구',
    state: 1,
    district: '대구',
    max_capacity: 4,
    name: "대구 A 사업소",
    equipments: [],
    equipments_quantity: 2,
  },
  {
    id: 1005,
    type: 3,
    lat: 37.4563,
    lng: 126.7052,
    state: 1,
    address: '인천',
    district: '인천',
    max_capacity: 4,
    name: "인천 A 사업소",
    equipments: [
        {
        id: 40002,
        type: 1,
        failure: true,
        max_capacity: 300,
        procentage: 58.7,
        soundness: 10,
        temperature: 755,
        equipment_name: "생산 2호기",
        current_weight: 176,
      },
    ],
    equipments_quantity: 6,
  },
  {
    id: 1006,
    type: 3,
    state: 0,
    lat: 35.1595,
    lng: 126.8526,
    address: '광주',
    district: '광주',
    max_capacity: 5,
    name: "광주 A 사업소",
    equipments: [],
    equipments_quantity: 4,
  },

  {
    id: 1007,
    type: 2
    ,
    state: 0,
    lat: 35.095,
    lng: 126.8726,
    address: '광주',
    district: '광주',
    max_capacity: 5,
    name: "광주 B 사업소",
    equipments: [],
    equipments_quantity: 4,
  },

];


export const equipments = stations.flatMap(obj => obj.equipments)




// const imageSources = [
//     "./img/storaging-map-icon.png",
//     "./img/charging-map-icon.png",
//     "./img/production-map-icon.png",
//     "./img/alarm-map-icon.png"
//   ];

// for (let i = 1; i <= 10; i++) {
//     const randomIndex = Math.floor(Math.random() * imageSources.length);
//     const iconObject = {
//       id: i,
//       src: imageSources[randomIndex],
//       top: `${Math.floor(Math.random() * 41) + 20}%`, // Random value between 20% and 60%
//       right: `${Math.floor(Math.random() * 41) + 20}%`, // Random value between 20% and 60%
//     };
//     mapData.push(iconObject);
//   }

//   console.log(mapData);

// export default mapdata;