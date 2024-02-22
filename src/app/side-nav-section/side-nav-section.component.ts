import { Component, OnInit } from '@angular/core';
import { TableroService, Tablero, Lista, Tarea } from '../services/tablero.service';

@Component({
  selector: 'app-side-nav-section',
  templateUrl: './side-nav-section.component.html',
  styleUrls: ['./side-nav-section.component.css']
})
export class SideNavSectionComponent implements OnInit {

  selectedTablero: Tablero | null = null;

  tableros: Tablero[] = this.TableroService.getTableros();

  constructor(private TableroService: TableroService) { }

  ngOnInit(): void {
  }

  cambiarTablero(tableroID: number): void {
    this.TableroService.selectTablero(tableroID);
  }

}
