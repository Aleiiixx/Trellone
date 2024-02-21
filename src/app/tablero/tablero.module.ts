import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableroMainComponent } from './tablero-main/tablero-main.component';
import { TableroHeaderComponent } from './tablero-header/tablero-header.component';
import { TableroListaComponent } from './tablero-lista/tablero-lista.component';
import { TarjetaTareaComponent } from './tablero-lista/tarjeta-tarea/tarjeta-tarea.component';

@NgModule({
  declarations: [
    TableroMainComponent,
    TableroHeaderComponent,
    TableroListaComponent,
    TarjetaTareaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TableroMainComponent
  ]
})
export class TableroModule { }
