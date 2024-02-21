import { Component, Input, OnInit } from '@angular/core';
import { TableroService, Tarea } from 'src/app/services/tablero.service';

@Component({
  selector: 'app-tarjeta-tarea',
  templateUrl: './tarjeta-tarea.component.html',
  styleUrls: ['./tarjeta-tarea.component.css']
})
export class TarjetaTareaComponent implements OnInit {

  @Input() tarea!: Tarea;
  @Input() listaId!: number;
  @Input() tableroId!: number;

  listaIdAndName: any;

  constructor(private TableroService: TableroService) { }

  ngOnInit(): void {
    this.listaIdAndName = this.getListasNamesAndIdsFromTablero(this.tableroId);
  }

  getListasNamesAndIdsFromTablero(tableroId: number){
    return this.TableroService.getListasIDandNamesFromTablero(tableroId);
  }

  onSelectChange(event: any) {
    const newListaIdNumber = Number(event.target.value); // Convertir a número
    this.TableroService.moveTarea(this.tarea, this.listaId, this.tableroId, newListaIdNumber);
  }
}
