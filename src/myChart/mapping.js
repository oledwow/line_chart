export const mapData = function (data, mapping, dataTypes, dimensions) {
  
  // you can use information in mapping to tranform input data in the
  // most suitable format required by the render function.

  // you can use a declarative approach for simple transformation (e.g. just changing
  // the name of a column).
  // mopre info: https://rawgraphs.github.io/rawgraphs-core/docs/declarative-mapping

  //return data.map((d) => ({
    //name: d[mapping['dimensionName'].value],
  //}))
}
export const mapData = function (data, mapping, dataTypes, dimensions) {
  return data.map((d) => ({
    x: d[mapping.x.value], // X축 데이터
    y: d[mapping.y.value], // Y축 데이터
    color: d[mapping.color.value], // 색상 데이터
  }));
};