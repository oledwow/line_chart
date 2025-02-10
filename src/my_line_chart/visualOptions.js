export const visualOptions = {
  width: {
    type: 'number',
    label: 'Width',
    default: 700,
    group: 'chart',
  },
  height: {
    type: 'number',
    label: 'Height',
    default: 450,
    group: 'chart',
  },
  lineWidth: {
    type: 'number',
    label: 'Line width',
    default: 2,
    group: 'chart',
  },
  colorScale: {
    type: 'colorScale',
    label: 'Color scale',
    dimension: 'series',
    default: {
      scaleType: 'ordinal',
      interpolator: 'interpolateSpectral',
    },
    group: 'colors',
  }
}