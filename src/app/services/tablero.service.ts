import { Injectable } from '@angular/core';

export interface Tarea {
  id: number;
  titulo: string;
  descripcion?: string;
  completada: boolean;
}

export interface Lista {
  id: number;
  titulo: string;
  tareas: Tarea[];
}

export interface Tablero {
  id: number;
  titulo: string;
  listas: Lista[];
}

@Injectable({
  providedIn: 'root'
})

export class TableroService {
  private tableros: Tablero[] = [
    {
      id: 1,
      titulo: 'Tablero de Ejemplo',
      listas: [
        {
          id: 1,
          titulo: 'Lista de Tareas 1',
          tareas: [
            { id: 1, titulo: 'Tarea 1.1', descripcion: 'Descripción de la tarea 1', completada: false },
            { id: 2, titulo: 'Tarea 1.2', descripcion: 'Descripción de la tarea 1', completada: false },
            { id: 3, titulo: 'Tarea 1.3', descripcion: 'Descripción de la tarea 1', completada: false },
            { id: 4, titulo: 'Tarea 1.4', descripcion: 'Descripción de la tarea 1', completada: false },
          ]
        },
        {
          id: 2,
          titulo: 'Lista de Tareas 2',
          tareas: [
            { id: 1, titulo: 'Tarea 2.1', descripcion: 'Descripción de la tarea 1', completada: false },
            { id: 2, titulo: 'Tarea 2.2', descripcion: 'Descripción de la tarea 1', completada: false },
            { id: 3, titulo: 'Tarea 2.3', descripcion: 'Descripción de la tarea 1', completada: false },
            { id: 4, titulo: 'Tarea 2.4', descripcion: 'Descripción de la tarea 1', completada: false },
          ]
        },
        {
          id: 3,
          titulo: 'Lista de Tareas 3',
          tareas: [
            { id: 1, titulo: 'Tarea 3.1', descripcion: 'Descripción de la tarea 1', completada: false },
            { id: 2, titulo: 'Tarea 3.2', descripcion: 'Descripción de la tarea 1', completada: false },
            { id: 3, titulo: 'Tarea 3.3', descripcion: 'Descripción de la tarea 1', completada: false },
            { id: 4, titulo: 'Tarea 3.4', descripcion: 'Descripción de la tarea 1', completada: false },
          ]
        },
      ]
    },
  ];

  private selectedTablero: Tablero = this.tableros[0];

  constructor() { }

  getTableros(): Tablero[] {
    return this.tableros;
  }

  getSelectedTablero(): Tablero {
    return this.selectedTablero;
  }

  getListasIDandNamesFromTablero(tableroId: number){
    let tablero = this.tableros.find(tablero => tablero.id === tableroId);
    let listas = tablero?.listas.map(lista => {
      return {id: lista.id, titulo: lista.titulo}
    });
    return listas;
  }

  moveTarea(tarea: Tarea, listaId: number, tableroId: number, newListaId: number): void {

    // Encuentra el tablero por el ID.
    const tablero = this.tableros.find(t => t.id === tableroId);
    console.log(tablero)
    if (!tablero) {
      console.error('Tablero no encontrado');
      return;
    }
  
    // Encuentra la lista original y elimina la tarea.
    const listaOriginal = tablero.listas.find(l => l.id === listaId);
    console.log(listaOriginal)
    if (listaOriginal) {
      const tareaIndex = listaOriginal.tareas.findIndex(t => t.id === tarea.id);
      if (tareaIndex > -1) {
        listaOriginal.tareas.splice(tareaIndex, 1);
        this.reasignarIds(listaOriginal.tareas);
      }
    }

    // Encuentra la nueva lista y agrega la tarea.
    const nuevaLista = tablero.listas.find(l => l.id === newListaId);
    console.log(tablero)
    if (nuevaLista) {
      nuevaLista.tareas.push(tarea);
      this.reasignarIds(nuevaLista.tareas);
    }

    
  }

  private reasignarIds(tareas: Tarea[]): void {
    tareas.forEach((tarea, index) => {
      tarea.id = index + 1; // Reasignar ID basado en el índice de la tarea en la lista
    });
  }

}
