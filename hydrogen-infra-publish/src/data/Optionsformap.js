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
      elementType: "labels",
      stylers: [
        { visibility: "off" }, // Скрываем надписи административных областей (городов, районов и т.д.)
      ],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#030629", // Здесь можно изменить цвет воды
        },
      ],
    },
    {
      featureType: "landscape.natural",
      elementType: "geometry",
      stylers: [
        {
          color: "#212c4b", // Цвет суши
        },
      ],
    },
    {
      featureType: "administrative.locality",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#212c4b", // Цвет названий городов
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        {
          color: "#1c2646", // Цвет дорог
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
          visibility: 'off', // Скрыть сетку
        },
      ],
    },
    {
      featureType: "landscape.man_made",
      elementType: "geometry",
      stylers: [
        {
          color: "#212c4b", // Можно также изменить цвет частей ландшафта
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#212c4b", // Цвет парков
        },
      ],
    },
  ],
};
