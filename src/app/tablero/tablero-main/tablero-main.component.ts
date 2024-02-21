import { Component, OnInit } from '@angular/core';
import { TableroHeaderComponent } from '../tablero-header/tablero-header.component';
import { TableroService, Tablero } from 'src/app/services/tablero.service';
import { TableroListaComponent } from '../tablero-lista/tablero-lista.component';

@Component({
  selector: 'app-tablero-main',
  templateUrl: './tablero-main.component.html',
  styleUrls: ['./tablero-main.component.css']
})
export class TableroMainComponent implements OnInit {

  tableros!: Tablero[];
  selectedTablero!: Tablero;

  constructor(private TableroService: TableroService) { }

  ngOnInit(): void {
    this.cargarTableros();
    this.selectedTablero = this.getSelectedTablero();
  }

  getSelectedTablero(): Tablero {
    return this.TableroService.getSelectedTablero();
  }

  cargarTableros(): void {
    this.tableros = this.TableroService.getTableros();
  }

}
