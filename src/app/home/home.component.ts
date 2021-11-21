import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isChartSelectProgress: boolean = false
  chartList = [
    { chartName: 'Line', chartSelected: false },
    { chartName: 'Area', chartSelected: false },
    { chartName: 'Column', chartSelected: false },
    { chartName: 'Bar', chartSelected: false },
    { chartName: 'Mixed', chartSelected: false },
    { chartName: 'Timeline', chartSelected: false },
    { chartName: 'Scatter', chartSelected: false },
    { chartName: 'Heatmap', chartSelected: false },
    { chartName: 'Treemap', chartSelected: false },
    { chartName: 'Pie', chartSelected: false },
    { chartName: 'Radar', chartSelected: false },
    { chartName: 'Radialbar', chartSelected: false },
    { chartName: 'Polar Area', chartSelected: false },
    { chartName: 'Candlestick', chartSelected: false },
    { chartName: 'Boxplot', chartSelected: false },
    { chartName: 'Bubble', chartSelected: false },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  selectedChart(chartData: any) {
    console.log(chartData);
    chartData.chartSelected = !chartData.chartSelected
  }

}
