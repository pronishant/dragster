import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartUiComponent } from './chart-ui/chart-ui.component';
import { NgApexchartsModule } from 'ng-apexcharts';



@NgModule({
  declarations: [
    ChartUiComponent
  ],
  imports: [
    CommonModule,
    NgApexchartsModule
  ],
  exports:[
    ChartUiComponent
  ]
})
export class SharedModule { }
