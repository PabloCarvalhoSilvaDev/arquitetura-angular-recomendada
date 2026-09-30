import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Empresas } from './empresas';

describe('Empresas', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Empresas],
    }).compileComponents();
  });

  it('deve criar o componente', () => {
    const fixture = TestBed.createComponent(Empresas);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('deve renderizar o cabeçalho da página', () => {
    const fixture = TestBed.createComponent(Empresas);
    fixture.detectChanges();

    const elemento = fixture.nativeElement as HTMLElement;
    expect(elemento.querySelector('h1')?.textContent).toBe('Empresas');
  });
});
