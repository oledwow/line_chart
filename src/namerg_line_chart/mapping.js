export const mapData = function (data, mapping, dataTypes, dimensions) {
  return data.map((d) => ({
    x: d[mapping.x.value], // X축 데이터
    y: d[mapping.y.value], // Y축 데이터
    color: d[mapping.color.value], // 색상 데이터
  }));
};