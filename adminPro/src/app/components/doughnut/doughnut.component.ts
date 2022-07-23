import { Component, Input } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styles: [
  ]
})
export class DoughnutComponent {
  @Input() title = 'Sin título';
  @Input() chartType: ChartType = 'doughnut';
  @Input() chartData?: ChartData<'doughnut'>


}
