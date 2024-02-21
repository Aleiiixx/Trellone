import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableroHeaderComponent } from './tablero-header.component';

describe('TableroHeaderComponent', () => {
  let component: TableroHeaderComponent;
  let fixture: ComponentFixture<TableroHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableroHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableroHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
