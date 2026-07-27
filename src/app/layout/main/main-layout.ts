import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { SidebarLayout } from '../sidebar/sidebar-layout';

/**
 * Shell visual da aplicação (header + área de conteúdo).
 * Layout não é feature de negócio — fica separado em `layout/`.
 */
@Component({
  selector: 'app-main-layout',
  imports: [RouterLink, RouterOutlet, SidebarLayout],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {
  protected isSidebarOpen = false;
  protected readonly userName = 'Pablo Carvalho Silva';

  protected toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
