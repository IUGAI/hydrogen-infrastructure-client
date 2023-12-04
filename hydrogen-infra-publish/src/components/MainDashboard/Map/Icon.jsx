import styled from "styled-components";

const IconStyle = styled.img`
  position: absolute;
  width: 3%;
  top: ${props => props.top};
  right: ${props => props.right};
`;

function Icon({ data }) {
  return (
    <div>
      <IconStyle
        src={data.src}
        alt="map-icon"
        className="icon-map"
        top={data.top}
        right={data.right}
      />
    </div>
  );
}

export default Icon;
