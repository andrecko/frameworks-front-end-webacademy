import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroAtendimentoComponent } from './filtro-atendimento.component';

describe('FiltroAtendimentoComponent', () => {
  let component: FiltroAtendimentoComponent;
  let fixture: ComponentFixture<FiltroAtendimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroAtendimentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroAtendimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
