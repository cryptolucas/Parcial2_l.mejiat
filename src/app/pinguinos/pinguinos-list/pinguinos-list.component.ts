import { Component, OnInit } from '@angular/core';
import { Pinguino } from '../pinguino';
import { PinguinoService } from '../pinguino.service';

@Component({
  selector: 'app-pinguinos-list',
  templateUrl: './pinguinos-list.component.html',
  styleUrls: ['./pinguinos-list.component.css']
})
export class PinguinosListComponent implements OnInit {

  pinguinos: Array<Pinguino> = [];

  mayor_distribucion: number = 0;
  pinguino_mayor: string = "";
  distribucion_mayor:string="";
  

  selected: Boolean = false;
  selectedPinguino!: Pinguino;

  constructor(private pinguinoService: PinguinoService) { }

  getPinguinos(): void {
    this.pinguinoService.getPinguinos().subscribe((pinguinos) => {
      this.pinguinos = pinguinos;
      this.Calcular_mayor_distribucion();
    });
  }

  onSelected(pinguino: Pinguino): void {
    this.selected = true;
    this.selectedPinguino = pinguino;
  }

  Calcular_mayor_distribucion(){
    let mayor_distribucion=0;
    for (const pinguino of this.pinguinos){
      if (pinguino.global_distribution.length > mayor_distribucion){
        mayor_distribucion = pinguino.global_distribution.length;
        this.pinguino_mayor = pinguino.name;
        this.distribucion_mayor = pinguino.global_distribution;
      }

    }

  }

  

  ngOnInit() {
    this.getPinguinos();
  }


}
