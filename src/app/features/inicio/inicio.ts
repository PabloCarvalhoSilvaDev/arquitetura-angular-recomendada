import { Component } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { CabecalhoPagina } from '../../shared/cabecalho-pagina/cabecalho-pagina';

@Component({
  selector: 'app-inicio',
  imports: [CabecalhoPagina],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Inicio {}
