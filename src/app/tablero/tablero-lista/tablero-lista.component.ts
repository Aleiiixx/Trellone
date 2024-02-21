import { Component, Input, OnInit } from '@angular/core';
import { TarjetaTareaComponent } from './tarjeta-tarea/tarjeta-tarea.component';
import { TableroService, Tablero, Lista } from 'src/app/services/tablero.service';

@Component({
  selector: 'app-tablero-lista',
  templateUrl: './tablero-lista.component.html',
  styleUrls: ['./tablero-lista.component.css']
})
export class TableroListaComponent implements OnInit {

  @Input() lista!: Lista;
  @Input() tableroId!: number;

  selectedTablero!: Tablero;

  constructor(private TableroService: TableroService) { }

  ngOnInit(): void {
  }

}
