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
  

  selected: Boolean = false;
  selectedPinguino!: Pinguino;

  constructor(private pinguinoService: PinguinoService) { }

  getPinguinos(): void {
    this.pinguinoService.getPinguinos().subscribe((pinguinos) => {
      this.pinguinos = pinguinos;
      //this.calcularPromedioTemporadas();
    });
  }

  onSelected(pinguino: Pinguino): void {
    this.selected = true;
    this.selectedPinguino = pinguino;
  }

  

  ngOnInit() {
    this.getPinguinos();
  }


}
