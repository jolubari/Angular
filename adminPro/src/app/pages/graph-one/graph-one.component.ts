import { Component } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';


@Component({
  selector: 'app-graph-one',
  templateUrl: './graph-one.component.html',
  styles: [
  ]
})
export class GraphOneComponent {

  public chartType: ChartType = 'doughnut';


  public chartsLabelsSales: string[] = [ 'Comida', 'Bedidas', 'Postres' ];

  public chartTitleSales: string = 'Sales';

  public chartDataSales: ChartData<'doughnut'> = {
    labels: this.chartsLabelsSales,
    datasets: [
      { data: [ 33, 43, 13 ], backgroundColor: ['#6857E6', '#009FEE', '#F02059'] },
    ]
  };


  public chartsLabelsFood: string[] = [ 'Pan', 'Pollo', 'Tacos' ];

  public chartTitleFood: string = 'Food';

  public chartDataFood: ChartData<'doughnut'> = {
    labels: this.chartsLabelsFood,
    datasets: [
      { data: [ 50, 45, 10 ], backgroundColor: ['#6857E6', '#009FEE', '#F02059'] },
    ]
  };


  public chartsLabelsDrinks: string[] = [ 'Cerveza', 'Coca cola', 'Agua' ];

  public chartTitleDrinks: string = 'Drinks';

  public chartDataDrinks: ChartData<'doughnut'> = {
    labels: this.chartsLabelsDrinks,
    datasets: [
      { data: [ 10, 15, 40 ], backgroundColor: ['#6857E6', '#009FEE', '#F02059'] },
    ]
  };


  public chartsLabelsDessert: string[] = [ 'Fruta', 'Helados', 'Tarta' ];

  public chartTitleDessert: string = 'Dessert';

  public chartDataDessert: ChartData<'doughnut'> = {
    labels: this.chartsLabelsDessert,
    datasets: [
      { data: [ 35, 45, 10 ], backgroundColor: ['#6857E6', '#009FEE', '#F02059'] },
    ]
  };


}
