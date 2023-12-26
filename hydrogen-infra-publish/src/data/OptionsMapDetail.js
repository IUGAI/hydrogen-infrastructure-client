const bounds = {
    north: 38.5,
    south: 33.0,
    east: 129.6,
    west: 124.6,
  };
  
  const restriction = {
    latLngBounds: bounds,
    strictBounds: false,
  };
  
  export const mapOptions = {
    gestureHandling: "greedy", // Позволяет использовать жесты только в определенной области
    restriction: restriction,
    mapTypeControl: false,
    zoomControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    styles: [

      {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          {
            color: "#d2dbeb", // Здесь можно изменить цвет воды
          },
        ],
      },
      {
        featureType: "landscape.natural",
        elementType: "geometry",
        stylers: [
          {
            color: "#f4f6fa", // Цвет суши
          },
        ],
      },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#869ec9", // Цвет названий городов
          },
        ],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [
          {
            color: "#d2dbeb", // Цвет дорог
          },
        ],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [
          {
            visibility: "off", // Скрываем названия парков
          },
        ],
      },
      {
        featureType: 'administrative',
        elementType: 'geometry.stroke',
        stylers: [
          {
            visibility: 'off', 
          },
        ],
      },
      {
        featureType: "landscape.man_made",
        elementType: "geometry",
        stylers: [
          {
            color: "#f4f6fa", // Можно также изменить цвет частей ландшафта
          },
        ],
      },
      {
        featureType: "poi.park",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#f4f6fa", // Цвет парков
          },
        ],
      },
    ],
  };
  