import { CounterState } from './../ngrx/chart/chart.state';
import { decrement } from './../ngrx/chart/counter.actions';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexStroke,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexMarkers
} from "ng-apexcharts";
import { increment } from '../ngrx/chart/counter.actions';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  markers: ApexMarkers;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isLoading: boolean = false;
  @ViewChild("chart") chart: ChartComponent | any;
  public chartOptions: Partial<ChartOptions> | any;
  isChartSelectProgress: boolean = false
  chartList = [
    {
      chartName: 'Line', chartSelected: false, iconPath: '../../assets/charts/line-chart.png',
      isDisabled: false,
      subCharts: [
        { isSelected: false, sChartName: 'Basic Chart', sChartIconPath: '../../assets/charts/line/basic-line-chart.png' },
        { isSelected: false, sChartName: 'Chart with Datatables', sChartIconPath: '../../assets/charts/line/datatables.png' },
        { isSelected: false, sChartName: 'Zoomable Timeseries', sChartIconPath: '../../assets/charts/line/timeseries.png' },
        { isSelected: false, sChartName: 'Line With Annotations', sChartIconPath: '../../assets/charts/line/annotations.png' },
        { isSelected: false, sChartName: 'Syncing Charts', sChartIconPath: '../../assets/charts/line/sync-charts-1.png' },
        { isSelected: false, sChartName: 'Brush Charts', sChartIconPath: '../../assets/charts/line/brush-chart.png' },
        { isSelected: false, sChartName: 'Stepline Charts', sChartIconPath: '../../assets/charts/line/javascript-stepline.png' },
        { isSelected: false, sChartName: 'Gradient Line Charts', sChartIconPath: '../../assets/charts/line/gradient-line.svg' },
        { isSelected: false, sChartName: 'Missing/Null Values', sChartIconPath: '../../assets/charts/line/null-values.png' },
        { isSelected: false, sChartName: 'Realtime Chart', sChartIconPath: '../../assets/charts/line/realtime-line-chart.png' },
        { isSelected: false, sChartName: 'Dashed Line Chart', sChartIconPath: '../../assets/charts/line/chart-dashed.png' },
      ]
    },
    {
      chartName: 'Area', chartSelected: false, iconPath: '../../assets/charts/area-chart.png',
      isDisabled: false,
      subCharts: [
        { isSelected: false, sChartName: '', sChartIconPath: '' }
      ]
    },
    {
      chartName: 'Column', chartSelected: false, iconPath: '../../assets/charts/column.png',
      isDisabled: false,
      subCharts: [
        { isSelected: false, sChartName: '', sChartIconPath: '' }
      ]
    },
    {
      chartName: 'Bar', chartSelected: false, iconPath: '../../assets/charts/bar-chart.png',
      isDisabled: false,
      subCharts: [
        { isSelected: false, sChartName: '', sChartIconPath: '' }
      ]
    },
    {
      chartName: 'Mixed', chartSelected: false, iconPath: '../../assets/charts/mixed-chart.png',
      isDisabled: false,
      subCharts: [
        { isSelected: false, sChartName: '', sChartIconPath: '' }
      ]
    },
    {
      chartName: 'Timeline', chartSelected: false, iconPath: '../../assets/charts/timeline.png',
      isDisabled: false,
      subCharts: [
        { isSelected: false, sChartName: '', sChartIconPath: '' }
      ]
    },
    {
      chartName: 'Scatter', chartSelected: false, iconPath: '../../assets/charts/scatter.png',
      isDisabled: false,
      subCharts: [
        { isSelected: false, sChartName: '', sChartIconPath: '' }
      ]
    },
    {
      chartName: 'Heatmap', chartSelected: false, iconPath: '../../assets/charts/heatmm.png',
      isDisabled: false,
      subCharts: [
        { isSelected: false, sChartName: '', sChartIconPath: '' }
      ]
    },
    {
      chartName: 'Treemap', chartSelected: false, iconPath: '../../assets/charts/treemap-chart.png',
      isDisabled: false,
      subCharts: [
        { isSelected: false, sChartName: '', sChartIconPath: '' }
      ]
    },
    {
      chartName: 'Pie', chartSelected: false, iconPath: '../../assets/charts/pie-chart.png',
      isDisabled: false,
      subCharts: [
        { isSelected: false, sChartName: '', sChartIconPath: '' }
      ]
    },
    {
      chartName: 'Radar', chartSelected: false, iconPath: '../../assets/charts/radar.png',
      isDisabled: false,
      subCharts: [
        { isSelected: false, sChartName: '', sChartIconPath: '' }
      ]
    },
    {
      chartName: 'Radialbar', chartSelected: false, iconPath: '../../assets/charts/radialbar.png',
      isDisabled: false,
      subCharts: [
        { isSelected: false, sChartName: '', sChartIconPath: '' }
      ]
    },
    {
      chartName: 'Polar Area', chartSelected: false, iconPath: '../../assets/charts/polarAreaChart3.png',
      isDisabled: false,
      subCharts: [
        { isSelected: false, sChartName: '', sChartIconPath: '' }
      ]
    },
    {
      chartName: 'Candlestick', chartSelected: false, iconPath: '../../assets/charts/candlestick.png',
      isDisabled: false,
      subCharts: [
        { isSelected: false, sChartName: '', sChartIconPath: '' }
      ]
    },
    {
      chartName: 'Bubble', chartSelected: false, iconPath: '../../assets/charts/bubble.png',
      isDisabled: false,
      subCharts: [
        { isSelected: false, sChartName: '', sChartIconPath: '' }
      ]
    },
  ];

  constructor(
    private store: Store<{ counter: CounterState }>
  ) { }

  ngOnInit(): void {
    this.chartOptions = {
      series: [
        {
          name: "data",
          data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58]
        }
      ],
      chart: {
        type: "line",
        height: 350,
        zoom: {
          enabled: false
        }
      },
      stroke: {
        curve: "stepline"
      },
      dataLabels: {
        enabled: false
      },
      title: {
        text: "Stepline Chart",
        align: "left"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      markers: {
        hover: {
          sizeOffset: 4
        }
      }
    };
  }

  selectedChart(mainChartType: string, chartData: any, subChart: any) {
    this.isLoading = true;
    subChart.isSelected = true;
    // this.chartOptions.stroke.curve = 'straight';
    // this.chartOptions.title.text = 'Basic Line Chart';
    // console.log(chartData)
    const c_data_f = chartData.filter((dt: any) => dt.sChartName !== subChart.sChartName)
    c_data_f.forEach((ele: { isSelected: boolean }) => {
      ele.isSelected = false;
      this.isLoading = false;
    });
    // subChart['chartType'] = mainChartType;
    subChart = Object.assign(subChart, { chartType: mainChartType })
    console.log(subChart);
    // console.log(c_data_f);
  }
  myNum: number = 0;
  increment() {
    console.log(this.myNum)
    this.store.dispatch(increment({ val: this.myNum }))
  }

  decrement() {
    this.store.dispatch(decrement())
  }

}
