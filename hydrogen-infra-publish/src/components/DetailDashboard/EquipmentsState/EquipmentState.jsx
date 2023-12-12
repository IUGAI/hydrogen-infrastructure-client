import "./EquipmentState.scss";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { BsArrows } from "react-icons/bs";
import { styled, keyframes } from "styled-components";
import EquipmentStateItem from "./EquipmentStateItem/EquipmentStateItem";
import { equipmenst } from "../../../data/statisticData";
import { useMediaQuery } from "react-responsive";

function EquipmentState() {
  const isSmallScreen = useMediaQuery({ maxWidth: 1536 });

  const FlexContainer = styled.div`
    display: flex;
    width: 100%;
    padding: 0 10px;
    flex-wrap: wrap;
    heigh:100%;
    @media (max-width: 1876px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    @media (max-width: 1536px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  `;

  const Item = styled.div`
    flex: 0 0 auto;
    border-radius: 5px;
    margin: 5px 10px;
    width: ${({ selected, defaultvalue, index, startReduce, endReduce }) => {
      if (selected) {
        return isSmallScreen ? "570px" : "940px";
      } else if (
        defaultvalue === "reduce" &&
        index >= startReduce &&
        index <= endReduce
      ) {
        return isSmallScreen ? "75px" : "140px"; // Ширина для первых четырех элементов
      }
      return isSmallScreen ? "160px" : "300px"; // Ширина по умолчанию для остальных элементов
    }};

    border: 1px solid #253255;
    background-color: #212c4b;
    margin-right: 5px;
    height: 550px;

    @media (max-width: 1536px) {
      height: 380px;
    }
  `;

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
      <img src="./img/marker.png" className="" />
      <div className="top">
        <span className="title-text">시설물 상태</span>
        <div className="icons-left">
          <BsArrows size={28} color="#00B0F0" onClick={reset} />
          <FiPlus size={28} color="#00B0F0" />
        </div>
      </div>
      <div className="bottom">
        <FlexContainer>
          {equipmenst.map((item, index) => (
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
                onClick={handleItemClick}
                isSelected={
                  selectedItemId === item.id
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
