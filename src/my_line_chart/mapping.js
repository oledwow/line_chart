export const mapData = function (data, mapping, dataTypes, dimensions) {
  return data.map((d) => ({
    date: d[mapping.date.value],
    value: +d[mapping.value.value],
    series: mapping.series.value ? d[mapping.series.value] : 'default'
  }))
}