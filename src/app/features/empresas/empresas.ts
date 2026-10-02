import { Component } from '@angular/core';
import { CabecalhoPagina } from '../../shared/cabecalho-pagina/cabecalho-pagina';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-empresas',
  imports: [CabecalhoPagina],
  templateUrl: './empresas.html',
  styleUrl: './empresas.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Empresas {}
