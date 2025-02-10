export const visualOptions = {
  lineWidth: {
    type: 'number',
    label: 'Line Width', // 선의 두께 조절
    default: 2, // 기본값: 2
    group: 'chart',
  },
  colorScale: {
    type: 'colorScale',
    label: 'Color Scale', // 색상 선택
    dimension: 'color',
    default: {
      scaleType: 'ordinal',
      interpolator: 'interpolateSpectral',
    },
    group: 'color',
  },
  width: {
    type: 'number',
    label: 'Chart Width', // 차트 너비
    default: 800, // 기본값: 800px
    group: 'layout',
  },
  height: {
    type: 'number',
    label: 'Chart Height', // 차트 높이
    default: 600, // 기본값: 600px
    group: 'layout',
  },
};