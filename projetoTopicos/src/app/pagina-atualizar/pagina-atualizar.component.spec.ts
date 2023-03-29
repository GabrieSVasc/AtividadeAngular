import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaAtualizarComponent } from './pagina-atualizar.component';

describe('PaginaAtualizarComponent', () => {
  let component: PaginaAtualizarComponent;
  let fixture: ComponentFixture<PaginaAtualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaAtualizarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaAtualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
