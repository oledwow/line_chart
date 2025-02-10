import * as d3 from 'd3'
import { legend } from '@rawgraphs/rawgraphs-core'
import '../d3-styles.js'

export function render(node, data, visualOptions, mapping) {
  const {
    width,
    height,
    background,
    lineWidth,
    colorScale
  } = visualOptions

  // SVG 생성
  const svg = d3.select(node)

  // 배경 추가
  svg
    .append('rect')
    .attr('width', width)
    .attr('height', height)
    .attr('fill', background)

  // 마진 설정
  const margin = { top: 50, right: 50, bottom: 50, left: 50 }
  const innerWidth = width - margin.left - margin.right
  const innerHeight = height - margin.top - margin.bottom

  // 스케일 설정
  const xScale = d3.scaleTime()
    .domain(d3.extent(data, d => d.date))
    .range([0, innerWidth])

  const yScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.value)])
    .range([innerHeight, 0])
    .nice()

  // 그래프 그룹 생성
  const g = svg.append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`)

  // 시리즈별로 데이터 그룹화
  const series = d3.group(data, d => d.series)

  // 라인 생성기
  const line = d3.line()
    .x(d => xScale(d.date))
    .y(d => yScale(d.value))

  // 라인 그리기
  series.forEach((values, key) => {
    g.append('path')
      .datum(values)
      .attr('fill', 'none')
      .attr('stroke', colorScale(key))
      .attr('stroke-width', lineWidth)
      .attr('d', line)
  })

  // 축 추가
  const xAxis = d3.axisBottom(xScale)
  const yAxis = d3.axisLeft(yScale)

  g.append('g')
    .attr('transform', `translate(0,${innerHeight})`)
    .call(xAxis)

  g.append('g')
    .call(yAxis)

  // 레전드 추가
  if (mapping.series.value) {
    const legendLayer = svg.append('g')
      .attr('id', 'legend')
      .attr('transform', `translate(${margin.left},${margin.top - 40})`)

    const chartLegend = legend()
      .legendWidth(innerWidth)
    
    chartLegend.addColor(mapping.series.value, colorScale)
    
    legendLayer.call(chartLegend)
  }
}