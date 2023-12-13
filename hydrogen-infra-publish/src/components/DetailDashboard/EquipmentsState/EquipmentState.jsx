import "./EquipmentState.scss";
import { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { BsArrows } from "react-icons/bs";
import { styled, keyframes } from "styled-components";
import EquipmentStateItem from "./EquipmentStateItem/EquipmentStateItem";
import { equipmenst as initialEquipment } from "../../../data/statisticData";
import { useMediaQuery } from "react-responsive";

function EquipmentState() {
  const isMobilePhone = useMediaQuery({ maxWidth: 1024 });

  const FlexContainer = styled.div`
    display: ${isMobilePhone ? "" : "flex"};
    width: 100%;
    padding-left: 10px;
    flex-wrap: wrap;
    heigh: 100%;
  `;

  const Item = styled.div`
    flex: 0 0 auto;
    border-radius: 5px;
    margin: 0.8%;
    width: ${({ selected, defaultvalue, index, startReduce, endReduce }) => {
      if (selected) {
        return "56.5%";
      } else if (
        defaultvalue === "reduce" &&
        index >= startReduce &&
        index <= endReduce
      ) {
        return "8.3%";
      } else if (isMobilePhone) {
        return "100%";
      }
      return "18%";
    }};

    border: 1px solid #253255;
    background-color: #212c4b;
    height: 550px;

    @media (max-width: 1536px) {
      height: 380px;
    }
  `;

  const [hasExecutedCode, setHasExecutedCode] = useState(false);
  const [equipment, setEquipmenst] = useState(initialEquipment);

  useEffect(() => {
    const lengthofarray = equipment.length;
    console.log(equipment);
    const reminder = lengthofarray % 5;

    let times;

    if (lengthofarray === 0) {
      times = 5;
    } else if (reminder === 0) {
      times = 0;
    } else {
      times = 5 - reminder;
    }

    if (!hasExecutedCode) {
      const newEquipmenst = [...initialEquipment]; // Создаем копию массива
      for (let i = 0; i < times; i++) {
        newEquipmenst.push({
          id: 0,
          type: null,
          failure: false,
          max_capacity: 0,
          procentage: null,
          soundness: null,
          temperature: 0,
          equipment_name: "not available",
          current_weight: null,
        });
      }
      setEquipmenst(newEquipmenst);
      setHasExecutedCode(true);
    }
  }, [equipment, hasExecutedCode]);

  // alert(equipmenst.length)

  const [selectedItemId, setSelectedItemId] = useState("default");
  const [defaultvalue, setdefaultvalue] = useState("");
  const [startReduce, setStartReduce] = useState();
  const [endReduce, setEndReduce] = useState();

  const handleItemClick = (clickedItemId, index) => {
    setSelectedItemId(clickedItemId); // Установка ID выбранного элемента
    setdefaultvalue("reduce");
    const startreduce = Math.floor(index / 5) * 5;
    const endreduce = startreduce + 4;
    setStartReduce(startreduce);
    setEndReduce(endreduce);
  };

  const reset = () => {
    setSelectedItemId("default");
    setdefaultvalue("");
  };

  return (
    <div className="equipments-state-content">
      <div className="top">
        <img src="./img/marker.png" className="" />
        <span className="title-text">시설물 상태</span>
        <div className="icons-left">
          <BsArrows size={28} color="#00B0F0" onClick={reset} />
          <FiPlus size={28} color="#00B0F0" />
        </div>
      </div>
      <div className="bottom">
        <FlexContainer>
          {equipment.map((item, index) => (
            <Item
              selected={selectedItemId === item.id}
              defaultvalue={defaultvalue}
              index={index}
              startReduce={startReduce}
              endReduce={endReduce}
              key={index}
            >
              <EquipmentStateItem
                item={item}
                index={index}
                onClick={isMobilePhone ? "" : item.id === 0 ? "" :  handleItemClick}
                isSelected={
                  selectedItemId === item.id || isMobilePhone
                    ? "clicked"
                    : defaultvalue === "reduce" &&
                      index >= startReduce &&
                      index <= endReduce
                    ? "reduce"
                    : "default"
                }
              />
            </Item>
          ))}
        </FlexContainer>
      </div>
    </div>
  );
}

export default EquipmentState;
