import * as d3 from 'd3';

export function render(node, data, visualOptions, mapping) {
  const { width, height, lineWidth, colorScale } = visualOptions;

  // SVG 초기화
  const svg = d3.select(node)
    .attr('width', width)
    .attr('height', height);

  // 여백 설정
  const margin = { top: 20, right: 30, bottom: 30, left: 40 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  const chart = svg.append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);

  // X축과 Y축 스케일 설정
  const xScale = d3.scaleLinear()
    .domain(d3.extent(data, (d) => d.x))
    .range([0, chartWidth]);

  const yScale = d3.scaleLinear()
    .domain([0, d3.max(data, (d) => d.y)])
    .range([chartHeight, 0]);

  // 라인 생성기
  const lineGenerator = d3.line()
    .x((d) => xScale(d.x))
    .y((d) => yScale(d.y))
    .curve(d3.curveMonotoneX); // 곡선 스타일 (옵션)

  // 데이터 그룹화 (색상별)
  const groupedData = d3.group(data, (d) => d.color);

  // 라인 그리기
  groupedData.forEach((values, key) => {
    chart.append('path')
      .datum(values)
      .attr('fill', 'none')
      .attr('stroke', colorScale ? colorScale[key] : 'black') // 색상 적용
      .attr('stroke-width', lineWidth)
      .attr('d', lineGenerator);
  });

  // X축 추가
  chart.append('g')
    .attr('transform', `translate(0,${chartHeight})`)
    .call(d3.axisBottom(xScale));

  // Y축 추가
  chart.append('g')
    .call(d3.axisLeft(yScale));
}