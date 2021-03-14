import { Component } from '@angular/core';



@Component({
  selector: 'app-grafica1',
  templateUrl: './grafical.component.html',
  styles: [
  ]
})
export class GraficalComponent {

  public labels1: string[] = ['Pan', 'Refresco', 'Tacos'];
  public data1 = [
    [10, 15, 40],
  ];

}
