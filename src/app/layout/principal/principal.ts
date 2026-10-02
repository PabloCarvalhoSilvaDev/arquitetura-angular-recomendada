import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ChangeDetectionStrategy } from '@angular/core';
import { MenuLateral } from '../menu-lateral/menu-lateral';

@Component({
  selector: 'app-principal',
  imports: [RouterLink, RouterOutlet, MenuLateral],
  templateUrl: './principal.html',
  styleUrl: './principal.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Principal {
  protected menuLateralAberto = false;
  protected readonly nomeUsuario = 'Pablo Carvalho Silva';

  protected alternarMenuLateral(): void {
    this.menuLateralAberto = !this.menuLateralAberto;
  }
}
