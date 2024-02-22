import { Component, Input } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  standalone: true,
  imports: [NgChartsModule],
  templateUrl: './dona.component.html',
  styleUrl: './dona.component.css'
})
export class DonaComponent {

  @Input() titulo: string = '';

  // Doughnut
  @Input('labels') doughnutChartLabels: string[] = [
    'Label1',
    'Label2',
    'Label3',
  ];
  @Input('data') doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [350, 450, 100],
        backgroundColor: [ '#6857E6', '#009FFE', '#F02059' ]
      },
      
    ],
  };
      public doughnutChartType: ChartType = 'doughnut';

}
