import { Component, OnInit } from '@angular/core';
import { TableroService, Tablero } from 'src/app/services/tablero.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-tablero-header',
  templateUrl: './tablero-header.component.html',
  styleUrls: ['./tablero-header.component.css']
})

export class TableroHeaderComponent implements OnInit {

  selectedTablero!: Tablero;
  private selectedTableroSubscription!: Subscription;

  constructor(private TableroService: TableroService) { 
    this.selectedTableroSubscription = this.TableroService.selectedTablero$.subscribe(tablero => {
      this.selectedTablero = tablero;
    });
  }

  ngOnInit(): void {
  }

}
