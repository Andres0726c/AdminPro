import { Component } from '@angular/core';
import { DonaComponent } from '../../components/dona/dona.component';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-grafica1',
  standalone: true,
  imports: [DonaComponent],
  templateUrl: './grafica1.component.html',
  styleUrl: './grafica1.component.css'
})
export default class Grafica1Component {

  doughnutChartLabels: string[] = [ 'Pan', 'Refresco', 'Tacos' ];
  public data1:ChartData<'doughnut'> = {
  labels: this.doughnutChartLabels,
  datasets: [ {  data: [ 40, 10, 100 ],
                 backgroundColor: ['#00821C','#09DB36','#024D0F'],
                 hoverBackgroundColor: ['#00821C','#09DB36','#024D0F'],
                 hoverBorderColor:['#000000','#000000','#00000003']
              },
            ]

  }
  doughnutChartLabels1: string[] = [ 'Ropa', 'Número', 'Pc Portátil' ];
  public data2:ChartData<'doughnut'> = {
  labels: this.doughnutChartLabels1,
  datasets: [ {  data: [ 65, 10, 25 ],
                 backgroundColor: ['#00821C','#09DB36','#024D0F'],
                 hoverBackgroundColor: ['#00821C','#09DB36','#024D0F'],
                 hoverBorderColor:['#000000','#000000','#00000003']
              },
            ]

  }
  doughnutChartLabels2: string[] = [ 'Banco', 'Prestamo', 'Celular' ];
  public data3:ChartData<'doughnut'> = {
  labels: this.doughnutChartLabels2,
  datasets: [ {  data: [ 70, 20, 10 ],
                 backgroundColor: ['#00821C','#09DB36','#024D0F'],
                 hoverBackgroundColor: ['#00821C','#09DB36','#024D0F'],
                 hoverBorderColor:['#000000','#000000','#00000003']
              },
            ]

  }
}
