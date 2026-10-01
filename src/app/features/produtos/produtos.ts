import { Component } from '@angular/core';
import { CabecalhoPagina } from '../../shared/cabecalho-pagina/cabecalho-pagina';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-produtos',
  imports: [CabecalhoPagina],
  templateUrl: './produtos.html',
  styleUrl: './produtos.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Produtos {}
