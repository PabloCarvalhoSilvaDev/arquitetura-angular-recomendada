import { Component, input } from '@angular/core';

/**
 * Componente reutilizável de UI.
 * Fica em `shared` porque não contém regra de negócio de nenhuma feature.
 */
@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.html',
  styleUrl: './page-header.css',
})
export class PageHeader {
  readonly title = input.required<string>();
  readonly subtitle = input<string>('');
}
