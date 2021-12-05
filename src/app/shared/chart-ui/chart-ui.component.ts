import { CounterState } from './../../ngrx/chart/chart.state';
import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
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
import { Subscription } from 'rxjs';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  markers: ApexMarkers;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-chart-ui',
  templateUrl: './chart-ui.component.html',
  styleUrls: ['./chart-ui.component.scss']
})
export class ChartUiComponent implements OnInit, OnDestroy {

  @ViewChild("chart") chart: ChartComponent | any;
  @Input() hoverChartName: string = 'Data';
  @Input() chartTitle: string = 'Stepline Chart';
  @Input() chartType: string = 'line';
  @Input() chartData: any = [];
  @Input() chartData2: string = '';
  public chartOptions: Partial<ChartOptions> | any;
  counterSubscription: Subscription | any;
  counter: number = 0;
  constructor(
    private store: Store<{ counter: CounterState }>
  ) {
    console.log(this.chartData2)
    this.chartOptions = {
      series: [
        {
          name: this.hoverChartName,
          data: this.chartData.length !== 0 ? this.chartData : [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58]
        }
      ],
      chart: {
        type: this.chartType,
        height: 350,
      },
      stroke: {
        curve: "stepline"
      },
      dataLabels: {
        enabled: false
      },
      title: {
        text: this.chartTitle,
        align: "left"
      },
      markers: {
        hover: {
          sizeOffset: 4
        }
      }
    };
  }

  ngOnInit(): void {
    this.counterSubscription = this.store.select('counter').subscribe((data) => {
      this.counter = data.counter;
    })
  }

  ngOnDestroy() {
    if(this.counterSubscription){
      this.counterSubscription.unsubscribe();
    }
  }

}
