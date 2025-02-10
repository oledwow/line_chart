export const visualOptions = {
  // one object for each visual option
  // example option
  // optionID: {                // unique id, used in the render.js
  //   type: 'number',          // type of input. Can be: number, text, boolean, colorScale
  //   label: 'Option label',   // the label displayed in the interface
  //   default: 20,             // default value
  //   group: 'Panel name',        // in which panel of the interface the option will be displayed
  // },
}
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
    default: 700, // 기본값: 800px
    group: 'layout',
  },
  height: {
    type: 'number',
    label: 'Chart Height', // 차트 높이
    default: 450, // 기본값: 600px
    group: 'layout',
  },
};