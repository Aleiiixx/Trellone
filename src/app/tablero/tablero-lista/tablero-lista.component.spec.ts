import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableroListaComponent } from './tablero-lista.component';

describe('TableroListaComponent', () => {
  let component: TableroListaComponent;
  let fixture: ComponentFixture<TableroListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableroListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableroListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
