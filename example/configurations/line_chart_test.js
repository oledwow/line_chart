import data from '../datasets/data.csv'
import chart from '../../src/my_line_chart'

export default {
  chart,
  data,
  dataTypes: {
    date: {
      type: 'date',
      dateFormat: 'YYYY-MM-DD'
    },
    value: 'number',
    series: 'string'
  },
  mapping: {
    date: {
      value: ['date']
    },
    value: {
      value: ['value']
    },
    series: {
      value: ['series']
    }
  },
  visualOptions: {
    width: 800,
    height: 600,
    background: '#ffffff',
    lineWidth: 2
  }
}