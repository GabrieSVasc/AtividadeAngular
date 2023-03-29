import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaCriarComponent } from './pagina-criar.component';

describe('PaginaCriarComponent', () => {
  let component: PaginaCriarComponent;
  let fixture: ComponentFixture<PaginaCriarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaCriarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaCriarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
