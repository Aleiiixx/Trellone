import { Component, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { TableroHeaderComponent } from '../tablero-header/tablero-header.component';
import { TableroService, Tablero } from 'src/app/services/tablero.service';
import { TableroListaComponent } from '../tablero-lista/tablero-lista.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tablero-main',
  templateUrl: './tablero-main.component.html',
  styleUrls: ['./tablero-main.component.css']
})
export class TableroMainComponent implements OnInit {

  tableros!: Tablero[];
  selectedTablero!: Tablero;
  private selectedTableroSubscription!: Subscription;

  constructor(private TableroService: TableroService) { 
    this.selectedTableroSubscription = this.TableroService.selectedTablero$.subscribe(tablero => {
      this.selectedTablero = tablero;
    });
  }

  ngOnInit(): void {
    this.cargarTableros();
  }

  cargarTableros(): void {
    this.tableros = this.TableroService.getTableros();
  }

  ngOnDestroy(): void {
    this.selectedTableroSubscription.unsubscribe();
  }

}
