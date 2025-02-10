export const dimensions = [
  {
    id: 'x',
    name: 'X Axis (Time/Category)', // X축 데이터
    validTypes: ['number', 'date', 'string'], // 허용되는 데이터 타입
    required: true, // 필수
  },
  {
    id: 'y',
    name: 'Y Axis (Value)', // Y축 데이터
    validTypes: ['number'], // 허용되는 데이터 타입
    required: true, // 필수
  },
  {
    id: 'color',
    name: 'Line Color', // 라인의 색상
    validTypes: ['string'], // 허용되는 데이터 타입
    required: false, // 선택 사항
  },
];